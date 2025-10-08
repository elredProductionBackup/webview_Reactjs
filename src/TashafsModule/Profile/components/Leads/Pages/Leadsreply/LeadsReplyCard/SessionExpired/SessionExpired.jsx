import React from "react";
import icon from "../../../../../../../../assets/images/noleads.png";
import "./sessionexpired.scss";
import { useNavigate } from "react-router-dom";
import { goHome, reload, goToLeadsList } from '../../../../../../../../globalFunctions'
import { resetSessionHandler } from '../../../../LeadsGlobalFunctions';
const SessionExpired = ({ setResetSession, resetSession, userCode, errorMsg, home, reset, showButton }) => {
  const navigate = useNavigate()

  return (
    <div className="session_expired">
      <div className="center_box">
        <img src={icon} alt="" />
        <div className="title">Something’s went wrong...</div>
        <div className="desc">
          {errorMsg ? errorMsg : 'Its not you, its us. Please retry to continue'}
        </div>
        {showButton && <div className="retry" onClick={home ? () => goHome(navigate, userCode) : reset ? () => reload() : () => resetSessionHandler(setResetSession, resetSession)}>Retry</div>
        }      </div>
    </div>
  );
};

export default SessionExpired;



