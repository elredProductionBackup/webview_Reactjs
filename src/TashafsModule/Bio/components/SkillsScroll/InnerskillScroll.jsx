import React from 'react'
import SkillsShimmer from './SkillsShimmer'
import NoDataText from "../NoDataText/NoDataText";
import { capitalNames, capitalizeText } from '../../../../globalFunctions';
const InnerskillScroll = ({ loader, shimmerWidth, heading, data, noDataMsg, handleDragStart, handleDragEnd, handleDrag, MoveEventprops, slider,id }) => {

  return (
    <>
      {loader ? (
        <>
          <SkillsShimmer color="#2A313F" highlightColor="#1e212b" shimmerWidth={shimmerWidth} />
          <div style={{ marginBottom: "30px" }}></div>
        </>
      ) : (
        <div className="skills-option-div">
          <div className="skills-sub-title">{heading}</div>
          <div className="all-skills" id={id}
            onMouseDown={(e) => handleDragStart(slider, MoveEventprops, e,false)}
            onMouseUp={(e) => handleDragEnd(slider, MoveEventprops, e,false)}
            onMouseLeave={(e) => handleDragEnd(slider, MoveEventprops, e,false)}
            onMouseMove={(e) => handleDrag(slider, MoveEventprops, e,false)}
          >
            {data?.length ? (
              data?.map((item, id) => (
                <div className="single-skill">
                  {capitalizeText(item?.value)}
                  {/* {item?.value?.length <= 3 ? item?.value?.toUpperCase() : capitalNames(item?.value)} */}
                </div>
              ))
            ) : (
              <div className="no-data-div">
                <NoDataText msg={noDataMsg} />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default InnerskillScroll
