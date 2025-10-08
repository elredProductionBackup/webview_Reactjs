import "./company-titles-popup.scss";
import { useEffect, useRef, useState } from "react";
import crossImg from "../../../../assets/images/cross_white.svg";
import briefcaseImg from "../../../../assets/images/briefcase.svg";
import { clearToasts } from "react-simple-toasts";
import CompanyTitleSingle from "./CompanyTitleSingle/CompanyTitleSingle";

const CompanyTitlesPopup = ({ showTitlePopup, setShowTitlesPopup, companyPopupHeader, titlesArray }) => {
    const titlesContainerRef = useRef(null);
    const [titlesContainerWidth, setTitlesContainerWidth] = useState(titlesContainerRef?.current?.offsetWidth + 1);

    useEffect(() => {
        setTitlesContainerWidth(titlesContainerRef?.current?.offsetWidth);
        if (showTitlePopup) clearToasts();
    }, [showTitlePopup]);

    return (
        <div className="container-company-titles-popup">
            <div className={showTitlePopup ? "profile-company-titles-container profile-company-titles-container-show"
                : "profile-company-titles-container profile-company-titles-container-hide"}>
                <div className="company-titles-popup-top-header">
                    <span className="company-titles-popup-top-text-left">{companyPopupHeader}</span>
                    <span className="company-titles-popup-top-close-img" onClick={() => setShowTitlesPopup(false)}><img src={crossImg} alt=""/></span>
                </div>
                <div className="company-titles-popup-content">
                    <div className="company-titles-popup-content-image"><img src={briefcaseImg} alt="" className="company-titles-popup-briefcase-img" /></div>
                    <div className="company-titles-popup-company-titles-text" ref={titlesContainerRef}>
                        {titlesArray?.map((title, index) => 
                            <CompanyTitleSingle key={index + Math.random()} title={title} index={index} titlesArray={titlesArray}
                                titlesContainerWidth={titlesContainerWidth} />
                        )}
                    </div>
                </div>
            </div>
        <div onClick={() => setShowTitlesPopup(false)} className={showTitlePopup ? "company-titles-popup-overlay" : "company-titles-popup-overlay-hidden"}></div>
    </div>
    )
}

export default CompanyTitlesPopup;