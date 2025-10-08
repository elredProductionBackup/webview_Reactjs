import React, { useState } from "react";
import close from "../../../assets/images/cross_white.svg";
import LogoTitle from "../LogoTitle/LogoTitle";
import web from "../../../assets/images/websiteBg.svg";
import { Spinner } from "react-bootstrap";
import { handleUrlClick } from "../../../globalFunctions";

const WebsitePopup = ({ data, setWebEnable, webStatus, socialStatus, website }) => {
  const [backLoader, setbackLoader] = useState(true)

  return (
    <div className="outer-div" onClick={(e) => e.stopPropagation()}>
      <div className="skill-title">
        <div className="title">Web Links</div>
        <Spinner animation="border" variant="danger" size="sm" className={backLoader ? 'show-img-loader loader-close' : 'hide-img-loader'} />
        <div className="close-btn">
          <img src={close} alt="" onClick={() => setWebEnable(false)} className={!backLoader ? 'show-image-after-loader' : 'hide-img-loader'} onLoad={() => setbackLoader(false)} />
        </div>
      </div>
      <div className="social_wrapper" style={{ marginBottom: "36px" }}>
        <LogoTitle
          logo={web}
          title={
            !socialStatus || data?.socialMediaLink == "" || !data?.socialMediaLink
              ? "User has kept social media link private"
              : data?.socialMediaLink
          }
          action={handleUrlClick}
          status={socialStatus}
          blankAddress="User has kept social media link private"
          favicon={data?.socialMediaLink === "" || !data?.socialMediaLink ? false : true}
        />
      </div>
      <div className="email-address-wrapper">
        <LogoTitle
          logo={web}
          title={
            !webStatus || website === "" || !website
              ? "User has kept website link private"
              : website
          }
          action={handleUrlClick}
          status={webStatus}
          blankAddress="User has kept website link private"
          favicon={website === "" ? false : true}
        />
      </div>


    </div>
  );
};

export default WebsitePopup;
