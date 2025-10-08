import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/header/Header";
import { useSearchParams } from "react-router-dom";
import "../testimonal.scss";
import SearchBar from "../../search/SearchBar";
import { useSearchResult } from "../../hooks/useSearchResult";
import SearchScroll from "./component/SearchScroll";
import AadhaarVerifiedPopup from "../../../TashafsModule/Profile/components/AadhaarVerifiedPopup/AadhaarVerifiedPopup";
import { AadharPopupContext } from "../../../TashafsModule/Profile/components/AadhaarVerifiedPopup/AadharPopupContext";
import { clearToasts } from "react-simple-toasts";

function SearchTestimonials({ isLive, productionUrl }) {
  let [searchParams] = useSearchParams();
  const [searchText, setSearchText] = useState("");
  const userCode = searchParams.get("userCode");
  const { showVerifiedPopup, setShowVerifiedPopup } = useContext(AadharPopupContext);
  const {
    data,
    loading,
    setData,
    searchResultFound,
    hasMore,
    getData,
    paginationLoader,
    paginationcall
  } = useSearchResult(
    `${isLive ? productionUrl : ""}/noSessionPreviewTestimonials`
  );

  useEffect(() => {
    clearToasts();
  }, []);

  return (
    <>
    <div className="search_test_container">
      <Header>
        <SearchBar
          searchText={searchText}
          setSearchText={setSearchText}
          loading={loading}
          onSearch={getData}
          setData={setData}
          placeholder={"Search by Name/Keyword/Title"}
        />
      </Header>
      <div className="search-rel-container">
        <SearchScroll
          loading={loading}
          searchResultFound={searchResultFound}
          data={data}
          className={"search_result_bg"}
          userCode={userCode}
          hasMore={hasMore}
          getData={paginationcall}
          searchText={searchText}
          paginationLoader={paginationLoader}
        />
      </div>
    </div>
      <AadhaarVerifiedPopup showVerifiedPopup={showVerifiedPopup} setShowVerifiedPopup={setShowVerifiedPopup} />
    </>
  );
}
export default SearchTestimonials;
