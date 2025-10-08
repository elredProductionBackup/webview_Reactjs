import React from 'react'
import { closeIcon, searchRatinghandler, closePopUphandler, SearchHandlers, Spinner, search, removeFocus, Feedback } from './RatingsPopupSearchImports'

const RatingsSearchInput = ({ close, closeBtn, count, msg, type, searchHandler, setLoading, setSearchText, searchText, closePopUp, page, prevSearchText,
  dataLength, searchMore, fetchMoreData, isNetwork, showEthical, shoWork, isSearch, myref, noelipse, closeIconLoader, setCLoseIconLoader, searchIconLoader, setSearchIconLoader, setShowUserFeedbackPopup }) => {

  return (
    <>
      <div className="ethical">
        <div className={noelipse ? "count-div  count-div-profile" : "count-div"}>
          <span className="count">{count}</span> <span className="count-rating-header-text">{msg}</span>
        </div>
        <div className='d-flex'>
          {isNetwork && <div className='d-flex' style={{ paddingRight: 14 }}><Feedback setOpen={setShowUserFeedbackPopup} /></div>}
          {(showEthical || shoWork) && <div onClick={() => closePopUphandler(close, setSearchText, closePopUp, type, fetchMoreData)} className="ratings-popup-close-button">
            <img src={closeBtn} alt="" className={!closeIconLoader ? 'showing-img-loader' : "hiding-img-loader"} onLoad={() => setCLoseIconLoader(false)} />
            <Spinner animation="border" variant="light" size="sm" className={closeIconLoader ?
              'showing-img-loader close-icon-loader-header-ratings' : 'hiding-img-loader'} />
          </div>}
        </div>
      </div>
      {(count !== 0 || isSearch) && (
        <div className="search-ratings">
          <Spinner animation="border" variant="secondary" size="sm" className={searchIconLoader ? 'showing-img-loader  searchIconLoader' : 'hiding-img-loader'} />
          <img src={search} alt="" className={!searchIconLoader ? 'showing-img-loader SearchIconsvg' : "hiding-img-loader"}
            onClick={() => { if (myref.current) myref.current.focus() }}
            onLoad={() => setSearchIconLoader(false)}
          />
          {/* <span className='dividerline'></span> */}
          <input type="text" value={searchText} ref={myref} placeholder="Search by Name/Title" onKeyUp={(e) => removeFocus(e)}
            onChange={(e) => {
              const inputValue = e.target.value;
              if (/^[0-9A-Za-z\-]+(?:[\s\-][0-9A-Za-z\-]+)*\s?$/.test(inputValue) || inputValue === "") {
                SearchHandlers(e, setSearchText, setLoading, searchHandler, type, searchText, page, prevSearchText, dataLength, searchMore)
              };
            }} />
          {searchText.length > 0 && <img className='ratings-popup-search-close-img' src={closeIcon} alt=""
            onClick={() => searchRatinghandler("", setSearchText, setLoading, searchHandler, type, true, page, prevSearchText, dataLength, searchMore)} />
          }
        </div>
      )}
    </>
  )
}

export default RatingsSearchInput
