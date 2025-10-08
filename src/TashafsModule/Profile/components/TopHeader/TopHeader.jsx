import React from "react";

const TopHeader = ({ color, title }) => {
  return <div style={{ color: color }} className="profile-text">{title}</div>;
};

export default TopHeader;
