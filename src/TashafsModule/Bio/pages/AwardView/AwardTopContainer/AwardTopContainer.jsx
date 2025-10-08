import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import moment from "moment";
import BodyKey from "./BodyKey/BodyKey";

const AwardTopContainer = ({ back, data, awardImg, bluetick, navigate }) => {
  const [sendBlueLoader, setSendBlueLoader] = useState(true);
  const [pdfLoader, setpdfLoader] = useState(true)
  return (
    <>
      <div className="award-header">
        <Spinner
          animation="border"
          variant="light"
          size="sm"
          className={
            sendBlueLoader
              ? "show-img-loader back-icon-award-spinner"
              : "hide-img-loader"
          }
        />
        <div className={!sendBlueLoader ? "award-back" : "d-none"} onClick={() => navigate(-1)}>
          <img
            src={back}
            alt=""
            className={!sendBlueLoader ? "show-image-after-loader" : "hide-img-loader"}
            onLoad={() => setSendBlueLoader(false)}
          />
        </div>
        <div className="title">My awards & certificates</div>
      </div>
      <div className="award-title">{data?.awardTitle}</div>
      <div className="awardImg-div">
      <Spinner animation="border" variant="light" size="sm" className={pdfLoader ? 'show-img-loader awardImg-div' : 'hide-img-loader'} />
        <img src={data?.awardIconURL || awardImg} alt="" className={!pdfLoader ? 'show-image-after-loader' : 'hide-img-loader'}
        onLoad={() => setpdfLoader(false)}  />
      </div>
      <BodyKey moment={moment} data={data} bluetick={bluetick} />
    </>
  );
};

export default AwardTopContainer;
