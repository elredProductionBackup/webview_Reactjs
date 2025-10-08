import React, { useState } from "react";
import close from "../../../assets/images/cross_white.svg";
import LogoTitle from "../LogoTitle/LogoTitle";
import location from "../../../assets/images/locateBg.svg";
import { Spinner } from "react-bootstrap";
import { handleMapClick } from "../../../globalFunctions";

const AddressPopup = ({ address, setLocationEnable, status,data }) => {
  const [backLoader, setbackLoader] = useState(true)
  const {latitude, longitude, fullAddress} = data?.address

  return (
    
    <div className="outer-div" onClick={(e)=>e.stopPropagation()}>
      <div className="skill-title">
        <div className="title">Address</div>
        <Spinner animation="border" variant="danger" size="sm" className={backLoader ? 'show-img-loader loader-close' : 'hide-img-loader'} />

        <div className="close-btn">
          <img src={close} alt="" onClick={() => setLocationEnable(false)}className={!backLoader ? 'show-image-after-loader' : 'hide-img-loader'} onLoad={() => setbackLoader(false)} />
        </div>
      </div>
    
      <LogoTitle
        logo={location}
        title={
          !status || fullAddress === ""||!fullAddress
            ? "User has kept address private"
            : fullAddress
        }
        status={status}
        action={handleMapClick}
        address={true}
        lat={latitude}
        lon={longitude}
        favicon={false}
        blankAddress = "User has kept address private"
      />
     
     
    </div>
  );
};

export default AddressPopup;
