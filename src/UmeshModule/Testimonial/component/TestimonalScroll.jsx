import React, { useState } from "react";
import TestimonalShimmer from "../../components/shimmer/TestimonalShimmer";
import NoTestimonal from "../../components/NoTestimonal/NoTestimonal";
import RedLoader from "../../../TashafsModule/Profile/components/RedLoader/RedLoader";
import InfiniteScroll from "react-infinite-scroll-component";
import { getRandomColor, gradientSolidColors } from "../../../globalFunctions";
import ProfileTestimonalCard from "../../components/card/ProfileTestimonalCard";
import SearchDetail from "../search/SearchDetail";

function TestimonalScroll({ data, getData, hasMore, loading, userCode }) {
  const [showDetail, setShowDetail] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  return (
    <InfiniteScroll dataLength={data?.length} next={getData} style={{ overflow: "hidden" }}  scrollableTarget="body-wrap" hasMore={hasMore}>
            {showDetail ? ( <SearchDetail  onClick={() => setShowDetail(false)} item={selectedData} /> ) : null}

      <div id="body-wrap" className="body-wrapper testim_body_wrap">
        <div className="card-container">
          {loading ? (
            <TestimonalShimmer />
          ) : data?.length && userCode ? (
            <>
            {data?.map((item, index) => {
              return (
                <div key={index}  className="search_body_container" style={{ marginBottom: "10px", marginTop: "0px" }}>
                  <ProfileTestimonalCard
                    overlayColor={getRandomColor(gradientSolidColors)}
                    userCode={userCode}
                    item={item}
                    className={"testimonal_card_text"}
                    index={index}
                    length={data?.length}
                    showDesign={true}
                    onClick={() => {
                      setSelectedData(item)
                      setShowDetail(true)
                    }}/>
                </div>)})}
          </>
          ) : (
            <NoTestimonal />
          )}
        </div>
        {hasMore ? <RedLoader /> : null}
      </div>
    </InfiniteScroll>
  );
}
export default TestimonalScroll;
