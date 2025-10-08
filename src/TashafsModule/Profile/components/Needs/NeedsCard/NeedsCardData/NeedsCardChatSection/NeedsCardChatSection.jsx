import React, { useEffect, useRef, useState } from "react";
import { scrollTop, RedLoader, SendChatMsg, ReceivedChatMsg } from './ImportsNeedsCardChatSection'

const NeedsCardChatSection = ({ setChatLoader, hasMore, debounceAllCall, debounceProps, chatAreaRef, sendMessageProps,
  chatLoader, allChats, zChat, user, setOverLay, selectedChat, deleting, overlay, deleteMessageProps, allChatWithDate, name, attachments
}) => {
  const scrollContainerRef = useRef(null);
  const [scrollContainerHeight, setScrollContainerHeight] = useState(null)
  const [scrollDate, setScrollDate] = useState('')
  const [ShowscrollDate, setShowscrollDate] = useState(false)
  useEffect(() => {
    setScrollContainerHeight(scrollContainerRef?.current?.clientHeight)
  }, [allChats])

  return (
    <>
      {allChats.length > 0 &&
        <div ref={scrollContainerRef} className={`${overlay ? attachments && attachments?.[0]?.url ? "attachments_no-scroll_chat_div" : "no-scroll_chat_div" : 
          attachments && attachments?.[0]?.url ? "attachments_scroll_chat_div" : "scroll_chat_div"}`} id="scroll_chat_div"
          onScroll={(e) => scrollTop(e, setChatLoader, hasMore, debounceAllCall, debounceProps,setScrollDate,setShowscrollDate,overlay,ShowscrollDate,chatLoader,allChats)}
        >
          <div className="chat_area" >
          {allChats.length >1 &&ShowscrollDate && <div className="ScrollDate">
            <span> {scrollDate}</span>
          </div>}
            {chatLoader && <RedLoader />}
            {Object.keys(allChatWithDate)?.reverse().map((date) => {
              return (<>
                <p className='dateHeader' id={'date'}>{date}</p>
                {allChatWithDate[date]?.slice().reverse().map((item, id) =>
                (<div key={id} className={zChat == id ? " todo todo_zindex" : "todo"} id={item.responseId}>
              <div className={user == item?.responseOwner_userCode ? "chat_single" : "chat_single_received"}
                ref={id === allChatWithDate[date].length - 1 ? chatAreaRef : null}
              >
                {user == item?.responseOwner_userCode && (
                  <SendChatMsg msg={item?.responseDescription} date={item?.responseCreatedAt} isDeleted={item?.isDeleted}
                    deleteMessageProps={deleteMessageProps} respId={item?.responseId} setTopOverLay={setOverLay}
                    selectedChat={selectedChat} id={id} deleting={deleting} topOverlay={overlay} setShowscrollDate={setShowscrollDate}
                    scrollContainerHeight={scrollContainerHeight} chatLoader={chatLoader} sendMessageProps={sendMessageProps} 
                    firstname={item?.responseOwner_firstname} lastname={item?.responseOwner_lastname} name={name} zChat={zChat} />)}
                {user !== item?.responseOwner_userCode && (
                  <ReceivedChatMsg msg={item?.responseDescription} date={item?.responseCreatedAt} isDeleted={item?.isDeleted}
                  firstname={item?.responseOwner_firstname} lastname={item?.responseOwner_lastname}
                  />)}
              </div>
            </div>
            ))}
        </>)})}
        </div>
      </div>}
      </>);};

export default NeedsCardChatSection;
