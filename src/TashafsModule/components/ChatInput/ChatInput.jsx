import React, { useContext, useState,lazy } from "react";
import { closeIcon, emoji, send, sendDisable, onKeyDownHandler, sendMessageFromInput,useNavigate,
  isMobile, OwnNeedError, EmojiPopup, openEmojiAtPosition, setCurrentPosval} from './ImportsChatInput'
import { GlobalData } from "../../../App";
import InputEmojiComp from "./InputEmojiComp/InputEmojiComp";
import ChatInputOverlay from "./ChatInputOverlay/ChatInputOverlay";
const SessionExpired = lazy(() => import("../../Profile/components/Needs/NeedsCard/SessionExpired/SessionExpired"));

const ChatInput = ({ value, onChange, accessEmpty, sendOverlay, data, needId, sendMessageProps, 
  inputHandlerChatProps, userCode, setName, name, inputRef, openEmoji, setopenEmoji }) => {
  const [session, setSession] = useState(false);
  const [ownNeed, setOwnNeed] = useState(false);
  const [invalidMappingId, setInvalidMappingId] = useState(false);
  const [resetSession, setResetSession] = useState(false);
  const errorMsg = "Seems like you are not logged in. Please Retry";
  const errorMappingIdMsg = "Invalid Mapping Id";
  const navigate = useNavigate();
  const { formData, setFormData } = useContext(GlobalData)
  const [currentPosition, setCurrentPosition] = useState(0)
  const [sendLoader, setSendLoader] = useState(true)
  const [smileyLoader, setSmileyLoader] = useState(true)

  const sendMessageFromInputProps={accessEmpty, data, navigate, value, needId, sendMessageProps, userCode,setName,setSession,setOwnNeed,name,setInvalidMappingId}
  const inputEmojiCompProps = {openEmoji, isMobile, smileyLoader, emoji, openEmojiAtPosition, setopenEmoji, setCurrentPosition, setSmileyLoader,
    closeIcon, onKeyDownHandler, sendMessageFromInputProps, value, inputRef, inputHandlerChatProps, sendOverlay, setCurrentPosval, onChange }
  const chatInputOverlayProps = {sendOverlay, value, sendLoader, sendDisable, setSendLoader, sendMessageFromInput, sendMessageFromInputProps, send}

  return (
    <>
      {openEmoji && <EmojiPopup inputRef={inputRef} currentPosition={currentPosition} formData={formData} setFormData={setFormData}  
      inputHandlerChatProps={inputHandlerChatProps} setopenEmoji={setopenEmoji} idModule={"needs-text"} setCurrentPosition={setCurrentPosition}/>}
      <div className={`input_wrapper ${sendOverlay ? "z-index_set" : ""}`}>
        <div className={`input_comp`}>
          <InputEmojiComp {...inputEmojiCompProps}/>
          <ChatInputOverlay {...chatInputOverlayProps}/>
        </div>
        <div className="word_count">{value?.length}/500</div>
        {session && (
          <SessionExpired
            resetSession={resetSession}
            setResetSession={setResetSession}
            errorMsg={errorMsg}
          />
        )}
        {ownNeed && <OwnNeedError />}
        {invalidMappingId && <SessionExpired errorMsg={errorMappingIdMsg} home={true}/>}
      </div>
    </>


  );
};

export default ChatInput;
