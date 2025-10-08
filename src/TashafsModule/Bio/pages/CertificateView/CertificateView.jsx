import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./certificateview.scss";
// import closeBtn from "../../../../assets/images/redclose.svg";
// import pdfIcon from "../../../../assets/images/pdfIcon.svg";
// import back from "../../../../assets/images/backpage.svg";
import back from "../../../../assets/images/back-dark-theme.svg";
import { Spinner } from "react-bootstrap";
import { clearToasts } from "react-simple-toasts";

const CertificateView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { url, link} = location?.state;
  const [pdfLoader, setpdfLoader] = useState(true)
  const [certiLoader, setCertiLoader] = useState(true)
  const [sendBlueLoader, setSendBlueLoader] = useState(true);
  const fileExtension = link?.split('.').pop();

  useEffect(() => {
    clearToasts();
  }, []);

  return (
    <div>
      <div className="cert_header">
        <div className="name">
        <Spinner
            animation="border"
            variant="light"
            size="sm"
            className={
              sendBlueLoader
                ? "show-img-loader back-icon-pdf-award-spinner"
                : "hide-img-loader"
            }
          />
          <div className={!sendBlueLoader ? "back-arrow" : "d-none"} onClick={() => navigate(-1)}>
            <img
              src={back}
              alt=""
              className={!sendBlueLoader ? "show-image-after-loader" : "hide-img-loader"}
              onLoad={() => setSendBlueLoader(false)}
            />
          </div>
          <div className="certificate_name">Award Certificate</div>
        </div>
      </div>
      <div className="wrapper_certificate">
        <a href={link} target="_blank">
          <img src={url} alt="" loading="lazy" className={fileExtension === "pdf" ? "pdf-box-shadow" : ""} />
        </a>
      </div>
    </div>
  );
};

export default CertificateView;
