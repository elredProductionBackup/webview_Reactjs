import {sent, deleteReply, deletedIcon, moment, deleteLeadsMessage, SendChatMsgOverlays,  useRef, useState,
    capitalNames, handleEnable,Spinner} from './ImportsSendChatMsg';
import {closePopup, deleteMessage, scrollMsgToBottom} from "../../Profile/components/Needs/needsGlobalFunctions";
import SendChatMsgData from './SendChatMsgData/SendChatMsgData';
import { lazy } from 'react';
const SessionExpired = lazy(() => import("../../Profile/components/Needs/NeedsCard/SessionExpired/SessionExpired"));
const DeleteConfirmationPopup =  lazy(() => import("../DeleteConfirmationPopup/DeleteConfirmationPopup"));

const SendChatMsg = ({ msg, date, isDeleted, respId, selectedChat, id, deleting, deleteMessageProps, topOverlay, setTopOverLay,
    scrollContainerHeight, chatLoader, sendMessageProps, setShowscrollDate, firstname, lastname, name,zChat }) => {
    const [overlay, setOverLay] = useState(false)
    const [enable, setEnable] = useState(false)
    const [session, setSession] = useState(false)
    const [resetSession, setResetSession] = useState(false)
    const [loader, setLoader] = useState(true)
    const errorMsg = 'Seems like you are not logged in. Please Retry'
    const deleteRef = useRef(null)
    const deleteMessageFinalProps = { deleteMessageProps, sendMessageProps, setOverLay, setSession, setEnable,selectedChat }
    const [deletePopup, setDeletePopup] = useState(false)

    const sendChatMsgOverlayProps = { deleting, overlay, closePopup, setOverLay, setEnable, topOverlay, setTopOverLay,selectedChat }
    const deleteMessageFunction = deleteMessageProps?.leadId ? deleteLeadsMessage : deleteMessage;

    const username = firstname ? (firstname?.concat(" " + lastname)?.length <= 20 ? firstname?.concat(" " + lastname)
        : (firstname?.concat(" " + lastname)?.slice(0, 20) + '...')) : undefined
    const userName = name?.firstname?.concat(" " + name?.lastname)?.length <= 20 ? name?.firstname?.concat(" " + name?.lastname) :
        (name?.firstname?.concat(" " + name?.lastname)?.slice(0, 20) + '...')

    const sendMsgClass = !isDeleted ? 'cursorTrue' : '';

    const sendChatMsgDataProps = {overlay, sendMsgClass, isDeleted, chatLoader, scrollContainerHeight, scrollMsgToBottom, deleteRef, handleEnable,
        id, setEnable, enable, setOverLay, selectedChat, setTopOverLay, zChat, setLoader, topOverlay, setShowscrollDate,
        deletedIcon, userName, capitalNames, username, msg, moment, date, sent, setDeletePopup, deleteReply, loader
    }

    return (
        <>
            <div className='chat_name'>{firstname ? firstname?.[0] : name?.firstname?.[0]}</div>
            <div className="msg-delete-div">
                <SendChatMsgData {...sendChatMsgDataProps}/>
            </div>
            <SendChatMsgOverlays {...sendChatMsgOverlayProps} />
            {session && <SessionExpired resetSession={resetSession} setResetSession={setResetSession} errorMsg={errorMsg} />}
            <DeleteConfirmationPopup deletePopup={deletePopup} setDeletePopup={setDeletePopup} deleteMessageFunction={deleteMessageFunction} 
            deleteMessageFinalProps={deleteMessageFinalProps} respId={respId} setTopOverLay={setTopOverLay} deleteCancelProps={sendChatMsgOverlayProps}
            />
        </>
    )
}

export default SendChatMsg