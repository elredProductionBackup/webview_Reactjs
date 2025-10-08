import React from "react";
import "./index.scss";
import back from "../../../../assets/images/events/ic_back.png";
import { useLocation, useNavigate } from "react-router-dom";
import info from "../../../../assets/images/events/info.png";
import group from "../../../../assets/images/events/group.png";

function ChatHeader({ title, userCode, children }) {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="d-flex justify-content-between align-items-centre header_main_cont ">
      <div className=" d-flex justify-content-centre align-items-center w-100">
        <div className="d-flex align-items-center">
          <img
            className="back-img"
            src={back}
            alt=""
            onClick={() => {
              navigate(-1);
            }}
          />
          <span className="header-title">{title}</span>
        </div>
        {children}
      </div>
      <div className="d-flex">
        <img
          onClick={() => {
            navigate("/testEvent/members");
          }}
          style={{ marginRight: "10px" }}
          className="search-icon"
          src={group}
          alt=""
        />
        <img
          className="search-icon"
          onClick={() => {
            navigate("/testEvent/info");
          }}
          src={info}
          alt=""
        />
      </div>
    </div>
  );
}

export default ChatHeader;
