import InfiniteScroll from 'react-infinite-scroll-component'
import RedLoader from '../../../RedLoader/RedLoader'
import bluetick from "../../../../../../assets/images/ic_round-verified.svg";

import RatingsDataInner from './RatingsDataInner';
const RatingsPopupData = ({ data, fetchMoreData, more,  loader,searchMore,baseColor,isSearch }) => {

const hasMoreVal=isSearch?searchMore:more

    return (

        <InfiniteScroll
            dataLength={data?.length}
            next={fetchMoreData}
            hasMore={hasMoreVal}
            loader={ loader && <div className="rating-loader"><RedLoader /></div>}
            scrollableTarget="ratingsMember"
        >
            <div className="scrollingDiv" id="ratingsMember">
                {data?.map((item, id, arr) => (
                   <RatingsDataInner  
                   key={id}
                   item={item}
                   bluetick={bluetick}
                   id={id}
                   arr={arr}
                   baseColor={baseColor}
                   />
                ))}
            </div>
        </InfiniteScroll>
    )
}

export default RatingsPopupData
