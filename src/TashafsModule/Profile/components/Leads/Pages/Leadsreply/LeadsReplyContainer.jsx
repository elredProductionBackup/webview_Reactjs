import React, { useEffect, useState, useRef, useContext, lazy } from 'react'
import { scrollDown } from '../../LeadsGlobalFunctions'
import LeadsReplyHeader from "../../components/LeadsReplyHeader/LeadsReplyHeader";
import LeadsChatContainer from "../../components/LeadsChatContainer/LeadsChatContainer";
import LeadsCard from "../Leadsreply/LeadsReplyCard/LeadsCard/LeadsCard";
import sendDisable from "../../../../../../assets/images/greySend.svg";
import LeadsChatInputContainer from './LeadsReplyCard/LeadsChatInputContainer/LeadsChatInputContainer'
import { inputHandlerChat } from '../../LeadsGlobalFunctions'
import toast from "react-simple-toasts";
import { AadharPopupContext } from '../../../AadhaarVerifiedPopup/AadharPopupContext';
import { isIOS, isMacOs } from 'react-device-detect';
const AadhaarVerifiedPopup = lazy(() => import("../../../AadhaarVerifiedPopup/AadhaarVerifiedPopup"));


function LeadsReplyContainer({ chatMsg, setChatMsg, accessEmpty, sendMessage, sendOverlay, setOverLay, overlay, setSendOverlay, chatAdded, setChatAdded, chatAreaRef, setChatLoading, isChatLoading,
    deleting, setDeleting, setZChat, leadsData, userCode, isLive, productionUrl, leadId, allChats, formData, setFormData, allChatWithDate,
    loading, toaster, setToaster, openEmoji, user, setAllChats, setopenEmoji, hasMore, selectedChat, zChat, debounceProps, accessToken, setAllChatsWithDate, setLeadsSessionExpired,
    setErrorMsg, setApiFail, leadsMappingId, setLeadsMappingId, setReset }) {
    const { showVerifiedPopup, setShowVerifiedPopup } = useContext(AadharPopupContext);

    const [name, setName] = useState({
        firstname: "",
        lastname: ""
    })
    const inputRef = useRef(null);
    const chatInputProps = {
        chatMsg, setChatMsg, leadId, openEmoji, user, setSendOverlay, isLive, productionUrl, setopenEmoji, chatAdded, setChatAdded, formData, setFormData,
        accessEmpty, sendMessage, sendOverlay, data: leadsData, sendDisable, toaster, setToaster, allChats, setAllChats, chatAreaRef, accessToken, userCode,
        setAllChatsWithDate, setApiFail, setErrorMsg, setLeadsSessionExpired, leadsMappingId, setLeadsMappingId, setName, name, inputRef, setReset
    };
    const inputHandlerChatProps = { setChatMsg, toaster, toast, setToaster, formData, setFormData, userCode, inputRef, setopenEmoji, openEmoji };

    const deleteMessageProps = {
        setDeleting, isLive, productionUrl, leadsData, leadId, accessToken, toaster, setToaster,
        allChats, setZChat, setAllChats, userCode, toast, setAllChatsWithDate, setLeadsSessionExpired,
        setErrorMsg, setApiFail, leadsMappingId, setLeadsMappingId, inputRef
    };
    const chatContainerProps = {

        allChats, overlay, user, setOverLay, sendOverlay, setChatLoader: setChatLoading, deleteMessageProps, deleting,
        chatAreaRef, hasMore, debounceProps, selectedChat, zChat, isChatLoading, allChatWithDate, setAllChatsWithDate, setLeadsSessionExpired,
        setErrorMsg, setApiFail, name, openEmoji, setopenEmoji, formData, setFormData, inputRef, inputHandlerChatProps, onChange: inputHandlerChat,
    }
    useEffect(() => {
        scrollDown(chatAreaRef);
    }, [chatAdded, loading]);//eslint-disable-line

    return (
        <>
            <div className="leads-reply-container">
                <LeadsReplyHeader userCode={userCode} isLive={isLive} productionUrl={productionUrl} leadId={leadId}
                    downloadUrl={isIOS || isMacOs ? leadsData?.leadDetails?.downloadURL?.appstoreURL : leadsData?.leadDetails?.downloadURL?.playstoreURL} setFormData={setFormData} />
                <LeadsCard data={leadsData?.leadDetails} setShowVerifiedPopup={setShowVerifiedPopup} />
                <LeadsChatContainer {...chatContainerProps} />
                <LeadsChatInputContainer {...chatInputProps} />
            </div>
            <AadhaarVerifiedPopup showVerifiedPopup={showVerifiedPopup} setShowVerifiedPopup={setShowVerifiedPopup} />
        </>
    )
}

export default LeadsReplyContainer
