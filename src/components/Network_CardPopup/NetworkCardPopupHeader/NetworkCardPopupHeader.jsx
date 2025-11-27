import { Spinner, closeImg, useState, Feedback, UserFeedbackPopup, Constants } from "./ImportsNetworkCardPopupHeader";

const NetworkCardPopupHeader = ({ data, handleClose, isNetworkShareCard, isLive, productionUrl, screen }) => {
  const [closeLoader, setCloseLoader] = useState(true);
  const [showUserFeedbackPopup, setShowUserFeedbackPopup] = useState(false);

  return (
    <>
      <div className="network-header_division">
        <div className="network-check">
          <div className="network-card-title">
            <span className="network-card-title-text network-card-network-name">{data?.name}</span>
            <span className="network-card-title-text">'s {Constants.NETWORK_NAME_SINGULAR} Card</span>
          </div>
          {isNetworkShareCard ? 
          //  <Feedback setOpen={setShowUserFeedbackPopup} />
          <></>
            : (
              <div >
                <div className="d-flex" style={{ gap: 14 }}>
                  {/* Removed Feedback Icon for V10 */}
                  {/* <div className="d-flex"><Feedback setOpen={setShowUserFeedbackPopup} /></div> */}
                  <img
                    src={closeImg}
                    alt=""
                    className={!closeLoader ? "d-block network-close-button-div" : "d-none"}
                    onLoad={() => setCloseLoader(false)}
                    onClick={handleClose}
                    style={{ borderRadius: "50%" }}
                  />
                  <Spinner
                    animation="border"
                    variant="danger"
                    size="sm"
                    className={
                      closeLoader ? "d-block network-close-button-loader" : "d-none"
                    }
                  />
                </div>
              </div>
            )
          }
        </div>
      </div>
      <UserFeedbackPopup 
      showUserFeedbackPopup={showUserFeedbackPopup} 
      setShowUserFeedbackPopup={setShowUserFeedbackPopup}
        isLive={isLive} productionUrl={productionUrl} screen={isNetworkShareCard? "Network Share Card - Webview" : screen}
        headerText={`${Constants?.NETWORK_NAME_SINGULAR} Card`}
      />
    </>
  );
};

export default NetworkCardPopupHeader;
