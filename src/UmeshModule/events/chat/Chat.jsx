import React, { useState } from "react";
import "./index.scss";
import ChatHeader from "../component/header/ChatHeader";
import ChatCard from "../component/card/chat";
import ChatInput from "../component/input";
import nilima from "../../../assets/images/events/chat/nilima.png";
import sanjay from "../../../assets/images/events/chat/sanjay.png";
import trista from "../../../assets/images/events/chat/trista.png";

function Chat() {
  const [searchText, setSearchText] = useState("");
  const chat = [
    "incoming",
    "incoming",
    "incoming",
    4,
    5,
    "incoming",
    "incoming",
    4,
    5,
    "incoming",
  ];

  const data = [
    {
      message: "Thank you Rajesh! Super agenda and format",
      type: "incoming",
      img: trista,
    },
    {
      message: "Thanks Rajesh. Love the new format.",
      type: "incoming",
      img: nilima,
    },
    {
      message: "Friends I hope ur hotel room at Bombay is sorted",
      type: "outgoing",
    },
    {
      message: "Hope everyone would come its gonna be amazing",
      type: "outgoing",
    },
    {
      message: "Great agenda Rajesh babu! Super excited.",
      type: "incoming",
      img: sanjay,
    },
    {
      message:
        "Saurabh and Sanjay. Looks like we are going to have some really good wine on your behalf 😉",
      type: "incoming",
      img: nilima,
    },
    {
      message:
        "Oh, you bet, buddy! Just you wait until you try this vintage I picked up from Bordeaux. It's a game-changer.",
      type: "outgoing",
    },
    {
      message:
        "We don't mean to brag, but we do have a knack for finding the best wines. You're in for a treat tonight. 😉",
      type: "incoming",
      img: nilima,
    },
  ];

  return (
    <div className="chat_cont">
      <ChatHeader title="Future Forward Season 1 Epi..." />
      <div className="body_cont">
        <div className="scroll_div">
          <p className="time_div">today</p>
          {data.map((item, index) => {
            return (
              <ChatCard
                item={item}
                className={data.length - 1 === index ? "last_chat" : ""}
                key={index}
              />
            );
          })}
        </div>

        <ChatInput
          placeholder="Type here..."
          searchText={searchText}
          handleSearch={(e) => {
            setSearchText(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default Chat;
