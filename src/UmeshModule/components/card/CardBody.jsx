import classNames from "classnames";
import React, { useContext, useState } from "react";
import {
  getCurrentTime,
  shareURL,
  capitalizeNameString,
} from "../../../globalFunctions";
import bluetick from "../../../assets/images/blue_tick.svg"
import { AadharPopupContext } from "../../../TashafsModule/Profile/components/AadhaarVerifiedPopup/AadharPopupContext"
import Skeleton from "react-loading-skeleton";
import DesignationListProfileForRatings from "../../../TashafsModule/Profile/components/Ratings/DesignationListProfile/DesignationListProfile";
import DesignationListProfile from "../../../TashafsModule/components/DesignationListProfile/DesignationListProfile";

function CardBody({ item, className, showDesign, isProfileCard, adhaar }) {
  const { setShowVerifiedPopup } = useContext(AadharPopupContext);
  const [isImageLoading, setIsImageLoading] = useState(true)




  return (
    <div className="testi_profile_cont">
      <div className="text_text_wrapper_center">
        <div
          className={classNames("testimonal_text_profile", {
            [className]: className,
          })}
        >
          {item?.testimonial}
        </div>
      </div>
      <div className="d-flex profile-wrapper flex-row align-items-center">
        <div className={isImageLoading ? "d-block test-shimmer-dp-margin" : "d-none"} ><Skeleton circle height={isProfileCard ? 25 : 30}
          width={isProfileCard ? 25 : 30} baseColor="#242939" highlightColor="#1e212b" /></div>
        <div
          onClick={(e) => {
            const url = `${shareURL}/?userCode=${item.givenBy_userCode
              }&t=${getCurrentTime()}`;
            window.open(url, "_blank");
            e.stopPropagation();
          }}
          className={isImageLoading ? "d-none" : "button"}
        >
          <img className={(classNames("user_profile border-testimonial", {
            "profile_image": isProfileCard
          }))} src={item?.dpURL} alt="user" onLoad={() => setIsImageLoading(false)} />
        </div>
        <div className="user-card">
          <div className="user_test btick_comments ">
            <span className="user-name-testomonial">

              {`${capitalizeNameString(item?.firstname) ?? ""
                } ${capitalizeNameString(item?.lastname) ?? ""}`}
            </span>


            {item?.aadhaarVerifiedStatus &&
              <span onClick={(e) => { e.stopPropagation(); setShowVerifiedPopup(true) }} >
                <img src={bluetick} alt="" onClick={(e) => { e.stopPropagation(); setShowVerifiedPopup(true) }} /></span>}
          </div>
          {showDesign ? (
            <span className="designation">
               <DesignationListProfile designation={item?.title} maxWidth={ window.innerWidth > 450 ? 150 : 160} />
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default CardBody;
