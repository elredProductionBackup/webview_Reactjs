import React, { useState } from "react";
import EnterOtpHeader from "./EnterOtpHeader/EnterOtpHeader";
import EnterOtpBody from "./EnterOtpBody/EnterOtpBody";
import EnterOtpButton from "./EnterOtpButton/EnterOtpButton";

const EnterOTPData = ({ navigate, otp, setOtp, incorrectOtp, timer, reqOtp, formatTime, userCode,
  handleResetOtp, handleOtpProps, verifyOtp, verifyOtpProps, sending, setStartTimer, setReqOtp, otpError, setOtpError }) => {
  const [validationError, setValidationError] = useState(false)
  const enterOtpButtonProps = {
    timer, reqOtp, formatTime, handleOtpProps, handleResetOtp,
    verifyOtp, verifyOtpProps, sending, userCode, setStartTimer, setReqOtp, validationError, setValidationError, otp, incorrectOtp, otpError,
    setOtpError
  }

  return (
    <>
      <EnterOtpHeader navigate={navigate} phoneNumber={verifyOtpProps?.data?.phoneNumber} />
      <EnterOtpBody otp={otp} setOtp={setOtp} incorrectOtp={incorrectOtp} sending={sending} otpError={otpError} />
      <EnterOtpButton {...enterOtpButtonProps} />
    </>
  );
};

export default EnterOTPData;
