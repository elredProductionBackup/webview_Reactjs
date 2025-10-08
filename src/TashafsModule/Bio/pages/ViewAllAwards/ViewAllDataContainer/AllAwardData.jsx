import React from 'react'
import RedLoader from '../../../../Profile/components/RedLoader/RedLoader'
import InfiniteScroll from 'react-infinite-scroll-component'
import { calcTextLength } from '../../../../../globalFunctions'
import SingleAwardChip from './SingleAwardChip'

function AllAwardData({data,fetchMoreData,hasMore,searchHasMore,paginateLoader,viewAward,userCode,navigate,bluetick, awardsCount,paginateFunction,paginateSearchLoader,isSearch }) {
  return (
    <>
        <InfiniteScroll
                        dataLength={data.length}
                        next={paginateFunction}
                        hasMore={!isSearch?hasMore:searchHasMore}
                        loader={(paginateLoader|| paginateSearchLoader) &&<RedLoader />}
                        height={"calc(100vh - 44px)"}
                        className={"awards-scrolling"} >
                            
                        {data?.map((item, id) => (
                            <>
                            <SingleAwardChip viewAward={viewAward} item={item} userCode={userCode} navigate={navigate}
                             calcTextLength={calcTextLength} bluetick={bluetick} data={data} id={id}/>
                            </>
                        ))}
                    </InfiniteScroll>
    </>
  )
}

export default AllAwardData
