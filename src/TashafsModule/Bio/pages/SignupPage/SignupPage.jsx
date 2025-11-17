import {
  useContext, useEffect, useRef, useState, logoSocial, whatsapp, msg, useNavigate, useLocation, toast, AlreadyAccountPopup,
  SignupInputs, SignupRadioOptions, SignupButton, SignupTop, getOtp, getOtpLeads
} from './ImportsSignupPage'
import { GlobalData } from "../../../../App";
import { clearToasts } from 'react-simple-toasts';
import UserFeedbackPopup from '../../../components/UserFeedbackPopup/UserFeedbackPopup';
const SignupPage = ({ productionUrl, isLive, userCode }) => {
  const [needId, setNeedId] = useState('')
  const [leadId, setLeadId] = useState('')
  const { formData, setFormData } = useContext(GlobalData)
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    setNeedId(queryParams.get("needId") ?? "");
    setLeadId(queryParams.get("leadId") ?? "");
    clearToasts();
  }, [])
  const navigate = useNavigate()
  const location = useLocation()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [website1, setWebsite1] = useState('')
  const [website2, setWebsite2] = useState('')
  const [contactMethod, setContactMethod] = useState('whatsapp');
  const [phoneError, setPhoneError] = useState(false)
  const [firstNameError, setFirstNameError] = useState(false)
  const [website1error, setWebsite1error] = useState(false)
  const [website2error, setWebsite2error] = useState(false)
  const [sending, setSending] = useState(false)
  const { needOwnerName, leadsOwnerName } = location?.state
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const signUpPageRef = useRef(null)
  const [isFormField, setIsFormField] = useState(false);
  const [downloadURL, setDownloadURL] = useState([])
  const [showUserFeedbackPopup, setShowUserFeedbackPopup] = useState(false);

  const getOtpProps = {
    setSending, isLive, productionUrl, needId, navigate,
    toast, setShow, setFirstNameError, setPhoneError, formData, pageRef: signUpPageRef, leadId, userCode, setWebsite1error, setWebsite2error, downloadURL, setDownloadURL
  }
  const signupInputsProps = {
    firstName, setFirstName, firstNameError, lastName, setLastName, phone, phoneError, logoSocial, website1, setWebsite1, website2, setWebsite2, setPhone, formData, setFormData, setFirstNameError, setPhoneError, setWebsite1error, website1error, setWebsite2error, website2error,
  }
  const signupRadioOptionsProps = { contactMethod, whatsapp, msg, setContactMethod, setFormData, formData, OwnerName: needOwnerName ?? leadsOwnerName }

  useEffect(() => {
    if (show) clearToasts();
  }, [show]);


  return (
    <div className='main-signup'>
      <SignupTop navigate={navigate} userCode={userCode} setShowUserFeedbackPopup={setShowUserFeedbackPopup} />
      <div ref={signUpPageRef} className='signup_page'>
        <div className="desc">
          Please fill the following required fields to sign up and respond to a Need or Offering.
        </div>
        <SignupInputs {...signupInputsProps} isFormField={isFormField} setIsFormField={setIsFormField} />
        <SignupRadioOptions {...signupRadioOptionsProps} />
        <SignupButton sending={sending} getOtp={needId !== "" ? getOtp : getOtpLeads} getOtpProps={getOtpProps} signupInputsProps={signupInputsProps} />
        <AlreadyAccountPopup show={show} handleClose={handleClose} downloadURL={downloadURL} />
      </div>
      {/* <UserFeedbackPopup showUserFeedbackPopup={showUserFeedbackPopup} setShowUserFeedbackPopup={setShowUserFeedbackPopup}
        productionUrl={productionUrl} isLive={isLive} screen="Signup Form - Webview" headerText="Signup Form"
      /> */}
    </div>
  )
}

export default SignupPage
