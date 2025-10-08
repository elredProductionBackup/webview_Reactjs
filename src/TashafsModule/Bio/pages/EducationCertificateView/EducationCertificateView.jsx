import { useLocation, useNavigate } from "react-router-dom";
import "./education-certificate-view.scss";
import { Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import back from "../../../../assets/images/ic_back.svg";
import { clearToasts } from "react-simple-toasts";

const EducationCertificateView = () => {
    const location = useLocation();
    const { educationCertificatePreview, educationCertificateURL } = location?.state;
    const navigate = useNavigate();
    const [eduCertificateBackLoader, setEduCertificateBackLoader] = useState(true);
    const [eduCertificateLoader, setEduCertificateLoader] = useState(true);
    const fileType = educationCertificateURL?.split('.')?.pop();

    useEffect(() => {
        clearToasts();
    }, []);
    
    return (
        <div className="edu-cert-view">
            <div className="edu-cert-header">
                <Spinner animation="border" variant="light" size="sm" className={eduCertificateBackLoader ? "edu-cert-back-spinner" : "d-none"}/>
                <div className={!eduCertificateBackLoader ? 'edu-cert-back' : "d-none"}  onClick={() => navigate(-1)}>
                    <img src={back} alt="" onLoad={() => setEduCertificateBackLoader(false)}/>
                </div>
                <div className="edu-cert-title">Education Certificate</div>
            </div>
            <div className="edu-cert-container">
                <Spinner animation="border" variant="danger" size="md" 
                    className={eduCertificateLoader ? "edu-cert-spinner" : "d-none"}/>
                {fileType?.toLowerCase() === "pdf" ? 
                    <a href={educationCertificateURL} target="_blank" rel="noreferrer">
                        <img src={educationCertificatePreview} className={eduCertificateLoader ? "d-none" : "edu-cert-pdf"} alt="" onLoad={() => setEduCertificateLoader(false)} />
                    </a>
                    : <img src={educationCertificatePreview} className={eduCertificateLoader ? "d-none" : "edu-cert-image"} alt="" onLoad={() => setEduCertificateLoader(false)} />}   
            </div>  
        </div>
    )
}

export default EducationCertificateView;