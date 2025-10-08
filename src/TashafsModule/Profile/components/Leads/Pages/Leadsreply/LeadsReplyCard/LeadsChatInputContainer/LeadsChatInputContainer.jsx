import React from 'react'
import LeadsChatInput from "../../../../../../../components/LeadsChatInput/LeadsChatInput";
import toast, { toastConfig } from "react-simple-toasts";
import { inputHandlerChat } from '../../../../LeadsGlobalFunctions'


function LeadsChatInputContainer({
    chatMsg, setChatMsg, leadId, setopenEmoji, setChatAdded, chatAdded, user, setSendOverlay, isLive, productionUrl, accessToken,
    accessEmpty, sendOverlay, data, sendDisable, openEmoji, toaster, setToaster, allChats, setAllChats, formData, setFormData, userCode, setAllChatsWithDate,
    setLeadsSessionExpired, setErrorMsg, setApiFail,leadsMappingId,setLeadsMappingId,setName, name,inputRef,setReset
}) {
    toastConfig({ theme: "dark" });

    const inputHandlerChatProps = { setChatMsg, toaster, toast, setToaster, formData, setFormData, userCode,inputRef,setopenEmoji,openEmoji };

    const sendMessageProps = {
        chatMsg, setSendOverlay, isLive, productionUrl, leadId, openEmoji, setopenEmoji, userCode, toaster, setAllChatsWithDate,
        setToaster, toast, allChats, setAllChats, setChatMsg, setChatAdded, chatAdded, user, accessToken, formData, setFormData, setLeadsSessionExpired,
        setErrorMsg, setApiFail,leadsMappingId,setLeadsMappingId,inputRef,setReset
    };
    const chatInputProps = {
        value: formData.message, inputHandlerChatProps: inputHandlerChatProps, setopenEmoji, openEmoji,
        accessEmpty, sendMessageProps, onChange: inputHandlerChat, sendOverlay, data, sendDisable, leadId, userCode,
        setName, name,inputRef
    };

    return (
        <>
            <LeadsChatInput {...chatInputProps} />
            {sendOverlay ? <div className="send_overlay"></div> : null}
        </>
    )
}

export default LeadsChatInputContainer
