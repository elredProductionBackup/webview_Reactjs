import React, { useContext, useState } from 'react'
import { Spinner } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import back from '../../../../../assets/images/ic_back.svg'
import { GlobalData } from '../../../../../App'
import { naviagteToLeadOrNeeds } from '../../../../../globalFunctions'
import Feedback from '../../../../../components/Feedback/Feedback';

const SignupTop = ({ navigate, userCode, setShowUserFeedbackPopup }) => {
    const { formData, setFormData } = useContext(GlobalData)
    let [searchParams, setSearchParams] = useSearchParams();
    const needId = searchParams.get("needId") ?? "";
    const leadId = searchParams.get("leadId") ?? "";
    const [backLoader, setBackLoader] = useState(true)

    return (
        <>
            <div className='signup_header d-flex align-items-center justify-content-between'>
                <div className='d-flex'>
                    <Spinner animation="border" variant="light" size="sm" className={backLoader ? 'show-img-loader-signup' : 'hide-img-loader'} />
                    <img src={back} alt="" onClick={() => naviagteToLeadOrNeeds(needId, setFormData, navigate, userCode, leadId)}
                        className={!backLoader ? 'show-image-after-loader' : "hide-img-loader"} onLoad={() => setBackLoader(false)} />
                    <span className='title'>Your Information</span>
                </div>
                <div><Feedback setOpen={setShowUserFeedbackPopup} headerPadding={true} isSignup={true} /></div>
            </div>
        </>
    )
}

export default SignupTop
