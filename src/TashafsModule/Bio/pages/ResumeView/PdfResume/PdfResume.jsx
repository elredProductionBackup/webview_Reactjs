import React from "react";
import "./pdfresume.scss";

const PdfResume = ({ preview, downloadLink }) => {
  
  return (
    <div className="pdfView">
      <div className="wrapper_certificate">
        <a href={downloadLink} target="_blank" style={{textAlign:"center"}}>
          <img src={preview} alt="" className="resume-pdf-shadow" />
        </a>
      </div>
    </div>
  );
};

export default PdfResume;
