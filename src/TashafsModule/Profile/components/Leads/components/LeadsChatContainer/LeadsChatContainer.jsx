import { scrollTop } from '../../LeadsGlobalFunctions'
import React, { useEffect, useRef, useState } from "react";
import RedLoader from "../../../../components/RedLoader/RedLoader";
import SendChatMsg from "../../../../../components/SendChatMsg/SendChatMsg";
import ReceivedChatMsg from "../../../../../components/ReceivedChatMsg/ReceivedChatMsg";
import { toastConfig } from "react-simple-toasts";
const LeadsChatContainer = ({ allChats, overlay, setOverLay, zChat, deleteMessageProps, selectedChat,
  user, setChatLoader, hasMore, debounceProps, chatAreaRef, deleting, isChatLoading, allChatWithDate, name,
  openEmoji, inputRef, setFormData, formData, setopenEmoji, inputHandlerChatProps, onChange }) => {
  toastConfig({ theme: "dark" });
  const [scrollContainerHeight, setScrollContainerHeight] = useState(null)
  const [scrollDate, setScrollDate] = useState('')
  const [ShowscrollDate, setShowscrollDate] = useState(false)
  useEffect(() => {
    setScrollContainerHeight(chatAreaRef?.current?.clientHeight)
  }, [allChats])

  return (
    <>
      {allChats.length > 0 && <div ref={chatAreaRef}
        className={`${overlay ? "no-scroll_chat_div_leads" : "scroll_chat_div_leads"}`}
        id="scroll_chat_div_lead"
        onScroll={(e) => scrollTop(e, isChatLoading, setChatLoader, hasMore, debounceProps, setScrollDate, setShowscrollDate, overlay, ShowscrollDate, allChats)} >
        <div className="chat_area">
          {allChats.length > 1 && ShowscrollDate && <div className='ScrollDate'>
            <span >{scrollDate}</span>
          </div>}
          {isChatLoading && <RedLoader />}
          {Object.keys(allChatWithDate)?.reverse().map((date, index) => {
            return (
              <>
                <p className='dateHeader' id={'date'}>{date}</p>
                {allChatWithDate[date]?.slice().reverse().map((item, id) => (
                  <div className={zChat === id ? " todo todo_zindex" : "todo"} id={item.responseId}>
                    <div className={user === item?.responseOwner_userCode ? "chat_single" : "chat_single_received"}
                      key={id} ref={id === allChatWithDate[date].length - 1 ? chatAreaRef : null} >
                      {user === item?.responseOwner_userCode && (
                        <SendChatMsg
                          key={id} msg={item?.responseDescription}
                          date={item?.responseCreatedAt} isDeleted={item?.isDeleted}
                          deleteMessageProps={deleteMessageProps} respId={item?.responseId}
                          scrollContainerHeight={scrollContainerHeight} selectedChat={selectedChat} id={id}
                          deleting={deleting} topOverlay={overlay}
                          zChat={zChat}
                          setTopOverLay={setOverLay} setShowscrollDate={setShowscrollDate}
                          firstname={item?.responseOwner_firstname} lastname={item?.responseOwner_lastname} name={name}
                        />)}
                      {user !== item?.responseOwner_userCode && (
                        <ReceivedChatMsg
                          key={id}
                          msg={item?.responseDescription}
                          date={item?.responseCreatedAt}
                          isDeleted={item?.isDeleted}
                          firstname={item?.responseOwner_firstname} lastname={item?.responseOwner_lastname}
                        />)}
                    </div>
                  </div>
                ))}
              </>)
          })}
        </div>
      </div>}

    </>
  );
};
export default LeadsChatContainer;
