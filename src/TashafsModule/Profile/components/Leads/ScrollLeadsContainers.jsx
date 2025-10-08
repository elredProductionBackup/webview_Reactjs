import React, { useEffect,  useState } from 'react'
import { mouseDrag,movementMouse, stopMouseDrag } from '../../../Bio/components/SkillsScroll/ScrollFunction'
import LeadsCards from "./components/LeadsCards/LeadsCards";
const ScrollLeadsContainers = ({leadsData,userCode,isLive,productionUrl,setFormData,baseColor}) => {


    const [slider, setslider] = useState([])
    const [mouseDown, setMouseDown] = useState(false)
    const [startX, setStartX] = useState('')
    const [scrollLeft, setscrollLeft] = useState('')
  
    useEffect(() => {
      const slidertemp = document.querySelectorAll('.leads-cards');
      setslider(slidertemp)
    }, [leadsData])
    let MoveEventprops={mouseDown,startX,scrollLeft,setscrollLeft,setMouseDown,setStartX}


  return (
    <>
      <LeadsCards
        leadsData={leadsData}
        userCode={userCode}
        isLive={isLive}
        productionUrl={productionUrl}
        setFormData={setFormData}
        slider={slider}
        MoveEventprops={MoveEventprops}
        handleDragStart={mouseDrag}
        handleDragEnd={stopMouseDrag}
        handleDrag={movementMouse}
        baseColor={baseColor}
      />
      
    </>
  )



}

export default ScrollLeadsContainers







