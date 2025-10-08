import React from "react";
import ChatInput from "../../../../../../components/ChatInput/ChatInput";
const NeedsCardInputSection = ({ openEmoji, inputHandlerChat, inputHandlerChatProps, accessEmpty, 
  needData, needId, sendMessageProps, sendOverlay, setopenEmoji, formData,userCode, setName, name,inputRef
}) => {
  return (
    <>
      <ChatInput
        value={formData?.message}
        onChange={inputHandlerChat}
        inputHandlerChatProps={inputHandlerChatProps}
        accessEmpty={accessEmpty}
        needId={needId}
        sendMessageProps={sendMessageProps}
        sendOverlay={sendOverlay}
        data={needData}
        setopenEmoji={setopenEmoji}
        openEmoji={openEmoji}
        userCode={userCode}
        setName={setName}
        name={name}
        inputRef={inputRef}
      />
      {sendOverlay ? <div className="send_overlay"></div> : null}
    </>
  );
};

export default NeedsCardInputSection;
