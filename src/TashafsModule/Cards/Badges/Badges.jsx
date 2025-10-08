import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./badges.scss";
import Skeleton from 'react-loading-skeleton'
import { redirectToAwards } from "../../../globalFunctions";
import defaultImg from "../../../assets/images/group_default.png"

const Badges = ({ data, count, isNetwork, isMiniCardThumbnail, noBorder }) => {
  const baseColor = '#242939';
  const highlightColor ="#1e212b";
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState([]);

  const navigate = useNavigate();
  let [searchParams] = useSearchParams();
  const userCode = searchParams.get("userCode");

  useEffect(() => {
    let lengthVal = data?.length <= 4 ? data?.length : 3
    const promises = data?.slice(0, lengthVal).map((imagePath, index) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          isError[index] = false;
          setIsError(isError);
          resolve();
        };
        img.onerror = () => {         
          isError[index] = true;
          setIsError(isError);
          resolve();
        };
        img.src = isNetwork ? imagePath?.logo : imagePath.awardIconURL;
      });
    });

    Promise.all(promises).then(() => {
      setIsLoading(false);
    });
  }, []); // eslint-disable-line

  return (
    <div className="badges">
      {count < 4 ? (
        <>
          {data?.map((item, id) => (
            <div className={isLoading || noBorder ? "badge" : "badge badge-border-white"} key={id} onClick={() => redirectToAwards(isMiniCardThumbnail, isNetwork, userCode, navigate)}>
              <Skeleton circle height={31} width={31} baseColor={baseColor} highlightColor={highlightColor} className={isLoading ? 'showing-img-loader bastch-Shimmer' : "hiding-img-loader"} />
              <img src={isNetwork ? isError[id] ? defaultImg : item?.logo : item.awardIconURL} alt="" className={!isLoading ? 'showing-img-loader' : "hiding-img-loader"} />
            </div>
          ))}
        </>
      ) : (
        <>
          {data?.slice(0, 3).map((item, id) => (
            <div className={isLoading || noBorder ? "badge" : "badge badge-border-white"} key={id} onClick={() => redirectToAwards(isMiniCardThumbnail, isNetwork, userCode, navigate)}>
              <Skeleton circle height={31} width={31} baseColor={baseColor} highlightColor={highlightColor} className={isLoading ? 'showing-img-loader bastch-Shimmer' : "hiding-img-loader"} />
              <img src={isNetwork ? isError[id] ? defaultImg :  item?.logo : item.awardIconURL} alt="" className={!isLoading ? 'showing-img-loader' : "hiding-img-loader"} />
            </div>
          ))}

          <div className={isLoading ? "badge" : "badge batchedBg badge-border-white"} onClick={() => redirectToAwards(isMiniCardThumbnail, isNetwork, userCode, navigate)}>
            <Skeleton circle height={31} width={31} baseColor={baseColor} highlightColor={highlightColor} className={isLoading ? 'showing-img-loader bastch-Shimmer' : "hiding-img-loader"} />
            <span className={!isLoading ? 'showing-img-loader total-badge' : "hiding-img-loader"}  >  +{(count - data?.length) < 100 ? count - data?.length : "99"}</span>

          </div>
        </>
      )}
    </div>
  );
};

export default Badges;
