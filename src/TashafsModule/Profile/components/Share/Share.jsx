import React, { useEffect, useState } from "react";
import "./share.scss";
import share from "../../../../assets/images/share.svg";
import Disclaimer from "../../../../assets/images/disclaimer.svg";
import { Spinner } from "react-bootstrap";
import toast, { clearToasts } from "react-simple-toasts";
import { isFirefox, isMacOs } from "react-device-detect";

const Share = ({
  rgba,
  url,
  show,
  isBackdrop,
  isNetwork,
  setOpenModal,
  disclaimerData,
}) => {
  const [logoLoader, setLogoLoader] = useState(true);
  const [disclaimerLoader, setDisclaimerLoader] = useState(true);


  const handleShare = () => {
    const time = new Date().getTime().toString().slice(-6);

    (async () => {
      if (navigator.share) {
        try {
          await navigator.share({
            url: url + `&t=${time}`,
          });
        } catch (error) {
          // console.error("Error Sharing:", error);
        }
      } else {
        if (
          navigator.userAgent.includes("Firefox") &&
          navigator.userAgent.includes("Windows")
        ) {
          return toast("Web share not supported by Windows Firefox");
        }
        if (isFirefox && isMacOs) {
          return toast("Web share not supported by MacOS Firefox");
        }
        toast("Web share not supported by MacOS Chrome");
      }
    })(); // Add parentheses here to call the function immediately
  };

  useEffect(() => {
    if (show) clearToasts();
  }, [show]);

  return (
    <>
      <div className="share-div" style={{ background: `${rgba}` }}>
        <div>
          <div className="share-icon-div" onClick={handleShare}>
            <Spinner
              animation="border"
              variant="light"
              size="sm"
              className={logoLoader ? "show-img-loader" : "hide-img-loader"}
            />
            <img
              src={share}
              alt=""
              className={
                logoLoader ? "hide-img-loader" : "show-image-after-loader"
              }
              onLoad={() => setLogoLoader(false)}
            />
          </div>
          <div className="share-text">Share</div>
        </div>

         
         {isNetwork && (
<div className="disclaimer-container">
            <div className="share-icon-div" onClick={() => setOpenModal(true)}>
              <Spinner
                animation="border"
                variant="light"
                size="sm"
                className={disclaimerLoader ? "show-img-loader" : "hide-img-loader"}
              />
              <img
                src={Disclaimer}
                alt=""
                className={
                  disclaimerLoader ? "hide-img-loader" : "show-image-after-loader"
                }
                onLoad={() => setDisclaimerLoader(false)}
              />
            </div>
            <div className="share-text">Disclaimer</div>
          </div>
         )} 
      </div>
    </>
  );
};

export default Share;
