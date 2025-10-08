import React, { useState } from "react";
import {capitalizeNameString, formatCommentTimestamp, onProfileClick, shareURL} from "../../../globalFunctions";
import classNames from "classnames";
import bluetick from "../../../assets/images/blue_tick.svg"
import defaultDpURL from '../../../assets/images/defaultDp.png'
import Skeleton from "react-loading-skeleton";
import SingleCommentText from "./SingleCommentText";

function CommentsHead({ item, onCommentsClick, className, color, setShowVerifiedPopup, isProfile }) {
  const [showShimmer, setShowShimmer] = useState(true)
  return (
    <div className="comments-card-wrapper d-flex">
      <div className="img-cont">
      <div className="skelleton-margin d-flex">
          <div className={showShimmer ? 'd-block addpadding-shimmer' : "d-none "}>
              <Skeleton
                width={43}
                height={43}
                borderRadius={50}
                baseColor="#242939"
                highlightColor="#1e212b"           
              />
            </div>

            <div onClick={(e) => { onProfileClick(e, shareURL, item?.commentedBy?.userCode) }} 
              className={ !showShimmer ? item?.commentedBy?.dpURL ? "button_profile d-block" : "button_default_profile d-block" : "d-none"} >
                
              <img className={classNames({ " bg-image-no": !item?.commentedBy?.dpURL})} 
              src={item?.commentedBy?.dpURL || defaultDpURL} alt="user"  
              onLoad={() => setShowShimmer(false)}
               />
            </div>
          </div>
      </div>
      <div
        className={ "text-wrapper"}
        
      >
        <div onClick={() => {
          if (onCommentsClick) {
            onCommentsClick();
          }
        }} className={classNames("comment-text", { [className]: className })} style={{ color: color }}>
          <div className="d-flex"> <p className={"username_comment mb-0"}>{`${capitalizeNameString(item?.commentedBy?.firstname) ?? ""} ${capitalizeNameString(item?.commentedBy?.lastname)}`}</p>
            {item.commentedBy?.aadhaarVerifiedStatus && <div onClick={(e) => { e.stopPropagation(); setShowVerifiedPopup(true) }} className="btick_comments d-flex" >
              <img src={bluetick} alt="" />
            </div>}</div>
          <SingleCommentText item={item?.comment} color={color} className={className} isProfile={isProfile}/>
        </div>
        <div className="d-flex pt-1">
          <span className="text-date " style={{ color: color, marginRight: "5px" }}> {formatCommentTimestamp(item?.createdTime)}
          </span>
          <div className="text-date px-2" style={{ color: color }}>{item?.likesInfo?.likesCount} likes</div>
        </div>
      </div>
    </div>
  );
}

export default CommentsHead;
