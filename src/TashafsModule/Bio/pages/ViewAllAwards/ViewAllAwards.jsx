import React, { useEffect, useState } from "react";
import "./viewallawards.scss";
import back from "../../../../assets/images/backpage.svg";
import bluetick from "../../../../assets/images/bluetick.svg";
import { useLocation, useNavigate } from "react-router-dom";
import useFetchAwardsPagination from "../../apiServices/useFetchAwardsPagination";
import ViewAllDataContainer from "./ViewAllDataContainer/ViewAllDataContainer";
import { AwardsHeader } from './AwardsHeader/AwardsHeader'
import useAwardsSearch from '../../apiServices/useAwardSearch'
import * as deviceinfo from 'react-device-detect';
import { preventZoom } from "../../../../globalFunctions";
import { clearToasts } from "react-simple-toasts";
const ViewAllAwards = ({ isLive, productionUrl }) => {
  const [searchText, setSearchText] = useState("")
  const [isOpenSearch, setisOpenSearch] = useState(false)
  const navigate = useNavigate();
  const location = useLocation();
  const userCode = location?.state?.data;

  const openandCloseSearch = (isOpen) => {
    setisOpenSearch(isOpen)
    preventZoom(deviceinfo)
  }

  useEffect(() => {
    clearToasts();
  }, []);

  let fetchNumber = window.innerHeight < 640 ? 10 : 15

  const { data, hasMore, fetchMoreData, setLoading, paginateLoader, fetchAwards, page, loading, awardsCount } = useFetchAwardsPagination(userCode, isLive, productionUrl, fetchNumber);
  const { deBoundeAwards, isSearch, searchData, fetchAwardsPagination, searchStart, searchHasMore, setPaginateSearchLoader, paginateSearchLoader,awardsSearchCount } = useAwardsSearch(isLive, productionUrl, userCode, fetchAwards, page, setLoading, loading, fetchNumber, fetchMoreData)


  const paginateFunction = () => {
    if (searchText !== "" && isSearch) {
      if (awardsSearchCount !== searchData.length) {
         setPaginateSearchLoader(true)
        fetchAwardsPagination(searchText, searchStart, searchData)
      }


    } else {

      fetchMoreData()
    }

  }

  const viewAllDataContainerProps = {
    data: isSearch ? searchData : data, loading, fetchMoreData, hasMore, navigate, searchLength: searchData.length, dataLength: data.length,
    bluetick, userCode, searchText, isSearch, paginateLoader, isOpenSearch, awardsCount, paginateFunction, searchHasMore, paginateSearchLoader
  }

  return (
    <div className="view-all-awards">
      <AwardsHeader SearchFunction={deBoundeAwards} searchText={searchText} setSearchText={setSearchText} setStartLoad={setLoading} isOpenSearch={isOpenSearch} setisOpenSearch={setisOpenSearch} openandCloseSearch={openandCloseSearch} />
      <ViewAllDataContainer {...viewAllDataContainerProps} />
    </div>
  );
};

export default ViewAllAwards;
