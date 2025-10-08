import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./imagecertificateview.scss";
// import closeBtn from "../../../../assets/images/redclose.svg";
// import imgIcon from "../../../../assets/images/imgLable.svg";
import { Spinner } from "react-bootstrap";
// import CertificateShimmer from "../CertificateShimmer/CertificateShimmer";
// import { getFileExtension } from "../../../../globalFunctions";
import back from "../../../../assets/images/back-dark-theme.svg";
import { clearToasts } from "react-simple-toasts";

const ImageCertificateView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { url } = location?.state;
  const [pdfLoader, setpdfLoader] = useState(true)
  const [certiLoader, setCertiLoader] = useState(true)
  const [loaderCertificateImage, setLoaderCertificateImage] = useState(true)
  const [loader, setLoader] = useState(true)
  const [sendBlueLoader, setSendBlueLoader] = useState(true);

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
                ? "show-img-loader back-icon-spinner-cert-img"
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
          <div className="certificate_name">Award Certificate</div>
        </div>
      </div>
      <div className="wrapper_certificate">

        <Spinner animation="border" variant="danger" size="sm" className={loaderCertificateImage ? 'show-img-loader cretificate-image-loader-icon' : 'hide-img-loader'} />
        <img src={url} alt="" className={!loaderCertificateImage ? 'show-image-after-loader' : 'hide-img-loader'} onLoad={() => setLoaderCertificateImage(false)} />

      </div>
    </div>
  );
};

export default ImageCertificateView;
