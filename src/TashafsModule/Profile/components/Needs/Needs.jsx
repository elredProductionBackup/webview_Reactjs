import React, { useContext, useEffect, useRef, useState } from "react";
import "./needs.scss";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { openNeedCard } from "./needsGlobalFunctions";
import { calcTextLength, navigateToPath } from "../../../../globalFunctions";
import { GlobalData } from "../../../../App";
import map from "../../../../assets/images/mapIcon.svg";
import { Spinner } from 'react-bootstrap'
const Needs = ({ rgba, userCode, needsData }) => {
  const [locationLoader, setlocationLoader] = useState(true)
  const navigate = useNavigate();
  const { setFormData } = useContext(GlobalData);
  const scrollRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const handleMouseUp = (e) => {
      setIsDragging(false)
    };
    document.addEventListener("mouseup", handleMouseUp)
    return () => {
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [])

  const handleMouseDown = (e) => {
    if (e.button !== 0) return;
    setIsDragging(true);
    setStartPosition(e.clientX)
    setScrollLeft(scrollRef.current.scrollLeft)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startPosition;
    scrollRef.current.scrollLeft = scrollLeft - deltaX;
  }

  return (
    <div className="needs" style={{ background: `${rgba}` }}>
      <div className="needs-top">
        <div className="heading">I need</div>
        <div
          className="see-text"
          onClick={(e) => {
            navigateToPath(navigate, userCode, "/my-bio/needs")
          }}
        >
          See all
        </div>
      </div>
      <div className="needs-card-div"
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
      >
        {needsData?.map((item, id) => (
          <div
            className="needs-card"
            key={id}
            onClick={() =>
              openNeedCard(item?.needId, userCode, navigate, setFormData)
            }
          >
            <div className="date-location">
              <span className="date">
                {moment(item?.needCreatedAt).format("ddd, DD MMM YYYY")}
              </span>
              <div className="d-flex location-icon-text" >
                <span >
                  <Spinner animation="border" variant="light" size="sm" className={locationLoader ? 'show-img-loader location-loader-spinner' : 'hide-img-loader'} />

                  <img src={map} alt="" className={!locationLoader ? 'show-image-after-loader location-icon' : "hide-img-loader"} 
                   onLoad={() => setlocationLoader(false)} 
                  />
                </span>
                <span className="location">
                {item?.location?.fullAddress === "" ? "Remote" : `${calcTextLength(26, item?.location?.fullAddress)}`}

                </span>
              </div>
            </div>
            <div className="title">{item?.needDescription}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Needs;
