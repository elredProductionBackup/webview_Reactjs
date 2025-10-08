import React, { useState } from "react";
import { emojisData } from "./data";
import './emojipopup.scss'
import closeIcon from "../../../assets/images/x-grey.svg";
import { onEmojiClickvalue } from "../../../globalFunctions";
import { Spinner } from "react-bootstrap";

function EmojiPopup({ inputRef, formData, setopenEmoji,  inputHandlerChatProps, currentPosition, setFormData, idModule,setCurrentPosition }) {

  const [crossLoader, setcrossLoader] = useState(true)

  return (
    <div className="home">
      <div className="emojibox" >

        <div className="emojitext_close"><span className="smiley_text">
          Smileys & Emotion
        </span> 
        <Spinner animation="border" variant="secondary" size="sm" className={crossLoader ? 'show-img-loader close-img-loader' : 'hide-img-loader'} />
         <img
           className={!crossLoader ? 'show-image-after-loader close-img' : "hide-img-loader"}
           onLoad={() => setcrossLoader(false)}
            src={closeIcon}
            alt=""
            onClick={() => setopenEmoji(false)}
          /></div>
        <div className="divider"></div>
        <div className="container_div">
          {emojisData?.map((item, id) => (
            <span key={id} onClick={() => onEmojiClickvalue(formData, currentPosition, String.fromCodePoint(item?.code), setFormData, setopenEmoji, inputRef, idModule,setCurrentPosition,inputHandlerChatProps)}>
              {String.fromCodePoint(item?.code)}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}

export default EmojiPopup;
