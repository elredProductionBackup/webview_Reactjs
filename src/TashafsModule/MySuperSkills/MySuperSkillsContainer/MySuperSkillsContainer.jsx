import React, { useEffect, useRef, useState } from "react";
import { Spinner } from "react-bootstrap";
import { parseParagraphLead } from "../../../globalFunctions";
import ReactLinkify from "react-linkify";
import ReactLinkifyComp from "../../Profile/components/ReactLinkifyComp/ReactLinkifyComp";
import MySuperKillsHeader from "../MySuperKillsHeader";
import back from '../../../assets/images/back_light.svg'
import css from '../../../App.scss'

const MySuperSkillsContainer = ({ navigate, bg, question, answer, data, selected, setActive, activeImageId }) => {
  const [backLoader, setbackLoader] = useState(true);
  const [imageLoadingStates, setImageLoadingStates] = useState({ 0: true, 1: true, 2: true, 3: true });
  const divRef = useRef(null)

  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollTop = 0; 
    }
  }, [selected])

  useEffect(() => {
    data.map((item, targetIndex) => {
      const img = new Image();
      img.onload = () => {
        setImageLoadingStates((prevLoadingStates) => ({
          ...prevLoadingStates,
          [targetIndex]: false,
        }));
      };
      return img.src = item?.bgImageURL
    })
  }, [])

  return (
    <div className="mysuperskills" key={selected}>
      <MySuperKillsHeader back={back} navigate={navigate}/>
      <div className="display-screen"
        style={{
          backgroundColor: `${css.theme_shimmer}`,
          backgroundImage: imageLoadingStates[activeImageId] ? ""
            : `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(${bg})`
        }}>
        <div className="question">{question}</div>
        {answer ? !imageLoadingStates[activeImageId] && <div className="answer" ref={divRef}>
          <ReactLinkifyComp data={answer} />
        </div> : !imageLoadingStates[activeImageId] && <div className="no-super-skill-answer">No answer added yet.</div>}
        {imageLoadingStates[activeImageId] && (
          <div className="spinner-super-skills-img-loaders">
            <Spinner animation="border" variant="danger" size="md" />
          </div>
        )}
      </div>
      <div className="bottom-thumbnails">
        {data.map((item, id) => (
          <div className={selected === item?._id ? `thumbnail-div${id} custom` : `thumbnail-div${id}`}
            style={{ backgroundColor: `${css.theme_shimmer}`, backgroundImage: imageLoadingStates[id] ? "" : `url(${item?.bgImageURL})`, backgroundPosition: "center center" }}
            onClick={() => setActive(item, id)}
            key={id}
          >
            {imageLoadingStates[id] && (
              <div className="spinner-bottom-thumb-loaders">
                <Spinner animation="border" variant="danger" size="sm" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySuperSkillsContainer;
