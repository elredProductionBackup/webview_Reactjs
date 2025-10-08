import React from 'react'
import { handleOptionChange } from '../../../../Profile/components/Needs/needsGlobalFunctions'
import { caps, contactType } from '../../../../../globalFunctions'

const SignupRadioOptions = ({ contactMethod, whatsapp, msg, setContactMethod, OwnerName, formData, setFormData }) => {

    return (
        <div className='signup_radio'>
            <div className="question_txt">
                How would you like to let {OwnerName?.length <= 12 ? OwnerName : OwnerName?.slice(0, 12) + "..."} contact you?
            </div>
            <div className='answer_txt'>
                <label className='custom-radio'>
                    <input type="radio" name="contact_method" value='whatsapp' onChange={e => handleOptionChange(e, setFormData, formData)} checked={formData?.contact_type === 'whatsapp'} />
                    <span className='radio-indicator'></span>
                    <img src={whatsapp} alt="" className='radio_img' />
                    <span className='title_radio'>Contact via WhatsApp</span>
                </label>
            </div>
            <div className='answer_txt'>
                <label className='custom-radio'>
                    <input type="radio" name="contact_method" value='text' onChange={e => handleOptionChange(e, setFormData, formData)} checked={formData?.contact_type === 'text'} />
                    <span className='radio-indicator'></span>
                    <img src={msg} alt="" className='radio_img' />
                    <span className='title_radio'>Contact via Text</span>
                </label>
            </div>
        </div>
    )
}

export default SignupRadioOptions
