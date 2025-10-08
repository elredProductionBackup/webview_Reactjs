import React, { useState } from "react";
import "./noRatings.scss";
//import norating from "../../../../../assets/images/no-data-search-2x.png";
import norating from "../../../../../assets/images/no-search-image-dark-theme.png";
import { Spinner } from "react-bootstrap";

function NoSearchRatings({ color }) {
  
  const [closeLoader, setCloseLoader] = useState(true);

  return (
    <div className="container-wrapper-no-search">
        <Spinner
                  animation="border"
                  variant="danger"
                  size="sm"
                  className={
                    closeLoader ? "d-block noserach-spinner" : "d-none"
                  }
                />
          <img alt="" src={norating} className={!closeLoader ? "d-block" : "d-none"} onLoad={()=>setCloseLoader(false)} />
          <p className="no-ratings-text">No search result found</p>
      
    </div>
  );
}

export default NoSearchRatings;
