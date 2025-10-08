import React from 'react'
//import closeButton from '../../../assets/images/closeBg.svg'
import closeButton from '../../../assets/images/close_dark.svg'
import RatingsPopUp from '../../../TashafsModule/Profile/components/Ratings/RatingsPopUp/RatingsPopUp';
import Contants from '../../../utils/Contants';

const NetworkEthicalPopup = ({ showEthical, setShowEthical, ethicalData, ethicalcount,  ethicalhasMore, ethicalloader,  fetchMoreEthicalRatings, 
    ethicalSetLoading,   ethicalisSearch, ethicalPage,  ethicalTempSearchText,  ethicalSearchLoader,
    ethicalSearchFunction, baseColor, isLive, productionUrl, showUserFeedbackPopup, setShowUserFeedbackPopup
}) => {
  return (
    <>
      <RatingsPopUp
                        count={ethicalcount}
                        closeBtn={closeButton}
                        close={setShowEthical}
                        msg={"Say It is a safe haven for community engagement and activities"}
                        data={ethicalData}
                        more={ethicalhasMore}
                        fetchMoreData={ethicalisSearch ? ethicalSearchFunction : fetchMoreEthicalRatings}
                        searchHandler={ethicalSearchFunction}
                        setLoading={ethicalSetLoading}
                        loading={ethicalSearchLoader.ethicalsearchNetwork}
                        type='ethical-network'
                        isSearch={ethicalisSearch}
                        loader={ethicalloader.ethicalNetwork}
                        closePopUp={setShowEthical}
                        searchMore={ethicalhasMore}
                        baseColor={baseColor}
                        page={ethicalPage}
                        prevSearchText={ethicalTempSearchText}
                        noRatingsText={`Once someone rates this ${Contants.NETWORK_NAME_SINGULAR.toLowerCase()}, their name will be displayed here`}
                        isNetwork={true}
                        isLive={isLive}
                        productionUrl={productionUrl}
                        screen={"Network Ratings - Marked as ethical code - Webview"}
                        showEthical={showEthical}
                        noelipse={false}
                        showUserFeedbackPopup={showUserFeedbackPopup}
                        setShowUserFeedbackPopup={setShowUserFeedbackPopup}
                    />      
    </>
  )
}

export default NetworkEthicalPopup
