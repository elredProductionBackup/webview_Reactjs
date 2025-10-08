import React from "react";
import Button from "../component/button";
import { useNavigate } from "react-router-dom";
import clock from "../../../assets/images/events/time.png";
import time from "../../../assets/images/events/date.png";
import "./index.scss";
import Header from "../../components/header/Header";
import location from "../../../assets/images/events/location.png";

function Information() {
  const navigate = useNavigate();
  return (
    <div className="main_conta">
      <Header title="Info" />
      <div className="info_bottom_container">
        <p className="event_title ">Future Forward Season 3 Episode 1</p>
        <div className="d-flex align-items-center chi_cont">
          <img className="img_clock" src={clock} alt="" />
          <p className="event_time mb-0">Fri 11 Aug 2023 - Sat 12 Aug 2023</p>
        </div>
        <div className="d-flex align-items-center chi_cont">
          <img className="img_clock" src={time} alt="" />
          <p className="event_time mb-0">6:00 PM</p>
        </div>
        <div className="d-flex align-items-center chi_cont">
          <img className="img_clock" src={location} alt="" />
          <p className="event_time mb-0">Mumbai</p>
        </div>
        <div>
          <p className="desc_text">Description: </p>
          <p className="desc weight:400">
            This is the first meeting of the new YPO year 23-24 to be held at
            Mumbai. Kindly be available at St Regis at sharp 6, after which
            forum rules apply.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Information;
