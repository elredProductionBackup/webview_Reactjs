import React from "react";
import ShimmerNeeds from "../NeedsShimmer/NeedsShimmer";
import NeedsViewData from "./NeedsViewData";
function NeedsViewContainer({
  loading,
  data,
  fetchMoreNeeds,
  hasMore,
  navigateToNeeds,
  userCode,
  loader,
}) {

  return (
    <div className="container-leads">
      {loading ? (
        <ShimmerNeeds />
      ) : (
        <NeedsViewData
          data={data}
          fetchMoreNeeds={fetchMoreNeeds}
          hasMore={hasMore}
          navigateToNeeds={navigateToNeeds}
          userCode={userCode}
          loader={loader}
        />
      )}
    </div>
  );
}

export default NeedsViewContainer;
