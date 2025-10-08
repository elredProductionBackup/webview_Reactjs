import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import back from '../../../../../../assets/images/ic_back.svg'

const EnterOtpHeader = ({ navigate, phoneNumber }) => {
  
  const formattedPhoneNumber = `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3, 6)} ${phoneNumber.slice(6, 9)} ${phoneNumber.slice(9)}`;
  const [backLoader, setBackLoader] = useState(true)

  return (
    <>
      <div className="enter_otp_header">
      <Spinner animation="border" variant="light" size="sm" className={backLoader ? 'show-img-loader-signup' : 'hide-img-loader'}/>
        <img src={back} alt="" onClick={() => navigate(-1)} className={!backLoader? 'show-image-after-loader' : "hide-img-loader"} onLoad={() => setBackLoader(false)}/>
        <span className="title">Enter OTP</span>
      </div>
      <div className="otp_desc">
        We have sent OTP to your registered mobile number <span className="mobile">{formattedPhoneNumber}</span>
      </div>
    </>
  );
};

export default EnterOtpHeader;
