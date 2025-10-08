import React from "react";
import emoji from "../../../../assets/images/events/emoji.png";
import send from "../../../../assets/images/events/send.png";
import "./index.scss";

function ChatInput({ searchText, placeholder, handleSearch }) {
  return (
    <div className="chat_position">
      <div className="input-group d-flex align-items-center search-container w-100">
        <img className="send_icon" alt="" src={emoji} />
        <input
          className="form-control  search-box"
          type="search"
          value={searchText}
          onChange={handleSearch}
          placeholder={placeholder}
          aria-label="Search"
        />
        <img src={send} alt="" className="send_icon" />
      </div>
    </div>
  );
}

export default ChatInput;
