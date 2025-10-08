import React from "react";
import "./noTestimonal.scss";
import noTesti from "../../../assets/images/No-search-Testimonial.png";
import noSearch from "../../../assets/images/search-notfound.png";

function NoSearchTestimonials({ color, searchResultFound, searchText }) {
  return (
    <div className="container-wrapper-no height-100">
      <div className=" centered-div-test height-100">
        <div className="d-flex align-items-center justify-content-center flex-column height-100">
         {!searchResultFound && searchText? <>
            <img alt="" src={noTesti} />
            <p className="no-testimonal">No search result found</p>
          </>:<><img className="no-search-img" alt="" src={noSearch} /></>}
        </div>
      </div>
    </div>
  );
}

export default NoSearchTestimonials;
