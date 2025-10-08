import GroupedNetworkList from "./GroupedNetworkList/GroupedNetworkList";
import GroupedNetworkListShimmer from "./GroupedNetworkList/GroupedNetworkListShimmer/GroupedNetworkListShimmer";
import { NetworkHeader, NetworkListContainer, useNetworkList, NetworkListShimmer, UserFeedbackPopup, Constants } from "./Imports_NetworkListIndex";
import NetworkList from "../../TashafsModule/Test/Test"

const NetworkListIndex = ({ setOpenNetworkList, userCode, isLive, productionUrl, showUserFeedbackPopup, setShowUserFeedbackPopup, isShareCard }) => {
  let fetchNumber = window.innerHeight > 720 ? 12 : 10;

  const { networkList, totalCount, page, loading, hasMore, netWorkListPagination,isPagination } = useNetworkList(isLive, productionUrl, userCode,fetchNumber)

  const networkListData = {
    networkList, totalCount, page, loading, hasMore, netWorkListPagination,isPagination
  }

  return (
    <>
    <div className='network-list'>
      <NetworkHeader setOpenNetworkList={setOpenNetworkList} setShowUserFeedbackPopup={setShowUserFeedbackPopup} count={totalCount} loading={loading} />
      {/* {
       loading ?
        <NetworkListShimmer/> 
       : <NetworkListContainer {...networkListData} />
      } */}

      {/* {loading ? <GroupedNetworkListShimmer /> : */}
      <NetworkList isLive={isLive} productionUrl={productionUrl} />
        {/* // <GroupedNetworkList isLive={isLive} productionUrl={productionUrl} userCode={userCode} /> */}
      {/* } */}
    </div>
    {isShareCard ? <UserFeedbackPopup showUserFeedbackPopup={showUserFeedbackPopup} 
      setShowUserFeedbackPopup={setShowUserFeedbackPopup} isLive={isLive} productionUrl={productionUrl} screen={'Networks List - Webview'}
      headerText={`${Constants?.NETWORK_NAME_PLURAL} List`} /> : null }
    </>
  )
}

export default NetworkListIndex
