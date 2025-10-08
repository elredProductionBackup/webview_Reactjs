import React from "react";
import "./noAwards.scss";
//import norating from "../../../../../assets/images/no-testimonials.png";
import norating from "../../../../../assets/images/no-search-image-dark-theme.png";
import noAwards from "../../../../../assets/images/noawards.png"
import searchFinder from '../../../../../assets/images/Search-finder-dark.png'
function NoSearchAwards({ isSearch, showData }) {
  return (
    <div className="container-wrapper-no-award">
      <div className="centered-div ">
        <div className="d-flex align-items-center justify-content-center flex-column">
          {isSearch && !showData ? <>
            <img alt="" className="img-no-awards" src={norating} />
            <p className="no-ratings mt-4">No search result found</p>
          </> :
          isSearch && showData ? <>
          <img className="search-finder"  alt="" src={searchFinder} />
        </> :
            <>
              <img className="no-Awards" alt="" src={noAwards} />
              <p className="no-ratings mt-4">No awards & honours added yet</p>
            </>
          }
        </div>
      </div>
    </div>
  );
}

export default NoSearchAwards;
