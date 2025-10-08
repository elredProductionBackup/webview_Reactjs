import React, { useEffect, useRef, useState } from "react";
import "./ratingspopup.scss";
import { RatingsPopupSearchbar } from './ratingsPopupImport'
import RatingsPopupInnerData from "./RatingsPopupInnerData";
const RatingsPopUp = ({ count, closeBtn, close, msg, data, more, fetchMoreData, searchHandler, setLoading, loading, type, isSearch, loader, closePopUp,
  searchMore, baseColor, page, prevSearchText, noRatingsText, isNetwork, isLive, productionUrl, screen, showEthical, shoWork, noelipse, 
  showUserFeedbackPopup, setShowUserFeedbackPopup }) => {

  const [searchText, setSearchText] = useState("")
  const myref = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (myref.current === document.activeElement) {
        myref.current.blur();
      }
    };
    window.addEventListener('touchmove', handleScroll, { passive: true });
    return () => window.removeEventListener('touchmove', handleScroll);
  }, []);

  const paginateData = () => {
    if (isSearch) {
      if (type === 'ethical-network' || type === 'work') {
        setLoading({ ethicalNetwork: type === 'ethical-network' ? true : false, work: type !== 'ethical-network' ? true : false })
      }
      fetchMoreData(searchText, page, prevSearchText, data.length, searchMore)
    } else {
      fetchMoreData()
    }
  }
  const RatingsPopupinnerDataProps = {
    count, data, more, loading, isSearch, loader, searchMore, baseColor, noRatingsText, paginateData
  }
  const RatingsSearchbarProps = {
    close, closeBtn, count, msg, type, searchHandler, setLoading, setSearchText, searchText, closePopUp, page, prevSearchText,
    dataLength: data.length, searchMore, fetchMoreData, isNetwork, isLive, productionUrl, screen, showEthical, shoWork, isSearch, myref, noelipse,
    showUserFeedbackPopup, setShowUserFeedbackPopup
  }
  return (
    <div className="ratings-popup">
      <RatingsPopupSearchbar {...RatingsSearchbarProps} />
      {<RatingsPopupInnerData {...RatingsPopupinnerDataProps} />}
    </div>
  );
};

export default RatingsPopUp;
