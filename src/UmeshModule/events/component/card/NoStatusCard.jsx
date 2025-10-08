import React from "react";
import cross from "../../../../assets/images/events/cross.png";

function NoStatusCard({ onClick }) {
  return (
    <div className="d-flex no_members_status justify-content-between no_container">
      <div className="d-flex align-items-center">
        <img
          src={cross}
          style={{ height: "24px", width: "24px", marginRight: "16px" }}
          alt=""
        />
        <p className="no_members_name">You have responded No</p>
      </div>

      <p onClick={onClick} className="text_change mb-0">
        change
      </p>
    </div>
  );
}

export default NoStatusCard;
