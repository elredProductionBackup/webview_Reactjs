import React, { useState } from "react";
import Button from "../component/button";
import "./index.scss";
import clock from "../../../assets/images/events/time.png";
import time from "../../../assets/images/events/date.png";
import share from "../../../assets/images/events/share.png";
import download from "../../../assets/images/events/download.png";
import { useNavigate } from "react-router-dom";
import NoStatusCard from "../component/card/NoStatusCard";

function Invite() {
  const navigate = useNavigate();

  const [selectedStatus, setSelectedStatus] = useState(false);
  return (
    <div className="main_cont">
      <div className="d-flex justify-content-end header_cont">
        <div className="d-flex align-items-center download_btn_cont">
          <img src={download} alt="" className="download_icon" />
          <p className="download_text mb-0">Download el RED</p>
        </div>
        <img src={share} className="share_icon" alt="" />
      </div>

      <div className="bottom_container">
        <div style={{ position: "relative" }}>
          <p className="event_title ">Future Forward Season 3 Episode 1</p>
          <div className="d-flex align-items-center chi_cont">
            <img className="img_clock" src={clock} alt="" />
            <p className="event_time mb-0">Fri 11 Aug 2023 - Sat 12 Aug 2023</p>
          </div>
          <div className="d-flex align-items-center chi_cont">
            <img className="img_clock" src={time} alt="" />
            <p className="event_time mb-0">6:00 PM</p>
          </div>

          {selectedStatus ? (
            <NoStatusCard
              onClick={() => {
                setSelectedStatus(false);
              }}
            />
          ) : null}
          <div className="d-flex justify-content-between pt-3">
            <Button title="Maybe" />
            <Button
              onClick={() => {
                setSelectedStatus(true);
              }}
              title="No"
              className="btn_no"
            />
            <Button
              title="Yes"
              className="btn_yes"
              onClick={() => {
                navigate("/testEvent/details");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invite;
