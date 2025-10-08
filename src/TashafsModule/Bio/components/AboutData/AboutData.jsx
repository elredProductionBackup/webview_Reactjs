import React from "react";
import "./aboutdata.scss";
import logo from "../../../../assets/images/resume-logo-2x.png";
import next from "../../../../assets/images/ic_back.svg";
import { useNavigate } from "react-router-dom";
import AboutShimmer from "./AboutShimmer/AboutShimmer";
import AboutContainer from "./AboutContainer/AboutContainer";

const AboutData = ({ bio, userCode, loader }) => {
  const navigate = useNavigate();

  return (
    <>
      {loader ?
        <AboutShimmer color="#2A313F" highlightColor="#1e212b" /> :
        <AboutContainer bio={bio} logo={logo} next={next} navigate={navigate} userCode={userCode} />}
    </>
  );
};

export default AboutData;
