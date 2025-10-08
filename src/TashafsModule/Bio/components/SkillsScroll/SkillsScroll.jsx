import React, { useEffect, useState } from "react";
import InnerskillScroll from "./InnerskillScroll";
import { mouseDrag,stopMouseDrag,movementMouse } from "./ScrollFunction";

const SkillsScroll = ({ data, heading, loader, noDataMsg, shimmerWidth,id }) => {
  
  const [slider, setslider] = useState([])
  const [mouseDown, setMouseDown] = useState(false)
  const [startX, setStartX] = useState('')
  const [scrollLeft, setscrollLeft] = useState('')

  useEffect(() => {

    const slidertemp = document.querySelectorAll(`#${id}`);
    setslider(slidertemp)
  }, [data])

  let MoveEventprops={mouseDown,startX,scrollLeft,setscrollLeft,setMouseDown,setStartX}
  let innerscrollProps = { loader, shimmerWidth, heading, data, noDataMsg,handleDragStart:mouseDrag,handleDragEnd:stopMouseDrag,handleDrag:movementMouse,MoveEventprops,slider,id }

  return (
    <>
      <InnerskillScroll {...innerscrollProps} />
    </>
  );
};

export default SkillsScroll;
