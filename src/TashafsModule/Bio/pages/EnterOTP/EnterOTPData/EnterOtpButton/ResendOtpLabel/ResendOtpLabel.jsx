import React from 'react'

const ResendOtpLabel = ({timer, reqOtp, formatTime, sending, handleResetOtp, handleOtpProps}) => {
  return (
    <div className="resend_otp_label">
        {timer > 0 && !reqOtp ? (
          <div>
            {" "}
            Time Remaining: {timer > 0 && formatTime(timer)}
          </div>
        ) : (
          <div className="resend_otp">
            <span
              onClick={() => (sending ? null : handleResetOtp(handleOtpProps))}
            >
              {timer > 0 ? formatTime(timer) : <span><u style={{color:"#E72D38"}}>Resend OTP</u></span>}
            </span>
          </div>
        )}
      </div>
  )
}

export default ResendOtpLabel
