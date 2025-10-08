import React, { useEffect, useRef } from "react";
import _ from "lodash";
import OTPInput from "react-otp-input";
import { handleChangeOTP } from "../../../../../../globalFunctions";

const EnterOtpBody = ({otp, setOtp, incorrectOtp, sending , otpError}) => {

  const handleInputChange = (value) => {
    handleChangeOTP(value, setOtp);
  };

 const focusOut = _.debounce(() => {
    document.activeElement.blur()
  }, 100)
  
  useEffect(()=>{
    if (otp?.toString()?.length === 6 && window?.screen?.width <= 420) 
    focusOut()
  },[otp])

  return (
    <>
      <div className="otp_txt_label">OTP</div>
      <div className="otp_div">
        <OTPInput
          value={otp}
          onChange={handleInputChange}
          isInputNum
          numInputs={6}
          pattern="[0-9]*"
          // renderSeparator={<span>-</span>}
          inputType="number"
          renderInput={(props) => (
            <input
              {...props}
              className={
                incorrectOtp
                  ? "custom_input_one border_error"
                  : "custom_input_one"
              }
              type="text"
              disabled={sending}
              inputMode="decimal"
            />
          )}
        />
        {incorrectOtp && (
          <div className="incorrect-otp">{otpError}</div>
        )}
      </div>
    </>
  );
};

export default EnterOtpBody;
