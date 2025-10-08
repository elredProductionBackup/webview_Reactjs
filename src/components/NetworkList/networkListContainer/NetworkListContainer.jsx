import React from 'react'
import SingleNetwork from './SingleNetwork'
import InfiniteScroll from 'react-infinite-scroll-component'
import RedLoader from '../../../TashafsModule/Profile/components/RedLoader/RedLoader'

const NetworkListContainer = ({ networkList ,hasMore, netWorkListPagination,isPagination}) => {
    return (
        <>
            <InfiniteScroll
                dataLength={networkList?.length}
                next={netWorkListPagination}
                hasMore={hasMore}
                loader={isPagination && <RedLoader />}
                 height={"calc(100vh - 50px)"}
                className={ "network-list-container" } >
                {
                    networkList?.map((network) => 
                        <SingleNetwork key={network?.networkCode} netWorkImg={network?.logo} 
                            name={network?.name} location={network?.location} network={network} 
                        />
                    )
                }
            </InfiniteScroll>
        </>
    )
}

export default NetworkListContainer
