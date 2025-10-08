import React, { useContext, useEffect, useState } from "react";
import quote from "../../../assets/images/fa6-solid_quote-left_2x.png";
import Header from "../../components/header/Header";
import "../TestimonalDetails/detail.scss";
import moment from "moment";
import {
  getRandomColor,gradientSolidColors,capitalizeNameString,onProfileClick,shareURL,
} from "../../../globalFunctions";
import bluetick from "../../../assets/images/blue_tick.svg"
import { AadharPopupContext } from "../../../TashafsModule/Profile/components/AadhaarVerifiedPopup/AadharPopupContext";
import Skeleton from "react-loading-skeleton";
import DesignationListProfileForRatings from "../../../TashafsModule/Profile/components/Ratings/DesignationListProfile/DesignationListProfile";
import DesignationListProfile from "../../../TashafsModule/components/DesignationListProfile/DesignationListProfile";


function SearchDetail({ item, onClick }) {
  const [profilePicLoading, setIsProfilePicLoading] = useState(true);
  const date = new Date(item?.createdTime);
  const [overlayColor, setOverLayColor] = useState("");
  const { setShowVerifiedPopup } = useContext(AadharPopupContext);
 

  useEffect(() => {
    setOverLayColor(getRandomColor(gradientSolidColors));
  }, [])

  return (
    <div style={{ position: "absolute", zIndex: "100", top: 0, left: 0, right: 0 }}>
      <div className="details-wrapper" style={{ position: "relative" }}>
        <Header onClick={onClick} title={`${item?.firstname ?? ""} ${item?.lastname}`} />
        <div
          className="detail_overlay "
          style={{
            backgroundImage: `linear-gradient( rgba(0,0,0,0.5), ${overlayColor[1]}),url(${item?.dpURL}`,
          }}>
          <div className="body_wrapper_test d-flex flex-column justify-content-between">
            <div className="quote-container-testimonial d-flex justify-content-between">
              <img src={quote} alt="quote" />
              <div className="date-container d-flex">
                <div className="date-testimonial">  {moment(date).format("ddd, DD MMM YYYY")} </div>
              </div>
            </div>
            <div className="testimonal-detail-text detail_text "> {item?.testimonial}{" "}</div>
            <div
              onClick={(e) => onProfileClick(e,shareURL, item.givenBy_userCode)}
              className="d-flex profile-wrapper flex-row align-items-center dp_position">
              <div className={profilePicLoading ? "d-block test-shimmer-dp-margin" : "d-none"}><Skeleton circle height={40} width={40} baseColor="#242939" highlightColor="#1e212b"/></div>
              <div className={profilePicLoading ? "d-none" : "button"}> 
                <img className="user-profile border-testimonial" src={item?.dpURL} alt="user" onLoad={() => setIsProfilePicLoading(false)} /> 
              </div>
              <div className="user-card">
              <div className="user-name-testomonial">{`${capitalizeNameString(item?.firstname) ?? "" } ${capitalizeNameString(item?.lastname) ?? ""}`}
              {item.aadhaarVerifiedStatus && <img onClick={(e) => {e.stopPropagation(); setShowVerifiedPopup(true)}} 
                src={bluetick} alt="" className="btick b-ticks-testimonials"/>}
                </div><span className="designation">  
                    <DesignationListProfile designation={item?.title} maxWidth={ window.innerWidth > 450 ? 150 : 160} />
                  </span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SearchDetail;
