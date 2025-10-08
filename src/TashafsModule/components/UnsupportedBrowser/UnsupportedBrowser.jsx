import React from "react";
import "./unsupportedbrowser.scss";
import unsupported from "../../../assets/images/unsupported.svg";
import logo from "../../../assets/images/chromelogo.png";

const UnsupportedBrowser = () => {
  return (
    <div className="unsupported_browser">
      <div className="content">
        <div className="screen">
          <img src={unsupported} alt="" id="error_logo"/>
          <div className="heading">Improve Your Experience</div>
          <div className="desc_text">
            You are using a Web Browser which we don't support currently. Please
            use Google Chrome.
          </div>
          <img src={logo} alt="" id="chrome_logo"/>
          <div className="chrome">Switch to Chrome</div>
        </div>
      </div>
    </div>
  );
};

export default UnsupportedBrowser;
