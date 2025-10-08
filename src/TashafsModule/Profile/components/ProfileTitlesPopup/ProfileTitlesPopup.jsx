import { useLocation } from "react-router-dom";
import "./profile-titles-popup.scss";
import { useEffect, useRef } from "react";
import crossImg from "../../../../assets/images/close_dark.svg";
import briefcaseImg from "../../../../assets/images/briefcase.svg";
import { clearToasts } from "react-simple-toasts";
import SingleProfileTitle from "./SingleProfileTitle/SingleProfileTitle";

const ProfileTitlesPopup = ({ showTitlePopup, setShowTitlesPopup, titlesArray }) => {
    const location = useLocation()
    const titlesContainerRef = useRef(null);

    useEffect(() => {
        setShowTitlesPopup(false);
    }, [location]); // eslint-disable-line

    useEffect(() => {
        if (showTitlePopup) clearToasts();
    }, [showTitlePopup]);

    return (
        <div className="container-titles-popup">
            <div className={showTitlePopup ? "profile-titles-container titles-popup-container-show" : 
                "profile-titles-container titles-popup-container-hide"}>
                <div className="titles-popup-top-header">
                    <span className="titles-popup-top-text-left">Title</span>
                    <span className="titles-popup-top-close-img" onClick={() => setShowTitlesPopup(false)}><img src={crossImg} alt=""/></span>
                </div>
                <div className="titles-popup-content">
                    <div className="titles-popup-content-image"><img src={briefcaseImg} alt="" className="titles-popup-briefcase-img" /></div>
                    <div className="titles-popup-titles-text" ref={titlesContainerRef}>
                        {titlesArray?.map((title, index) => 
                            <SingleProfileTitle key={title._id} title={title} index={index} titlesArray={titlesArray} 
                                titlesContainerWidth={titlesContainerRef?.current?.offsetWidth} />
                        )}
                    </div>
                </div>
            </div>
        <div onClick={() => setShowTitlesPopup(false)} className={showTitlePopup ? "titles-popup-overlay" : "titles-popup-overlay-hidden"}></div>
    </div>
    )
}

export default ProfileTitlesPopup;