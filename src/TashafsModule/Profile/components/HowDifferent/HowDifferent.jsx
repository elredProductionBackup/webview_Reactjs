import React, { useState } from "react";
import "./howdifferent.scss";
import next from "../../../../assets/images/next.svg";
import { useNavigate } from "react-router-dom";
import { navigateToPath } from "../../../../globalFunctions";
import { Spinner } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";

const HowDifferent = ({ rgba, userCode, icon }) => {
  const navigate = useNavigate();
  const [backLoader, setbackLoader] = useState(true)
  const [imgLoading, setImgLoading] = useState(true)
  return (
    <div className="how-different" style={{ background: `${rgba}` }}
      onClick={() => navigateToPath(navigate, userCode, '/my-super-skills')}>
      <div style={{ height: '68px', marginTop: '-10px' }} className={imgLoading ? 'showing-img-loader' : 'hiding-img-loader'}>
        <Skeleton
          circle
          height={68}
          width={68}
          baseColor={`${rgba}`}
          style={{ height: '68px !important' }}
        />
      </div>
      <img src={icon} alt="" className={imgLoading ? "hiding-img-loader" : "m-f-icon showing-img-loader"} onLoad={() => setImgLoading(false)} />
      <div className="description">
        <div className="title">My Super Power</div>
        <div className="desc">4 traits</div>
      </div>
      <div className="next-button">
        <Spinner animation="border" variant="light" size="sm" className={backLoader ? 'show-img-loader !' : 'hide-img-loader'} />

        <img src={next} alt="" className={!backLoader ? 'show-image-after-loader' : 'hide-img-loader'} onLoad={() => setbackLoader(false)} />

      </div>
    </div>
  );
};

export default HowDifferent;
