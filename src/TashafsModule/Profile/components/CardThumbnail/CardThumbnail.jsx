import React, { useEffect, useState, lazy } from "react";
import "./cardthumbnail.scss";
import Cards from "../../../Cards/Cards";
import CardSkeleton from "./CardSkeleton/CardSkeleton";
import CardThumbnailData from "./CardThumbnailData/CardThumbnailData";

const CardThumbnail = ({
  data,
  baseColor,
  secondaryColor,
  tint,
  wholeData,
  profileData,
  show, 
  setShow,
  productionUrl,isLive,
  setShowUserFeedbackPopup,
  openNetworkList,
  setOpenNetworkList
}) => {
  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
  };

  const { cardInfo, dpURL, firstname, lastname, title, location, userCode } = data;
  const newAddress = `${location?.city?.length > 0 ? location?.city + "," : ""} ${location?.country}`
  return (
    <div className="card-thumbnail">
      {!data.firstname ? 
        <CardSkeleton secondaryColor={secondaryColor} baseColor={baseColor}/>
         : 
        <CardThumbnailData cardInfo={cardInfo} tint={tint} handleShow={handleShow} dpURL={dpURL} firstname={firstname} 
        lastname={lastname} title={title} newAddress={newAddress} data={data} wholeData={wholeData} profileData={profileData}
        designType={profileData.result[0].profileDesignInfo.designType} baseColor={`${baseColor}`}
        /> 
      }
      <Cards
        show={show}
        handleClose={handleClose}
        data={data}
        tint={tint}
        wholeData={wholeData}
        userCode={userCode}
        isLive={isLive}
        productionUrl={productionUrl}
        setShowUserFeedbackPopup={setShowUserFeedbackPopup}
        openNetworkList={openNetworkList}
        setOpenNetworkList={setOpenNetworkList}
      />
    </div>
  );
};

export default CardThumbnail;
