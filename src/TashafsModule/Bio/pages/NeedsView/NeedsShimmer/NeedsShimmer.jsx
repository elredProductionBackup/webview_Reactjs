import React from "react";
import "./needsshimmer.scss";
import Skeleton from "react-loading-skeleton";

export const NeedsShimmer = () => {
  const baseColor = "#242939"
  return (
    <div className="leads_shimmer">
      <Skeleton
        height={11}
        width={78}
        baseColor={baseColor}
        borderRadius={40}
      />
      <Skeleton
        height={11}
        width={129}
        baseColor={baseColor}
        borderRadius={40}
        style={{marginTop:40}}
      />
      <Skeleton
        height={11}
        width={129}
        baseColor={baseColor}
        borderRadius={40}
      />
      <div
        style={{
          display: "flex",
          gap: "6px",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        {/* <Skeleton
          height={23}
          width={42}
          borderRadius={40}
          baseColor={"#D6DAE5"}
        />
        <Skeleton
          height={23}
          width={42}
          borderRadius={40}
          baseColor={"#D6DAE5"}
        /> */}
      </div>
      <div
        style={{
          display: "flex",
          gap: "6px",
          justifyContent: "center",
          marginTop: "5px",
        }}
      >
        {/* <Skeleton
          height={23}
          width={42}
          borderRadius={40}
          baseColor={"#D6DAE5"}
        />
        <Skeleton
          height={23}
          width={42}
          borderRadius={40}
          baseColor={"#D6DAE5"}
        />
        <Skeleton
          height={23}
          width={42}
          borderRadius={40}
          baseColor={"#D6DAE5"}
        /> */}
      </div>
    </div>
  );
};

const ShimmerNeeds = () => {
  return (
      <div className="shimmer_leads">
        <div className="first_row">
          <NeedsShimmer />
          <NeedsShimmer />
          <NeedsShimmer />
        </div>
        <div className="second_row">
          <NeedsShimmer />
          <NeedsShimmer />
          <NeedsShimmer />
        </div>
    </div>
  );
};

export default ShimmerNeeds;
