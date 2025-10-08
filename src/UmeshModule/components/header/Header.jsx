import React, { useState } from "react";
import "./header.scss";
import back from "../../../assets/images/ic_back_4x.png";
import search from '../../../assets/images/search-light.png';
import { useLocation, useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import classNames from "classnames";
import { capitalizeNameString } from "../../../globalFunctions";
import Feedback from "../../../components/Feedback/Feedback";
import UserFeedbackPopup from "../../../TashafsModule/components/UserFeedbackPopup/UserFeedbackPopup";
import Constants from "../../../utils/Contants";

function Header({ title, userCode, disabled = false, children, onClick, showSearch, isNetwork, isLive, productionUrl, screen }) {
  const navigate = useNavigate();
  const location = useLocation()
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [isSearchImageLoading, setIsSearchImageLoading] = useState(true);
  const [showUserFeedbackPopup, setShowUserFeedbackPopup] = useState(false);
  const borderBottom = location?.pathname?.includes('search')

  return (
    <>
      <div
        className={classNames(`d-flex justify-content-between align-items-center ${borderBottom ? "header-container search" : "header-container"}`, { "pt-3": children })}>
        <div className=" d-flex align-items-center header-bar justify-content-between">
          <div className="d-flex align-items-center overflow-hidden">
            <span className={isImageLoading ? "showing-img-loader image-loader designation-loader" : "hiding-img-loader"} style={{marginRight:"15px",marginLeft:"26px"}}>
            <Spinner animation="border" variant="light" size="sm"
               />
               </span>
            <img
              className={classNames("back-img-testimonial", { "show-back-image": isImageLoading })} src={back}
              onLoad={() => {
                setIsImageLoading(false);
              }} alt=""
              onClick={() => {
                if (onClick) {
                  onClick();
                } else {
                  navigate(-1);
                }
              }} />
            <span className="header-title">{capitalizeNameString(title)}</span>
          </div>
          {isNetwork && <div><Feedback setOpen={setShowUserFeedbackPopup} /></div>}
          {children}
        </div>
        {showSearch ? (
          <div className="search-testimonial" onClick={() => { return isSearchImageLoading ? false : navigate(`/testimonials/search?userCode=${userCode}`) }}>
            <Spinner animation="border" variant="light" size="sm"
              className={isSearchImageLoading ? "showing-img-loader  designation-loader" : "hiding-img-loader"}
            />
            <div className={classNames({ "disabled_button": disabled })} disabled={true} ><img onLoad={() => { setIsSearchImageLoading(false); }}
              className={classNames("search-icon", { "show-back-image": isSearchImageLoading })} src={search} alt="" /></div>
          </div>
        ) : null}
      </div>
      {isNetwork && <UserFeedbackPopup
        showUserFeedbackPopup={showUserFeedbackPopup}
        setShowUserFeedbackPopup={setShowUserFeedbackPopup}
        isLive={isLive} productionUrl={productionUrl} screen={screen} 
        headerText={`${Constants?.NETWORK_NAME_SINGULAR} Comments`} />}
    </>
  );
}

export default Header;
