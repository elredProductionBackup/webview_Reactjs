import React, { useState } from "react";
import greentick from "../../../../assets/images/greentick.svg";
import bluetick from "../../../../assets/images/bluetick.svg";
import { calcTextLength, transformText } from "../../../../globalFunctions";
import { useNavigate, useSearchParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import CompanyTitlesPopup from "../CompanyTitlesPopup/CompanyTitlesPopup";
import DesignationListProfileForRatings from "../../../Profile/components/Ratings/DesignationListProfile/DesignationListProfile";

const WorkDetail = ({ titles, name, city, startYear, endYear, last, currentlyDoing, isVerified, greenTickVerification,  
  educationCertificatePreview, educationCertificateURL, extraTitlesCount, departments, extraDepartmentsCount, titleClickable, isCompany }) => {

  const navigate = useNavigate();
  let [searchParams] = useSearchParams();
  const userCode = searchParams?.get("userCode");
  const [eduCertificateLoader, setEduCertificateLoader] = useState(true);
  const [showTitlePopup, setShowTitlesPopup] = useState(false);
  const [companyPopupHeader, setCompanyPopupHeader] = useState("");

  const navigateToEduCertificate = () => {
    navigate(`/my-bio/view-education-certificate/?userCode=${userCode}`, {
    state: { educationCertificatePreview, educationCertificateURL, userCode }})
  }

  const handleCompanyTitlespopup = (headerText) => {
    if (titleClickable) {
      setCompanyPopupHeader(headerText);
      setShowTitlesPopup(true);
    } else return false;
  }

  const newTitles = titles?.map(title => ({value: title}));
  const newDepartments = departments?.map(department => ({value: department}));

  return (
    <>
    <div className="work-detail">
      <div className={titleClickable ? "work-title-div work-title-div-cursor" : "work-title-div"} onClick={() => handleCompanyTitlespopup("Designation")}>
        <div className={isCompany ? "work-title-company" : "work-title"}>
          {isCompany ? <DesignationListProfileForRatings designation={newTitles} maxWidth={350} /> : titles?.toString()}
        </div>
        {greenTickVerification &&  <div className="work-verify">
          <img src={greentick} alt="" />
        </div>}
      </div>
      {departments ? <div className="work-department-div">
        <div className={titleClickable ? "department-title-text-container department-title-text-cursor" : "department-title-text-container"} 
          onClick={() => handleCompanyTitlespopup("Department")}>
            <div className="department-title-text">
              <DesignationListProfileForRatings designation={newDepartments} maxWidth={350} />
            </div>
        </div>
      </div> : null}
      <div className="work-desc-div">
        <div className="name">
          {calcTextLength(name.length, name)}
        </div>
        {isVerified &&  <div className="badge1">
         <img src={bluetick} alt="" />
        </div>}
        <div className="city"> | {calcTextLength(city.length, city)}</div>
      </div>
      <div className={educationCertificatePreview ? "year-with-edu-cert" : "year"}>
        {startYear.trim() !== "" && (endYear.trim() !== "" || currentlyDoing)
          ? `${startYear.trim()} - ${
              currentlyDoing ? "Present" : endYear.trim()
            }`
          : startYear.trim() !== ""
          ? startYear.trim()
          : startYear.trim() === "" && currentlyDoing
          ? "Present"
          : endYear.trim()}
      </div>
      <div className={educationCertificatePreview && eduCertificateLoader ? "edu-certificate-shimmer" : "d-none"}><Skeleton width={60} 
      height={80} baseColor="#2A313F" highlightColor="#1e212b" /></div>
      {educationCertificatePreview && <div onClick={navigateToEduCertificate} className={eduCertificateLoader ? "d-none" : "edu-certificate-preview-img"}>
        <img src={educationCertificatePreview} alt="" onLoad={() => setEduCertificateLoader(false)} />
      </div>}
      {last ? null : <hr />}
    </div>
    <CompanyTitlesPopup showTitlePopup={showTitlePopup} setShowTitlesPopup={setShowTitlesPopup} 
      companyPopupHeader={companyPopupHeader} titlesArray={companyPopupHeader === "Designation" ? titles : departments} />
    </>
  );
};

export default WorkDetail;
