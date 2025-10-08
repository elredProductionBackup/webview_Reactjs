import React from "react";
import "./index.scss";
import ProfileImage from "../profile/profileImage";

function MembersCard({ item }) {
  return (
    <div className="d-flex members_cont justify-content-between">
      <div className="d-flex align-items-center">
        <ProfileImage src={item.img} className="member_img" />
        <p className="members_name">{item.name}</p>
      </div>

      <p
        className="members_status"
        style={{ color: item.status === "Maybe" ? "#E3a11f" : "#11pp2f" }}
      >
        {item.status}
      </p>
    </div>
  );
}

export default MembersCard;
