import React, { useState } from 'react'
import RatingsSearchpopupInner from './RatingsSearchpopupInner'
const RatingsPopupSearchbar = ({ close, closeBtn, count, msg, type, searchHandler, setLoading, setSearchText, searchText, closePopUp, page, prevSearchText,
    dataLength, searchMore, fetchMoreData, isNetwork, isLive, productionUrl, screen, showEthical, shoWork, isSearch, myref, noelipse, 
    showUserFeedbackPopup, setShowUserFeedbackPopup }) => {
        
    const [closeIconLoader, setCLoseIconLoader] = useState(true)
    const [searchIconLoader, setSearchIconLoader] = useState(true)
    

    const ratingsSearchPopupInnerProps = {
        close, closeBtn, count, msg, type, searchHandler, setLoading, setSearchText, searchText, closePopUp, page, prevSearchText, dataLength, searchMore, fetchMoreData,
        isNetwork, isLive, productionUrl, screen, showEthical, shoWork, isSearch, myref, noelipse, closeIconLoader, setCLoseIconLoader, searchIconLoader, setSearchIconLoader,
        showUserFeedbackPopup, setShowUserFeedbackPopup
    }
    return (
        <>
            <RatingsSearchpopupInner {...ratingsSearchPopupInnerProps} />
        </>
    )
}

export default RatingsPopupSearchbar
