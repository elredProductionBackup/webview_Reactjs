import React, { useState } from 'react'
import { Spinner } from "react-bootstrap";
const MySuperKillsHeader = ({back,navigate}) => {
    const [backLoader, setbackLoader] = useState(true);
  return (
    <>
       <div className="back-title">
        <span className={backLoader?"back-loader":"back-button"} onClick={() =>navigate? navigate(-1):null}>
          <Spinner
            animation="border" variant="light" size="sm"
            className={backLoader ? "show-img-loader back-super-icon-spinner" : "hide-img-loader"}
          />
          <img src={back} alt="" className={!backLoader ? "show-image-after-loader" : "hide-img-loader"}
             onLoad={() => setbackLoader(false)} 
            />
        </span>
        My Super Power
      </div>
    </>
  )
}

export default MySuperKillsHeader
