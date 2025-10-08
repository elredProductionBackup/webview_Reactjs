import React, { useContext, useState, lazy, useEffect } from "react";
import quote from "../../../assets/images/fa6-solid_quote-left_2x.png";
import Header from "../../components/header/Header";
import "./detail.scss";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import moment from "moment";
import { getRandomColor, gradientSolidColors, capitalizeNameString, onProfileClick, shareURL } from "../../../globalFunctions";
import bluetick from "../../../assets/images/blue_tick.svg"
import { AadharPopupContext } from "../../../TashafsModule/Profile/components/AadhaarVerifiedPopup/AadharPopupContext";
import Skeleton from "react-loading-skeleton";
import { clearToasts } from "react-simple-toasts";
import DesignationListProfile from "../../../TashafsModule/components/DesignationListProfile/DesignationListProfile";

const AadhaarVerifiedPopup = lazy(() => import("../../../TashafsModule/Profile/components/AadhaarVerifiedPopup/AadhaarVerifiedPopup"));

function TestimonaDetails() {
  const location = useLocation();
  const item = location.state;
  let [searchParams] = useSearchParams();
  const userCode = searchParams.get("userCode");
  const [profilePicLoading, setIsProfilePicLoading] = useState(true);

  const navigate = useNavigate()
  const date = new Date(location.state?.createdTime);
  const [overlayColor, setOverLayColor] = useState("");
  const { showVerifiedPopup, setShowVerifiedPopup } = useContext(AadharPopupContext);


  useEffect(() => {
    setOverLayColor(getRandomColor(gradientSolidColors));
    clearToasts();
  }, [])

  return (
    <>
      <div className="details-wrapper" style={{ position: "relative" }}>
        <Header onClick={() => navigate(`/testimonials?userCode=${userCode}`, { replace: true })} title={`${item?.firstname ?? ""} ${item?.lastname}`} />
        <div
          className="detail_overlay "
          style={{ backgroundImage: `linear-gradient( rgba(0,0,0,0.5), ${overlayColor[1]}),url(${item?.dpURL}` }}>
          <div className="body_wrapper_test d-flex flex-column justify-content-between">
            <div className="quote-container-testimonial d-flex justify-content-between">
              <img src={quote} alt="quote" />
              <div className="date-container d-flex">
                <div className="date-testimonial"> {moment(date).format("ddd, DD MMM YYYY")} </div>
              </div>
            </div>
            <div className="testimonal-detail-text detail_text ">{item.testimonial}</div>
            <div
              onClick={(e) => onProfileClick(e, shareURL, item.givenBy_userCode)}
              className="d-flex profile-wrapper flex-row align-items-center dp_position">
              <div className={profilePicLoading ? "d-block test-shimmer-dp-margin" : "d-none"}><Skeleton circle height={40} width={40} baseColor="#d6dae5" /></div>
              <div className={profilePicLoading ? "d-none" : "button"}>
                <img className="user-profile border-testimonial" src={item?.dpURL} alt="user" onLoad={() => setIsProfilePicLoading(false)} />
              </div>
              <div className="user-card">
                <div className="Testimonial-wrapper-bluetick">
                <div className="user-name-testomonial">{`${capitalizeNameString(item?.firstname) ?? ""} ${capitalizeNameString(item?.lastname) ?? ""}`}</div>
                  {item.aadhaarVerifiedStatus &&
                    <img src={bluetick} alt="" onClick={(e) => { e.stopPropagation(); setShowVerifiedPopup(true) }} className="btick b-ticks-testimonials" />}

                </div>
                <span className="designation">
                  
                <DesignationListProfile designation={item?.title} maxWidth={ window.innerWidth > 450 ? 150 : 160} />

                  </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AadhaarVerifiedPopup showVerifiedPopup={showVerifiedPopup} setShowVerifiedPopup={setShowVerifiedPopup} />
    </>
  );
}
export default TestimonaDetails;
