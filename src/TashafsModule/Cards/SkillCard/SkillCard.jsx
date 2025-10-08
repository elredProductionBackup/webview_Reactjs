import React, { useEffect, useState } from "react";
import "./skillcard.scss";
import pattern from "../../../assets/images/redframe.png";
import ReactLinkifyComp from "../../Profile/components/ReactLinkifyComp/ReactLinkifyComp";
import Skeleton from "react-loading-skeleton";
import { capitalNames, capitalizeText } from "../../../globalFunctions";

const SkillCard = ({ title, data, skills, superSkills, capitalise }) => {
  const skillValues = skills ? data?.map((skill) => capitalise ? skill?.value?.length <= 3 ? skill?.value?.toUpperCase() 
    : capitalNames(skill?.value) : skill?.value) : "";
  const displaySkills = skills ? skillValues?.join(" | ") : "";
  const [bgLoading, setBgLoading] = useState(true);

  useEffect(() => {
    const img = new Image()
    img.src = pattern
    img.onload = () => setBgLoading(false)
  }, [])

  return (
    <div className={bgLoading ? "skillcard skeleton-shift-top" : "skillcard"}>
      {bgLoading ? <Skeleton height={110} baseColor="#242939" highlightColor ="#1e212b" className="heading-shimmer" /> : 
        <div className="heading" style={{ backgroundImage: `url(${pattern})` }}>
          {title}
        </div>
      }
      <div className="description">
        {data?.length == 0 ? (
          <div className="no-answer-added">No answer added</div>
        ) : skills ? (
          capitalizeText(displaySkills)
        ) : (
          superSkills && (
            <div className="text-description">
              <ReactLinkifyComp
                data={data.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && <br />}
                    {line}
                  </React.Fragment>
                ))}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default SkillCard;
