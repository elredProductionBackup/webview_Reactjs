import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NoSearchTestimonials from "../../../components/NoTestimonal/NoSearchTestimonials";
import RedLoader from "../../../../TashafsModule/Profile/components/RedLoader/RedLoader";
import ProfileTestimonalCard from "../../../components/card/ProfileTestimonalCard";
import { getRandomColor, gradientSolidColors, } from "../../../../globalFunctions";
import SearchDetail from "../SearchDetail";
import classNames from "classnames";

function SearchScroll(props) {
  const { loading, searchResultFound, data, userCode, className, hasMore, getData, searchText, paginationLoader } = props
  const [showDetail, setShowDetail] = useState(false);
  const [selectedData, setSelectedData] = useState({});

  return (
    <InfiniteScroll dataLength={data?.length}
      next={() => { getData(searchText, data?.length); }}
      style={{ overflow: "hidden" }}
      scrollableTarget="body-wrap" hasMore={hasMore}
    >
      {showDetail ? (<SearchDetail onClick={() => setShowDetail(false)} item={selectedData} />) : null}
      <div id="body-wrap" className={classNames("body_wrapper_searc", { [className]: (searchResultFound && data.length) || loading })}>
        <div className="card-container height-100">
          {loading ? (
            <div className="search-result-loader" >
              <RedLoader />
            </div>
          ) : !data.length ? (
            <NoSearchTestimonials searchText={searchText} searchResultFound={searchResultFound} />
          ) : (
            <>
              {data?.map((item, index) => {
                return (
                  <>
                    <div className="search_body_container search-testimonials" key={index}>
                      <ProfileTestimonalCard overlayColor={getRandomColor(gradientSolidColors)} className="testimonal_card_text"
                        containerClass={"container_search_text"} userCode={userCode} item={item} index={index} length={data?.length}
                        onClick={() => {
                          setSelectedData(item);
                          setShowDetail(true);
                        }}
                      />   </div> </>)
              })}   </>)}    </div>
        {paginationLoader ? <RedLoader /> : null}
      </div>
    </InfiniteScroll>
  );
}

export default SearchScroll;
