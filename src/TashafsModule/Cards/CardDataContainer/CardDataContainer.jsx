import React, { useContext, useState } from "react";
import Badges from "../Badges/Badges";
import BottomOptions from "../BottomOptions/BottomOptions";
import CardDataProfile from "./CardDataProfile/CardDataProfile";
import CardBottomBranding from "./CardBottomBranding/CardBottomBranding";
import { Spinner } from "react-bootstrap";
import { calcTextLength } from "../../../globalFunctions";
import BackgroundFilter from "../../Profile/components/BackgroundFilter/BackgroundFilter";
import SaveButton from "../../ShareCard/components/SaveButton/SaveButton";
import { AadharPopupContext } from "../../Profile/components/AadhaarVerifiedPopup/AadharPopupContext";
import NetworkIconBadges from "../NetworkBadges/NetworkIconBadges";
import NetworkListIndex from "../../../components/NetworkList/NetworkListIndex";
import PrivateContactToast from "../PrivateContactToast/PrivateContactToast";

const CardDataContainer = ({
  firstname,
  handleClose,
  close,
  tint,
  cardInfo,
  share,
  dpURL,
  lastname,
  title,
  newAddress,
  data,
  wholeData,
  setEnable,
  setLocationEnable,
  setOpen,
  setOpenMail,
  setPop,
  setWebEnable,
  logo,
  cardUser,
  userCode, isLive, productionUrl, 
  setShowUserFeedbackPopup,
  openNetworkList, 
  setOpenNetworkList
}) => {
  const [closeLoader, setcloseLoader] = useState(true);
  const [privateContactToast, setPrivateContactToast] = useState(false);
  const { showVerifiedPopup, setShowVerifiedPopup } = useContext(AadharPopupContext);
  return (
    <>
      {openNetworkList ? <NetworkListIndex userCode={userCode} isLive={isLive} productionUrl={productionUrl} setOpenNetworkList={setOpenNetworkList} 
        setShowUserFeedbackPopup={setShowUserFeedbackPopup} /> :
        <div className="card-parent-div">
          <div className="header_division">
            <div className="check">
              <div className="user-title">
                {calcTextLength(13, firstname, "name")}'s Personal Card
              </div>
              <div className="close-button-div" onClick={handleClose}>
                <Spinner
                  animation="border"
                  variant="danger"
                  size="sm"
                  className={
                    closeLoader
                      ? "showing-img-loader close-button-loader"
                      : "hiding-img-loader"
                  }
                />
                <img
                  src={close}
                  alt=""
                  className={
                    !closeLoader ? "showing-img-loader" : "hiding-img-loader"
                  }
                  onLoad={() => setcloseLoader(false)}
                />
              </div>
            </div>
            {
              !cardInfo?.[0]?.alternatePhoneDisplayStatus && cardInfo?.[0]?.alternateEmailDisplayStatus ?
                <div className="notify_label_div">The contact has chosen to keep their phone number private.
                  The VCard will contain only email. </div> : null
            }
          </div>

          <div className="card-div-wrapper" style={{ paddingTop: "10px" }}>
            <div className="card-wrapper">
              <div
                className="main-card"
                style={{
                  backgroundImage: tint
                    ? cardInfo?.[0]?.cardShortBgURL !== ""
                      ? `linear-gradient( rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${cardInfo?.[0]?.cardShortBgURL})`
                      : `linear-gradient( rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${cardInfo?.[0]?.customImageCardDesignInfo?.profileBannerImageURL})`
                    : `url(${cardInfo?.[0]?.cardShortBgURL})`,
                  backgroundPosition:
                    cardInfo?.[0].cardShortBgURL == "" ? "center" : null,
                  backgroundColor: "#000"
                }}
              >
                <div className="bg-filter-card-data-container"></div>
                <CardDataProfile
                  share={share}
                  dpURL={dpURL}
                  firstname={firstname}
                  lastname={lastname}
                  title={title}
                  newAddress={newAddress}
                  data={data}
                  setShowVerifiedPopup={setShowVerifiedPopup}
                />
                {data?.awards?.length > 0 || wholeData?.userSpecificAwardsCount > 0 ?
                  <Badges
                    data={data?.awards}
                    count={wholeData?.userSpecificAwardsCount}
                  /> : <div className="badges-height-space"></div>}
                {wholeData?.userSpecificNetworksCount > 0 ? <div className="network-badges-div-mini-card">
                  <NetworkIconBadges
                    setOpenNetworkList={setOpenNetworkList}
                    data={wholeData?.result?.[0]?.networks}
                    count={wholeData?.userSpecificNetworksCount}
                  />
                </div> : null}
                <BottomOptions
                  setOpen={setOpen}
                  setEnable={setEnable}
                  setOpenMail={setOpenMail}
                  setLocationEnable={setLocationEnable}
                  setWebEnable={setWebEnable}
                  setPop={setPop}
                />
                <CardBottomBranding
                  logo={logo}
                  cardUser={cardUser}
                  handleClose={handleClose}
                />

                {cardInfo?.[0]?.customImageCardDesignInfo?.colorFilter?.length !==
                  0 ? (
                  <BackgroundFilter
                    filterValues={cardInfo?.[0]?.customImageCardDesignInfo?.colorFilter?.toString()}
                  />
                ) : null}
              </div>
            </div>
            {
              // !cardInfo?.[0]?.alternatePhoneDisplayStatus && !cardInfo?.[0]?.alternateEmailDisplayStatus ?
              //   <div className="private_text">The contact has chosen to keep their phone number and email private. You can't save the contact.</div> : 
                <SaveButton userDetail={wholeData?.result?.[0]} cardButton="miniCard" secondButtonAction={handleClose} setPrivateContactToast={setPrivateContactToast} 
                  privateContact={!cardInfo?.[0]?.alternatePhoneDisplayStatus && !cardInfo?.[0]?.alternateEmailDisplayStatus ? true : false}
                />
            }
            {privateContactToast && <PrivateContactToast privateContactToast={privateContactToast} setPrivateContactToast={setPrivateContactToast} />}
          </div>
        </div>}
    </>
  );
};

export default CardDataContainer;
