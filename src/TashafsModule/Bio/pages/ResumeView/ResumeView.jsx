import React, { useEffect, useState } from "react";
import "./resumeview.scss";
import { useLocation, useNavigate } from "react-router-dom";
import back from "../../../../assets/images/ic_back.svg";
import noResume from "../../../../assets/images/No-resume.png";
import PdfResume from "./PdfResume/PdfResume";
import { Spinner } from "react-bootstrap";
import { clearToasts } from "react-simple-toasts";

const ResumeView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pdfPreview, resumeURL, resumeContentType } = location.state;
  const [resumeBackImg, setresumeBackImg] = useState(true)
  const [noResumeLoader, setNoResumeLoader] = useState(true)

  useEffect(() => {
    clearToasts();
  }, []);

  return (
    <div className="resume-view">
      <div className="resume-header">
      <Spinner animation="border" variant="light" size="sm" className={resumeBackImg ?'showing-img-loader resume-back-spinner':"hiding-img-loader "}/>

        <div   className={!resumeBackImg?'resume-back showing-img-loader':"hiding-img-loader "}  onClick={() => navigate(-1)}>
          <img src={back} alt="" onLoad={() => setresumeBackImg(false)}/>
        </div>
        <div className="title">Resume</div>
      </div>
      {!resumeURL ? (
        <div className="noresume">
          <img src={noResume} alt="" />
          <div className="no-title">No Resume added yet</div>
        </div>
      ) : resumeContentType == "image" ? (
        <div className="image-resume">
            <Spinner animation="border" variant="danger" size="md" className={noResumeLoader ?'showing-img-loader resume-back-spinner':"hiding-img-loader "}/>
            <img src={resumeURL} onLoad={() => setNoResumeLoader(false)} className={!noResumeLoader ? 'd-block' : 'hide-img-loader'} alt=""/>
        </div>
      ) :
        <PdfResume preview={pdfPreview} downloadLink={resumeURL} />
      }
    </div>
  );
};

export default ResumeView;
