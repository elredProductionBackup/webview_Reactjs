import React, { useEffect, useState } from "react";
import icon from "../../../../../../assets/images/noleads.png";
import "../SessionExpired/sessionexpired.scss";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { goHome, reload } from "../../../../../../globalFunctions";

const OwnNeedError = () => {
    const navigate = useNavigate()
    
    let [searchParams] = useSearchParams();
    const userCode = searchParams.get("userCode");
    const leadId=searchParams.get("leadId") ?? ""
    const needId=searchParams.get("needId") ?? ""
   
    return (
        <div className="session_expired">
            <div className="center_box">
                <img src={icon} alt="" />
                <div className="title">Something’s went wrong...</div>
                <div className="desc">
                 {  ` Trying to Respond to Own ${leadId!==""?"lead":"Need"}`}
                </div>
                <div className="retry" onClick={() => goHome(navigate, userCode)}>Retry</div>
            </div>
        </div>
    );
};

export default OwnNeedError;
