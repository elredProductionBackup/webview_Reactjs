import React, { useState } from "react";
import close from "../../../assets/images/cross_white.svg";
import LogoTitle from "../LogoTitle/LogoTitle";
import phone from "../../../assets/images/phonebg.svg";
import { Spinner } from "react-bootstrap";
import { getBrowserType } from "../../../globalFunctions";

const PhoneNumberPopup = ({ number, setEnable, status }) => {
  const [backLoader, setbackLoader] = useState(true)
  const handlePhoneNumberClick = (phoneNumber) => {
    if (getBrowserType() === "ios") { window.parent.postMessage({ message: 'openDialPad', phoneNumber }, process.env.REACT_APP_URL); return false };
    window.open(`tel:${phoneNumber}`, "_self");
  };
  return (
    <div
      className="outer-div" onClick={(e) => e.stopPropagation()}
    >
      <div className="skill-title">
        <div className="title">Phone Number</div>
        <Spinner animation="border" variant="danger" size="sm" className={backLoader ? 'show-img-loader loader-close' : 'hide-img-loader'} />

        <div className="close-btn">
          <img src={close} alt="" onClick={() => setEnable(false)} className={!backLoader ? 'show-image-after-loader' : 'hide-img-loader'} onLoad={() => setbackLoader(false)} />
        </div>
      </div>
      <LogoTitle
        logo={phone}
        title={!status ? "User has kept phone number private" : number}
        action={handlePhoneNumberClick}
        status={status}
        const blankAddress="User has kept phone number private"
      />
    </div>
  );
};

export default PhoneNumberPopup;