import React, { useEffect, useRef, useState } from "react";
import "./testimonials.scss";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useResponse } from "../../../hooks/useResponse";
import ProfileTestimonalCard from "../../../../UmeshModule/components/card/ProfileTestimonalCard";
import TestimonalShimmer from "../../../../UmeshModule/components/shimmer/TestimonalShimmer";
import classNames from "classnames";
import { mouseDrag,movementMouse, stopMouseDrag } from '../../../Bio/components/SkillsScroll/ScrollFunction'
const Testimonials = ({ isLive, productionUrl, rgba, baseColor }) => {
  const navigate = useNavigate();
  let [searchParams] = useSearchParams();
  const userCode = searchParams.get("userCode");
  const scrollRef = useRef(null)
  const { data, loading } = useResponse(`${isLive ? productionUrl : ""}/noSessionPreviewTestimonials?userCode=${userCode}&start=1&offset=10`);
  const [slider, setslider] = useState([])
  const [mouseDown, setMouseDown] = useState(false)
  const [startX, setStartX] = useState('')
  const [scrollLeft, setscrollLeft] = useState('')

  useEffect(() => {
    const slidertemp = document.querySelectorAll('.testimonal-hor-container');
    setslider(slidertemp)
  }, [data])
  let MoveEventprops={mouseDown,startX,scrollLeft,setscrollLeft,setMouseDown,setStartX}


  return (
    <div style={{ backgroundColor: rgba }} className="testimonials">
      <div className=" d-flex justify-content-between align-items-centre">
        <p className=" mb-0">Testimonials</p>
        {loading || !data.length ? null : (
          <div className="btn-see-more testi_btn_see_more" onClick={() => navigate(`/testimonials?userCode=${userCode}`)} > See all </div>)} </div>
      {loading ? (
        <TestimonalShimmer color={rgba} showCard={false} baseColor={baseColor} />
      ) :data.length ? (
        <div ref={scrollRef} id="Testimonial-cards"   onMouseDown={(e) => mouseDrag(slider, MoveEventprops, e, loading)}
        onMouseUp={(e) => stopMouseDrag(slider, MoveEventprops, e, loading)}
        onMouseLeave={(e) => stopMouseDrag(slider, MoveEventprops, e, loading)}
        onMouseMove={(e) => movementMouse(slider, MoveEventprops, e, loading)}
        className={classNames("testimonal-hor-container", {signle_testimonal_container: data?.length === 1, })}>
        {data?.map((item, index) => {
          const isLastIndex = index !== 0 && index === data.length-1
          return (
            <div style={{paddingRight:isLastIndex?"16px":"0px"}} key={item?.testimonialId}>
              <ProfileTestimonalCard
                onClick={(e) => {
                  navigate(`/testimonials/details?userCode=${userCode}`, {
                    state: item, })
                    e.stopPropagation();
                  }}
                isProfileCard={true} item={item} index={index} /> </div>);})} </div>
      ) : (<div className="no-comment no-testimonials text-align-center"> No Testimonials Available Yet</div> )}
    </div>
  );
};
export default Testimonials;
