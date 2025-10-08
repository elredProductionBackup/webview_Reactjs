import React from 'react'
//import closeButton from '../../../assets/images/closeBg.svg'
import closeButton from '../../../assets/images/close_dark.svg'
import RatingsPopUp from '../../../TashafsModule/Profile/components/Ratings/RatingsPopUp/RatingsPopUp';
import Contants from '../../../utils/Contants';

const NetworkWorkRatings = ({ shoWork, setShowWork, workcount,
    workedHereData, workHasMore, workLoader, fetchMoreWorkedHereRatings,
    workSetLoading, workisSearch, workPage, workTempSearchText,
    workSearchLoader, workSearchFunction, baseColor, isLive, productionUrl,
    showUserFeedbackPopup, setShowUserFeedbackPopup
}) => {
    return (
        <>
            <RatingsPopUp
                count={workcount}
                closeBtn={closeButton}
                close={setShowWork}
                msg={"Have associated with this group / were associated with this group in the past"}
                data={workedHereData}
                more={workHasMore}
                fetchMoreData={workisSearch ? workSearchFunction : fetchMoreWorkedHereRatings}
                searchHandler={workSearchFunction}
                setLoading={workSetLoading}
                loading={workSearchLoader.workSearch}
                type='work'
                isSearch={workisSearch}
                loader={workLoader.work}
                closePopUp={setShowWork}
                searchMore={workHasMore}
                baseColor={baseColor}
                page={workPage}
                prevSearchText={workTempSearchText}
                noRatingsText={`Once someone rates this ${Contants.NETWORK_NAME_SINGULAR.toLowerCase()}, their name will be displayed here`}
                isNetwork={true}
                isLive={isLive}
                productionUrl={productionUrl}
                screen={"Network Ratings - Have worked here - Webview"}
                shoWork={shoWork}
                noelipse={false}
                showUserFeedbackPopup={showUserFeedbackPopup}
                setShowUserFeedbackPopup={setShowUserFeedbackPopup}
            />
        </>
    )
}

export default NetworkWorkRatings
