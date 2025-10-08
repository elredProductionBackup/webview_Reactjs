import InfiniteScroll from "react-infinite-scroll-component";
import useFetchNetworksList from "../apiservice/useFetchNetworksList";
import "./grouped-network-list.scss";
import RedLoader from "../../../TashafsModule/Profile/components/RedLoader/RedLoader";

const GroupedNetworkList = ({ isLive, productionUrl, userCode }) => {
  const { networkList, hasMore, netWorkListPagination, isPagination } 
    = useFetchNetworksList(isLive, productionUrl, userCode);

    return (
        <InfiniteScroll
            dataLength={networkList?.length}
            next={netWorkListPagination}
            hasMore={hasMore}
            loader={isPagination ? <RedLoader /> : null}
            height={"calc(100vh - 50px)"}
            className="grouped-network-list-container"
            >
            {networkList?.map(network => 
                <div key={network?.networkId} className="network-list-card-container">
                    <span className="network-list-network-span">
                        <span className="network-list-network-thumbnail-container">
                            <img src={network?.networkImage} alt="" className="network-list-network-thumbnail" />
                        </span>
                        <span className="network-list-network-name">{network?.networkName}</span>
                    </span>

                    <div className="network-list-card-with-border">
                        {
                            network?.networkGroups.map((group, index) => 
                                <div key={group?.networkCode}>
                                    <div className="network-list-card-single">
                                        <span className="network-list-card-single-img-container">
                                            <img src={group?.logo} alt="" className="network-list-card-single-img" />
                                        </span>
                                        <span className="network-list-name-address-container">
                                            <span className="network-list-name-title">{group?.name}</span>
                                            <span className="network-list-address">
                                                <span className="network-list-address-city">{group?.location?.city}</span>
                                                {
                                                    group?.location?.city && group?.location?.country ? 
                                                        <span className="network-list-address-seperator">,</span> : null
                                                }
                                                <span className="network-list-address-country">{group?.location?.country}</span>
                                            </span>
                                        </span>
                                    </div>
                                    {index !== network?.networkGroups?.length - 1 ? <span className="network-list-bottom-divider-container">
                                        <span className="network-list-bottom-divider" />
                                        </span> : null
                                    }
                                </div>
                        )}
                    </div>
                </div>
            )}
        </InfiniteScroll>
  )
}

export default GroupedNetworkList