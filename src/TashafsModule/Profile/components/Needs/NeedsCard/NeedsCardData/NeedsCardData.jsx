import React, { useState,useRef, useContext,lazy } from "react";
import NeedsCardFixedTop from "./NeedsCardFixedTop/NeedsCardFixedTop";
import NeedsCardChatSection from "./NeedsCardChatSection/NeedsCardChatSection";
import NeedsCardInputSection from "./NeedsCardInputSection/NeedsCardInputSection";
import { AadharPopupContext } from "../../../AadhaarVerifiedPopup/AadharPopupContext";
const AadhaarVerifiedPopup = lazy(() => import("../../../AadhaarVerifiedPopup/AadhaarVerifiedPopup"));

const NeedsCardData = ({
    needData, setChatLoader, hasMore, debounceAllCall, debounceProps, chatAreaRef, chatLoader, allChats, zChat, 
    user, deleteMessageProps, setOverLay, selectedChat, deleting, overlay, openEmoji, inputHandlerChat, 
    inputHandlerChatProps, accessEmpty, needId, sendMessageProps, sendOverlay, setopenEmoji, chatMsg, 
    formData,allChatWithDate,setAllChatsWithDate,userCode,inputRef,setFormData,
}) => {
const { showVerifiedPopup, setShowVerifiedPopup } = useContext(AadharPopupContext);
const [name, setName] = useState({
  firstname:"",
  lastname:""
})

const needsCardChatSectionProps = {
    setChatLoader, hasMore, debounceAllCall, debounceProps, chatAreaRef, chatLoader, allChats, zChat, 
    user, deleteMessageProps, setOverLay, selectedChat, deleting, overlay, sendMessageProps,allChatWithDate,
    setAllChatsWithDate, name,  inputRef,formData, setFormData,openEmoji,setopenEmoji, attachments: needData?.needDetails?.attachments
}

const needsCardInputSectionProps = {
  openEmoji, inputHandlerChat, inputHandlerChatProps, chatMsg, accessEmpty, needData, needId, sendMessageProps, sendOverlay, 
  setopenEmoji, formData,allChatWithDate,setAllChatsWithDate,userCode,inputRef
}
  return (
    <>
    <div className="needsCard">
      <NeedsCardFixedTop needData={needData} setShowVerifiedPopup={setShowVerifiedPopup} />
      <NeedsCardChatSection {...needsCardChatSectionProps}/>
      <NeedsCardInputSection {...needsCardInputSectionProps} setName={setName} name={name} />
    </div>
    <AadhaarVerifiedPopup showVerifiedPopup={showVerifiedPopup} setShowVerifiedPopup={setShowVerifiedPopup} />
    </>
  );
};

export default NeedsCardData;
