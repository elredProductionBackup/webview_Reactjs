import React, { useEffect, useState } from "react";
import testimonialquote from '../../../assets/images/fa6-solid_quote-left_2x.png'
import "./wrapper.scss";
import moment from "moment";
import { getRandomColor, gradientSolidColors } from "../../../globalFunctions";
import classNames from "classnames";
import CardBody from "./CardBody";

function ProfileTestimonalCard({
  index,
  item,
  showDesign,
  className,
  containerClass,
  isProfileCard,
  onClick,
}) {
  const date = new Date(item?.createdTime);
  const [overlayColor, setOverLayColor] = useState("");

  useEffect(() => {
      setOverLayColor(getRandomColor(gradientSolidColors));
  }, [])

  return (
    <div
      onClick={onClick}
      className="card-main-container mb-0"
      style={{ marginBottom: 0}}
    >
      <div
        style={{
          backgroundImage: `linear-gradient( rgba(0,0,0,0.5), ${
            item?.overlayColor ?? overlayColor?.[1]
          }),url(${item?.dpURL}`,
        }}
        loading="lazy"
        className={classNames("wrapper-container card_position", {
          [containerClass]: containerClass,
        })}
      >
        <div className="card-body-1" style={{ bottom: 0 }}>
          <div className="quote-container d-flex justify-content-between align-items-center button">
            <img src={testimonialquote} alt="" className="quote_profile" />
            <div className="date-container d-flex align-items-center">
              <div className="date_test">
                {moment(date).format("ddd, DD MMM YYYY")}
              </div>
            </div>
          </div>
          <CardBody  isProfileCard={isProfileCard} item={item} className={className} showDesign={showDesign}/>
        </div>
      </div>
    </div>
  );
}
export default ProfileTestimonalCard;
