import React from "react";
import Skeleton from "react-loading-skeleton";
import "./index.scss";
import classNames from "classnames";
import { convertToRgbColor } from "../../../globalFunctions";

function CommentsShimmer({ color , className, profile = false, baseColor, highlightColor }) {
  const arr = profile ? [1, 2, 3] : [1, 2, 3, 4, 5, 6,7,8];

  let finalColor = convertToRgbColor(baseColor);
  const rgba = `rgba(${finalColor?.[0]},${finalColor?.[1]},${finalColor?.[2]},50%)`;


  return (
    <div className={classNames({ [className]: className,"comments-container":!profile })}>
      {arr.map((num) => (
        <div
          key={num}
          className={"px-3 pb-4  pt-1 profile-shimmer-comments"}
          style={{ backgroundColor: rgba, borderRadius: "10px", margin: "0 0 8px 0" }}
        >
          <div className="circle-name mt-1">
            <div className="icon">
              <Skeleton circle height={50} width={50} baseColor={color} highlightColor={highlightColor} />
            </div>
            <div className="location">
              <Skeleton height={8} baseColor={color} highlightColor={highlightColor} />
              <Skeleton height={8} baseColor={color} highlightColor={highlightColor} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommentsShimmer;
