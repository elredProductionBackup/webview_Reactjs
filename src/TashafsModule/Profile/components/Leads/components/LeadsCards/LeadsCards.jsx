import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { convertToRgbColor, navigateToLeadsWithState } from "../../../../../../globalFunctions";
import { useState } from "react";
import noImageLeads from '../../../../../../assets/images/leads-no-img-background.png'
import LeadsCardBottomInView from "./LeadsCardBottomInView";
import Skeleton from "react-loading-skeleton";
import { Spinner } from 'react-bootstrap'
import { ImgaeLoaderFunction, lazyLoadImages } from "../../LeadsGlobalFunctions";

const LeadsCards = ({ leadsData, userCode, isLive, productionUrl, setFormData, handleDragStart, handleDragEnd, handleDrag, MoveEventprops, slider, baseColor }) => {
  const navigate = useNavigate();
  const navigateState = { isLive, productionUrl };
  const [locationLoader, setlocationLoader] = useState(true)
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoadingStates, setImageLoadingStates] = useState({});
  const [lazyLoadedIndices, setLazyLoadedIndices] = useState([]);
  const [isError, setIsError] = useState([]);
const[isLazyLoadingError,setIsLazyLoadingError]=useState([])
  useEffect(() => {
    if (leadsData) {

      ImgaeLoaderFunction(leadsData, setIsLoading, noImageLeads, setIsError, isError)
    }

  }, []);

  let color = convertToRgbColor(baseColor);
  const rgba = `rgba(${color?.[0]},${color?.[1]},${color?.[2]},50%)`;
  return (
    <div className={isLoading ? "leads-cards overFlow-disable-for-leads" : "leads-cards"} onScroll={(e) => lazyLoadImages(setLazyLoadedIndices, setImageLoadingStates, leadsData, noImageLeads,isLazyLoadingError,setIsLazyLoadingError)
    } id='profile-leads-list'
      onMouseDown={(e) => handleDragStart(slider, MoveEventprops, e, isLoading)}
      onMouseUp={(e) => handleDragEnd(slider, MoveEventprops, e, isLoading)}
      onMouseLeave={(e) => handleDragEnd(slider, MoveEventprops, e, isLoading)}
      onMouseMove={(e) => handleDrag(slider, MoveEventprops, e, isLoading)}>
      {leadsData.length !== 0 && leadsData?.map((item, index) => (

        <div
          key={item?.leadId}
          onClick={(e) => {
            if (!isLoading) {
              navigateToLeadsWithState(navigate, userCode, item?.leadId, "/leads/responding-leads", navigateState, setFormData, e)
            }

          }
          }
          style={
            isLoading
              ? { backgroundColor: `${rgba}`, cursor: "default" }
              : lazyLoadedIndices.includes(index) ? {
                backgroundImage: item?.backgroundImages?.length !== 0 && isLazyLoadingError[index] ===false
                  ? `linear-gradient( rgba(0,0,0,0.2), rgba(0,0,0,0.7)), url(${item?.backgroundImages[0]})`
                  : `url(${noImageLeads})`,

              } : index < 2
                ? {
                  backgroundImage: item?.backgroundImages?.length !== 0 && isError[index] === false
                    ? `linear-gradient( rgba(0,0,0,0.2), rgba(0,0,0,0.7)), url(${item?.backgroundImages[0]})`
                    : `url(${noImageLeads})`,

                }
                : {}
          }
          data-index={index}
          className={(index >= leadsData.length - (leadsData.length - 2) && !lazyLoadedIndices.includes(index)) ? 'lazy-load-item card' : 'card'}
        >
          {imageLoadingStates[index] && (
            <div className="spinner-overlay-danger">
              <Spinner animation="border" variant="danger" size="sm" />
            </div>
          )}
          {isLoading ? <div className="inner-shimmer">
            <Skeleton
              width={50}
              height={7}
              borderRadius={6}
              baseColor={`#${baseColor}`}
            />
            <Skeleton
              width={100}
              height={7}
              borderRadius={6}
              baseColor={`#${baseColor}`}
            />
            <Skeleton
              width={110}
              height={7}
              borderRadius={6}
              baseColor={`#${baseColor}`}
            />

            <div style={{ lineHeight: "10px" }}>
              <Skeleton
                width={150}
                height={4}
                baseColor={`#${baseColor}`}
                borderRadius={6}
              />
            </div>
            <div style={{ lineHeight: "10px" }}>
              <Skeleton
                width={150}
                height={4}
                baseColor={`#${baseColor}`}
                borderRadius={6}
              />
            </div>
            <div style={{ lineHeight: "10px" }}>
              <Skeleton
                width={150}
                height={4}
                baseColor={`#${baseColor}`}
                borderRadius={6}
              />
            </div>
          </div> :
            <LeadsCardBottomInView locationLoader={locationLoader} item={item} setlocationLoader={setlocationLoader} />
          }
        </div>
      ))}
    </div>
  );
};

export default LeadsCards;



