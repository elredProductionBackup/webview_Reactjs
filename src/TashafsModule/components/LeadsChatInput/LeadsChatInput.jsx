import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from 'react'
import {EmojiPopup,LeadsInput,isMobile,sendDisable,send,emoji,closeIcon} from './LeadsInputImports'
import { GlobalData } from "../../../App";
const LeadsChatInput = ({ value, onChange, accessEmpty, sendOverlay, data, leadId, setopenEmoji, openEmoji,
  sendMessageProps, inputHandlerChatProps, userCode, setName, name, inputRef }) => {
  const navigate = useNavigate()
  const { formData, setFormData } = useContext(GlobalData)
  const [currentPosition, setCurrentPosition] = useState(0)
  const [emojiLoader, setEmojiLoader] = useState(true)
  const [crossLoader, setcrossLoader] = useState(true)
  const [sendBlueLoader, setSendBlueLoader] = useState(true)
  const [sendLoader, setSendLoader] = useState(true)

  const leadsProps={openEmoji, isMobile,emojiLoader,emoji,setEmojiLoader,setopenEmoji,setCurrentPosition,crossLoader,closeIcon,
    setcrossLoader,accessEmpty, data, navigate, value, leadId, sendMessageProps, userCode, setName, name,formData,onChange,
    inputHandlerChatProps,sendOverlay,inputRef,sendLoader,sendDisable,send,sendBlueLoader,setSendLoader,setSendBlueLoader}
    
  return (

    <>
      {openEmoji && <EmojiPopup inputRef={inputRef} currentPosition={currentPosition} formData={formData} setFormData={setFormData} inputHandlerChatProps={inputHandlerChatProps} setCurrentPosition={setCurrentPosition}
        setopenEmoji={setopenEmoji} idModule={"leads-text"} />}
      <div className={`input_wrapper`}>

        <LeadsInput {...leadsProps} />

        <div className="word_count">{value.length}/500</div>
      </div>
    </>


  );
};

export default LeadsChatInput;
