import React, { useState } from "react";
import { formatCommentTimestamp, shareURL, capitalizeNameString } from "../../../globalFunctions";
import { Link } from "react-router-dom";
import bluetick from "../../../assets/images/blue_tick.svg"
import classNames from "classnames";
import defaultDpURL from '../../../assets/images/defaultDp.png'
import SingleCommentText from "./SingleCommentText";
import Skeleton from "react-loading-skeleton";
function ReplyCommentCard({ item, onCommentsClick, className, color, setShowVerifiedPopup, isProfile }) {
  const commentBy = `${item?.repliedBy?.firstname ?? ""} ${item?.repliedBy?.lastname}`;
  const timeStamp = formatCommentTimestamp(item?.createdTime);
  const [showShimmer, setShowShimmer] = useState(true)
  return (
    <div className="comments-card-wrapper replies-container d-flex ">
      <div className="img-cont">
        <div className={showShimmer ? 'd-block addpadding-shimmer' : "d-none "}>
          <Skeleton
            width={43}
            height={43}
            borderRadius={50}
            baseColor="#242939"
            highlightColor="#1e212b"
          />
        </div>
        <Link to={`${shareURL}/?userCode=${item?.repliedBy?.userCode}`}
          onClick={(e) => {
            e.stopPropagation();
          }} target="_blank" className="button"
        >
          <img src={item?.repliedBy?.dpURL || defaultDpURL} alt="user"
            onLoad={() => setShowShimmer(false)}
            className={!showShimmer ? 'show-image-after-loader NoDPURL bg-image-no' : "hiding-img-loader "}
          />
        </Link>
      </div>
      <div className={"text-wrapper "}
        onClick={(e) => {
          e.stopPropagation();
          if (onCommentsClick) {
            onCommentsClick();
          }
        }}
      >
        <div className={className ? `comment-text ${className} ` : "comment-text "} style={{ color: color }}>
          <div className="d-flex"><p className={"username mb-0"} > {capitalizeNameString(commentBy)} </p>
            {item?.repliedBy.aadhaarVerifiedStatus && <div onClick={(e) => { e.stopPropagation(); setShowVerifiedPopup(true) }} className="btick">
              <img src={bluetick} alt="" />
            </div>}</div>
          <SingleCommentText item={item?.reply} color={color} className={className} isProfile={isProfile} />
        </div>
        <div className="d-flex pt-1">
          <span className="text-date" style={{ color: color, marginRight: "5px" }}>{timeStamp}</span>
          <div className="text-date px-2" style={{ color: color }}>{item?.likesInfo?.likesCount} likes</div>
        </div>
      </div>
    </div>
  );
}

export default ReplyCommentCard;

