import React, { useState } from "react";
import close from "../../../assets/images/cross_white.svg";
import LogoTitle from "../LogoTitle/LogoTitle";
import emailLogo from "../../../assets/images/mailBg.svg";
import { Spinner } from "react-bootstrap";
import { isFirefox , isWindows } from 'react-device-detect';

const EmailPopup = ({ email, setOpenMail, status }) => {
  const [backLoader, setbackLoader] = useState(true)
  const gotoMail = (val) => {
    const mailtoLink = `mailto:${val}`;
    if (navigator.userAgent.includes('Mozilla') && navigator.userAgent.includes('FxiOS')) {
      window.location.href = mailtoLink;
    } else if (isFirefox && isWindows) {
      window.open(mailtoLink, "_top");
    } else {
      window.open(mailtoLink, "_blank");
    }
  };

  return (
    <div className="outer-div" onClick={(e) => e.stopPropagation()}>
      <div className="skill-title">
        <div className="title">Email ID</div>
        <Spinner animation="border" variant="danger" size="sm" className={backLoader ? 'show-img-loader loader-close' : 'hide-img-loader'} />

        <div className="close-btn">
          <img src={close} alt="" onClick={() => setOpenMail(false)} className={!backLoader ? 'show-image-after-loader' : 'hide-img-loader'} onLoad={() => setbackLoader(false)} />
        </div>
      </div>
      <LogoTitle
        logo={emailLogo}
        title={!status ? "User has kept email private" : email}
        action={gotoMail}
        status={status}
        blankAddress="User has kept email private"
      />
    </div>
  );
};

export default EmailPopup;
