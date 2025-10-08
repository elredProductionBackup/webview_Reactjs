import React, { useState } from 'react'
import './Feedback.scss'
import icon from '../../assets/images/feedback.png'
import { Spinner } from 'react-bootstrap';

const Feedback = ({ setOpen, headerPadding, isSignup }) => {
    const handleShow = () => {
        return iconloader ? false : setOpen(true);
    };
    const [iconloader, setIconLoader] = useState(true);

    return (
        <>
            <Spinner variant="danger" className={iconloader ? `d-block feedback_btn_spinner ${headerPadding ? "feedback_spinner_padding" : ""}` : "d-none"} />
            {isSignup ? 
                <img src={icon} alt="" className={iconloader ? "d-none" : "feedback_btn_signup"} onClick={handleShow}
                    onLoad={() => setIconLoader(false)} />
                :
                <span className={iconloader ? "d-none" : "feedback_btn_container_span"} onClick={handleShow}>
                    <img src={icon} alt="" className="feedback_btn" onLoad={() => setIconLoader(false)} />
                </span>
            }
        </>
    )
}

export default Feedback
