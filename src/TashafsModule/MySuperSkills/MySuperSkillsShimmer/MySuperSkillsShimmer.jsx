import React, { useState } from "react";
import back from "../../../assets/images/back_light.svg";
import placeholder from "../../../assets/images/placeholder_img.png";
import Skeleton from "react-loading-skeleton";
import { Spinner } from "react-bootstrap";
import MySuperKillsHeader from "../MySuperKillsHeader";

const MySuperSkillsShimmer = ({ color, highlightColor }) => {
  return (
    <div>
      <div className="mysuperskills">
         <MySuperKillsHeader back={back} />
        <div className="display-screen-shimmer" style={{ marginTop: '10px' }}>
          <img src={placeholder} alt="" />
          <Skeleton baseColor={color} highlightColor={highlightColor} height={10} width={290} />
          <Skeleton baseColor={color} highlightColor={highlightColor} height={10} width={100} style={{ marginTop: '35px' }} />
          <Skeleton baseColor={color} highlightColor={highlightColor} height={10} width={260} style={{ marginTop: '50px' }} />
          <Skeleton baseColor={color} highlightColor={highlightColor} height={10} width={260} style={{ marginTop: '25px' }} />
          <Skeleton baseColor={color} highlightColor={highlightColor} height={10} width={220} style={{ marginTop: '25px' }} />
          <Skeleton baseColor={color} highlightColor={highlightColor} height={10} width={220} style={{ marginTop: '25px' }} />
          <Skeleton baseColor={color} highlightColor={highlightColor} height={10} width={260} style={{ marginTop: '25px' }} />

        </div>
        <div className="bottom-thumbnails">
          <div className={"thumbnail-div-shimmer custom"}>
            <img src={placeholder} alt="" />
          </div>
          <div className={"thumbnail-div-shimmer"}>
            <img src={placeholder} alt="" />
          </div>
          <div className={"thumbnail-div-shimmer"}>
            <img src={placeholder} alt="" />
          </div>
          <div className={"thumbnail-div-shimmer"}>
            <img src={placeholder} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySuperSkillsShimmer;
