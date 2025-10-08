import React from "react";
import profile from "../../../../assets/images/profile.png";
import "./index.scss";
import classNames from "classnames";

function ProfileImage({ className, src }) {
  return (
    <img
      src={src || profile}
      className={classNames("user_profile", { [className]: className })}
      alt=""
    />
  );
}

export default ProfileImage;
