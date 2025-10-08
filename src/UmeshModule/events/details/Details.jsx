import React from "react";
import Header from "../../components/header/Header";
import "./index.scss";
import facebook from "../../../assets/images/events/fb.png";
import insta from "../../../assets/images/events/insta.png";
import twitter from "../../../assets/images/events/twitter.png";
import google from "../../../assets/images/events/google.png";
import linkedin from "../../../assets/images/events/linked.png";
import TextInput from "../component/input/TextInput";
import Button from "../component/button";
import { useNavigate } from "react-router-dom";

function Details() {
  const images = [facebook, insta, twitter, google, linkedin];

  const navigate = useNavigate();
  return (
    <div className="detail_main_cont">
      <Header title="Your information" />
      <div className="detail_body">
        <p className="head_text">Fetch data from</p>
        <div className="d-flex justify-content-around social_container">
          {images.map((item, index) => {
            return (
              <img src={item} key={index} className="social_icons" alt="" />
            );
          })}
        </div>

        <TextInput label="Name" placeholder="Type here" />

        <TextInput label="Titles" placeholder="Type here" />
        <TextInput label="Phone number" placeholder="Type here" />

        <TextInput label="Email id" placeholder="Type here" />

        <TextInput
          label="Add your instagram (optional)"
          placeholder="Type here"
          img={insta}
        />

        <TextInput
          label="Add your LinkedIn (optional)"
          placeholder="Type here"
          img={twitter}
        />

        <Button
          className="btn_save"
          title="Reply"
          onClick={() => {
            navigate("/testEvent/chat");
          }}
        />
      </div>
    </div>
  );
}

export default Details;
