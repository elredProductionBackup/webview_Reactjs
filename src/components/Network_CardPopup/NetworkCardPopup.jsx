import { useEffect } from "react";
import { NetworkCardPopupHeader, NetworkCardDataProfile, CardBottomBranding, logo, cardUser, BottomOptions, 
  useState, CardBottomPopups, handleOpenNetworkUrl } from "./NetworkCardPopupImports";

const NetworkCardPopup = ({ data, setOpenCardPopup, isNetworkShareCard, isLive, productionUrl, shareCardData }) => {
  const [enable, setEnable] = useState(false);
  const [openMail, setOpenMail] = useState(false);
  const [locationEnable, setLocationEnable] = useState(false);
  const [webEnable, setWebEnable] = useState(false);

  const handleClose = () => setOpenCardPopup(false);
  const networkCardPopupStatus = true;
  const CardBottomPopupsProps = {
    data, enable, setEnable, openMail, setOpenMail, 
    locationEnable, setLocationEnable, webEnable, setWebEnable, networkCardPopupStatus
  }
  const newAddress = `${data?.location?.city && data?.location?.state && data?.location?.city === data?.location?.state ? "" : data?.location?.city ? data?.location?.city + "," : ""} ${data?.location?.state ? data?.location?.state + "," : ""} ${data?.location?.country}`;

  return (
    <>
      <div className="network-card-container">
        <NetworkCardPopupHeader data={data} handleClose={handleClose} isNetworkShareCard={isNetworkShareCard} isLive={isLive} 
          productionUrl={productionUrl} screen={"Network Card - Webview"} />
        <div className="network-card-body-container">
          <div className="network-card-wrapper">
            {/* <div
              className="network-main-card"
              style={{
                backgroundImage: `linear-gradient( rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url(${data?.cardInfo?.[0]?.cardShortBgURL})`,
                backgroundColor: "#000"
              }}
            > */}
            <div
                className="network-main-card"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${data?.cardInfo?.[0]?.customImageCardDesignInfo 
                    ? data?.cardInfo?.[0]?.customImageCardDesignInfo?.profileBannerImageURL 
                    : data?.cardInfo?.[0]?.cardShortBgURL})`,
                  backgroundColor: "#000"
                }}
              >
              <NetworkCardDataProfile
                dpURL={data?.logo}
                networkName={data?.name}
                newAddress={newAddress}
                data={data}
                isNetworkShareCard={isNetworkShareCard}
                shareCardData={shareCardData}
              />
              <BottomOptions
                isNetwork={true}
                setEnable={setEnable}
                setOpenMail={setOpenMail}
                setLocationEnable={setLocationEnable}
                setWebEnable={setWebEnable}
              />
              <CardBottomBranding
                logo={logo}
                cardUser={cardUser}
                handleClose={handleClose}
                isNetworkShareCard={isNetworkShareCard}
                networkShareUrl={data?.shareProfileURL}
                handleOpenNetworkUrl={handleOpenNetworkUrl}
              />
            </div>
          </div>
        </div>
      </div>
      <CardBottomPopups {...CardBottomPopupsProps} />
    </>
  );
};

export default NetworkCardPopup;
