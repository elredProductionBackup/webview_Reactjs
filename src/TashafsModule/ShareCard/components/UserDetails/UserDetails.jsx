import React, { useState } from "react";
import share from '../../../../assets/images/share-arrow.svg'
import avatar from '../../../../assets/images/avatar.png'
import { handleShareCard } from "../../shareCardFunctions";
import DesignationListProfile from "../../../components/DesignationListProfile/DesignationListProfile";
import { calcTextLength } from "../../../../globalFunctions";
import blueTick from "../../../../assets/images/blue_tick.svg";
import Skeleton from 'react-loading-skeleton'
import { Spinner } from 'react-bootstrap'

const UserDetails = ({ userDetail, firstname, lastname, setShowVerifiedPopup }) => {
  const baseColor = '#242939';
  const highlightColor ="#1e212b";
  let city = userDetail?.location?.city?.length > 0 ? userDetail?.location?.city + ", " : "";
  const location = city + userDetail?.location?.country;
  const [profileImageLoader, setprofileImageLoader] = useState(true)
  const[shareLoader,setShareLoader]=useState(true)

  return (
    <>
      <div className="userdetails-sharing" >
        <div className="share-icon" onClick={() => handleShareCard(userDetail)}>
        <Spinner animation="border" variant="light" size="sm" className={shareLoader ? 'showing-img-loader' : 'hiding-img-loader'} />
          <img src={share} alt="" className={!shareLoader ? 'showing-img-loader' : "hiding-img-loader"}    onLoad={() => setShareLoader(false)} />
        </div>
        <span className="title" onClick={() => handleShareCard(userDetail)}>Share</span>
      </div>
      <div className={profileImageLoader ? "user-image" : "user-image dp-bg-white"}>
        <Skeleton circle height={127} width={127} baseColor={baseColor} highlightColor={highlightColor} className={profileImageLoader ? 'showing-img-loader' : 'hiding-img-loader'} />
        <img src={userDetail?.dpURL == "" ? avatar : userDetail?.dpURL} alt="" 
          className={profileImageLoader ? 'd-none' : 
          userDetail?.aadhaarVerifiedStatus ?  "user-image-border-blue" : "user-image-border-white"} onLoad={() => setprofileImageLoader(false)} />
      </div>
      {userDetail?.aadhaarVerifiedStatus && !profileImageLoader && <div onClick={() => setShowVerifiedPopup(true)} className="verified-user-share-card-icon-container">
        <img src={blueTick} alt="" className="verified-user-share-card-icon" />
      </div>}
      <div className="user-name-share-card">{calcTextLength(50, userDetail?.firstname, 'name')}</div>
      <div className="user-surname-share-card">{calcTextLength(50, userDetail?.lastname, 'name')}</div>
      <div className="professions">
        <DesignationListProfile designation={userDetail?.title} maxWidth={125} />
      </div>
      <div className="locations">
        {location?.length <= 27 ? location : location?.slice(0, 27) + '...'}
      </div>
    </>
  );
};

export default UserDetails;
