import { clearToasts } from 'react-simple-toasts'
import {useEffect, useState, useNavigate, useLocation, useCountdownTimer, toast, toastConfig, handleResetOtp, verifyOtp, 
        verifyOtpLead, EnterOTPData} from './ImportsEnterOtp'

const EnterOTP = ({ productionUrl, isLive, userCode }) => {
    const location = useLocation()
    const [needId, setNeedId] = useState('')
    const [trn, setTrn] = useState('')
    const [leadId, setLeadId] = useState('')
    toastConfig({ theme: "dark" });
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        setTrn(location?.state?.trnId?.transactionId)
        setNeedId(queryParams.get("needId") ?? "");
        setLeadId(queryParams.get("leadId") ?? "")
        clearToasts();
    }, [])

    const [startTimer, setStartTimer] = useState(false);
    const [reqOtp, setReqOtp] = useState(false)
    const [incorrectOtp, setIncorrectOtp] = useState(false)
    const [otpError, setOtpError] = useState('')
    const [sending, setSending] = useState(false)
    const [otp, setOtp] = useState('');
    const navigate = useNavigate()
    const { data } = location?.state

    useEffect(() => {
      if(otp !== '') setIncorrectOtp(false)
    }, [otp])

    const { timer, formatTime, resetTimer } = useCountdownTimer(60, startTimer);

    const verifyOtpProps = {
        otp, data, setSending, isLive, productionUrl, needId, navigate, setIncorrectOtp, toast, trn, leadId,userCode, setOtp, setOtpError
    }
    const handleOtpProps = {
        setStartTimer, resetTimer, setReqOtp, setIncorrectOtp, setOtp, isLive, productionUrl, data, toast, setTrn,userCode
    }
    const enterOtpDataProps = {
        navigate, otp, setOtp, incorrectOtp, timer, reqOtp, formatTime, userCode,setStartTimer,setReqOtp,
        handleResetOtp, handleOtpProps, verifyOtp: needId !== "" ? verifyOtp : verifyOtpLead, verifyOtpProps, sending, otpError, setOtpError
    }

    return (
        <div className='enter_otp'>
            <EnterOTPData {...enterOtpDataProps} />
        </div>
    )
}

export default EnterOTP
