import { clearToasts } from "react-simple-toasts";
import { GlobalData } from "../../../../../../App";
import {useContext, useEffect, useState, Spinner, AlreadyAccountPopup, OwnNeedError, ResendOtpLabel} from './ImportsEnterOtpButton'

const EnterOtpButton = ({ timer, reqOtp, formatTime, handleOtpProps, handleResetOtp, verifyOtp, verifyOtpProps, sending,
  setStartTimer, setReqOtp, setValidationError, otp, incorrectOtp }) => {
    
  const { setFormData } = useContext(GlobalData);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [ownNeed, setOwnNeed] = useState(false);

  useEffect(() => {
    setStartTimer(true);
    setReqOtp(false);
    setValidationError(false);
  }, []);

  useEffect(() => {
    if (show) clearToasts();
  }, [show]);

  const resendProps = {timer, reqOtp, formatTime, sending, handleResetOtp, handleOtpProps}

  return (
    <>
      <ResendOtpLabel {...resendProps}/>
      <div className="customSubmit send-reply-btn">
        <div className={ otp?.length !== 6 || sending || incorrectOtp ? "disabled" : "buttonText" }
          onClick={ otp?.length !== 6 || sending || incorrectOtp ? null : () =>
                  verifyOtp( verifyOtpProps, setFormData, setShow, setOwnNeed, setValidationError )}
        >
          { sending ? <Spinner animation="border" variant="light" className="otp-submit-btn-spinner" /> : "Send Reply" }
        </div>
        <AlreadyAccountPopup show={show} handleClose={handleClose} />
        {ownNeed && <OwnNeedError />}
      </div>
    </>
  );
};

export default EnterOtpButton;
