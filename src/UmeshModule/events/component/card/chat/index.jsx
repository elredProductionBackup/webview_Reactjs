import React from "react";
import user from "../../../../../assets/images/events/user.png";
import "./index.scss";
import classNames from "classnames";
import charm from "../../../../../assets/images/events/charm_tick.png";

function ChatCard({ item, className }) {
  const inco = item.type === "incoming" ? false : true;
  return (
    <div
      className={classNames("chat_main_cont d-flex", {
        chat_incoming_icon: inco,
        [className]: className,
      })}
    >
      <img
        src={item?.img}
        alt=""
        className={classNames("profile_icon", { "d-none": inco })}
      />
      <div className="d-flex flex-column chat_text_cont">
        <p className="chat_text mb-0">{item.message}</p>
        <div className=" d-flex justify-content-end align-items-center">
          <p className="mb-0 time_text">12:47 pm</p>
          {inco ? <img src={charm} alt="" className="chat_tick" /> : null}
        </div>
      </div>
    </div>
  );
}

export default ChatCard;
