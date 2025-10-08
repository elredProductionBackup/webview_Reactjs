import React from 'react'
import { UserFeedbackPopup } from './RatingsPopupSearchImports'
import RatingsSearchInput from './RatingsSearchInput'
import Constants from '../../../.././../../utils/Contants'

const RatingsSearchpopupInner = ({ close, closeBtn, count, msg, type, searchHandler, setLoading, setSearchText, searchText, closePopUp, page, prevSearchText,
    dataLength, searchMore, fetchMoreData, isNetwork, isLive, productionUrl, screen, showEthical, shoWork, isSearch, myref, noelipse
    , closeIconLoader, setCLoseIconLoader, searchIconLoader, setSearchIconLoader, showUserFeedbackPopup, setShowUserFeedbackPopup }) => {


    const RatingsSearchBarProps = {
        close, closeBtn, count, msg, type, searchHandler, setLoading, setSearchText, searchText, closePopUp, page, prevSearchText,
        dataLength, searchMore, fetchMoreData, isNetwork, showEthical, shoWork, isSearch, myref, noelipse, closeIconLoader, setCLoseIconLoader, searchIconLoader, setSearchIconLoader, setShowUserFeedbackPopup
    }
    return (
        <>
            <div className="ratings-header">
                <RatingsSearchInput {...RatingsSearchBarProps} />
            </div>
            {isNetwork && <UserFeedbackPopup showUserFeedbackPopup={showUserFeedbackPopup} setShowUserFeedbackPopup={setShowUserFeedbackPopup} isLive={isLive}

                productionUrl={productionUrl} screen={screen} showEthical={showEthical} shoWork={shoWork} headerText={`${Constants?.NETWORK_NAME_SINGULAR} Ratings`} />}
        </>
    )
}

export default RatingsSearchpopupInner
