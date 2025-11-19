import React from "react";
import icon from "../../../../../../assets/images/noleads.png";
import "./sessionexpired.scss";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { goHome, reload } from "../../../../../../globalFunctions";

const SessionExpired = ({setResetSession, resetSession, home, errorMsg, invalidNeed}) => {
  const navigate = useNavigate()
  let [searchParams] = useSearchParams();
  const userCode = searchParams.get("userCode");

  const resetSessionHandler = () => {
    localStorage.setItem("loggedInUserCode", "");
    localStorage.setItem("accessToken", "");
    setResetSession(!resetSession)
    reload()
  };
  return (
    <div className="session_expired">
      <div className="center_box">
        <img src={icon} alt="" />
        <div className="title">Something went wrong</div>
        <div className="desc">
          {errorMsg ? errorMsg : 'Its not you, its us. Please retry to continue'}
        </div>
        {invalidNeed ? "" : <div className="retry" onClick={home? reload: resetSessionHandler}>Retry</div>}
      </div>
    </div>
  );
};

export default SessionExpired;
