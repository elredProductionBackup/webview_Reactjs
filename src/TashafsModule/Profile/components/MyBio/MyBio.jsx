import React, { useState } from "react";
import "./mybio.scss";
import next from "../../../../assets/images/next.svg";
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const MyBio = ({ rgba, userCode }) => {
  const [backLoader, setbackLoader] = useState(true)
  const navigate = useNavigate();
  const navigateTo = () => {
    const time = new Date().getTime().toString().slice(-6)
    navigate(`/my-bio?userCode=${userCode}&t=${time}`)
  }
  return (
    <div
      className="mybio"
      style={{ background: `${rgba}` }}
      onClick={() => navigateTo()}
    >
      My bio
      <div className="next-button">
      <Spinner animation="border" variant="light" size="sm" className={backLoader ? 'show-img-loader !' : 'hide-img-loader'} />
        <img src={next} alt="" className={!backLoader ? 'show-image-after-loader' : 'hide-img-loader'} onLoad={() => setbackLoader(false)} />
      </div>
    </div>
  );
};

export default MyBio;
