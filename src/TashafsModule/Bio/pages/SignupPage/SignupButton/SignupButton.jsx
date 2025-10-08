import React, { useState } from 'react'
import { Spinner } from 'react-bootstrap'

const SignupButton = ({ sending, getOtp, getOtpProps, signupInputsProps }) => {

    const { formData } = getOtpProps;
    const isInstaValid = !formData?.website1 || formData?.website1 && /^(https?:\/\/)?([\w-]+(\.[\w-]+){1,}\w{1,}(:\d+)?(\/\S*)?)$/.test(formData.website1);
    const isLinkedinValid = !formData?.website2 || formData?.website2 && /^(https?:\/\/)?([\w-]+(\.[\w-]+){1,}\w{1,}(:\d+)?(\/\S*)?)$/.test(formData.website2);
    const isButtonDisabled =
        (formData?.f_name?.trim().length < 3 ||  formData?.phone_number === '' ) ||
        formData?.f_name?.charAt(0) === ' ' ||
        signupInputsProps?.phoneError ||
        !isInstaValid || formData?.phone_number?.length < formData.maxDigits ||
        !isLinkedinValid ;

    return (
        <div className="customSubmitSignupForm">
            <div className={isButtonDisabled || sending ? 'disabled' : 'buttonText'} onClick={isButtonDisabled || sending ? null : () => getOtp(getOtpProps)}>
                {sending ? <Spinner animation="border" variant="light" className="signup-submit-btn-spinner" /> : "Get OTP"}
            </div>
        </div>
    )
}

export default SignupButton
