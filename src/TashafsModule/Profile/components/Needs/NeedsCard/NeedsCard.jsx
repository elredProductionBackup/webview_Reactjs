import React, { useEffect, useState, useRef, useContext,lazy } from "react";
import _ from "lodash";
import { checkAccess, debounceAllCall, inputHandlerChat, scrollDown } from "../needsGlobalFunctions";
import { GlobalData } from "../../../../../App";
import {useLocation, NeedsCardShimmer, toast, toastConfig, useFetchSpecificNeed, NeedsCardData} from './ImportsNeedsCard'
import { clearToasts } from "react-simple-toasts";
const SessionExpired = lazy(() => import("./SessionExpired/SessionExpired"));

const NeedsCard = ({ isLive, productionUrl,userCode }) => {
  const {formData, setFormData} = useContext(GlobalData)
  const [loading, setLoading] = useState(true);
  const [needData, setNeedData] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [chatMsg, setChatMsg] = useState("");
  const needId = queryParams.get("needId");
  const [accessEmpty, setAccessEmpty] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [user, setUser] = useState("");
  const [allChats, setAllChats] = useState([]);
  const chatAreaRef = useRef(null);
  const [chatAdded, setChatAdded] = useState(false);
  const [overlay, setOverLay] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [sendOverlay, setSendOverlay] = useState(false);
  const [zChat, setZChat] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [openEmoji, setopenEmoji] = useState(false);
  const [chatLoader, setChatLoader] = useState(false);
  const selectedChat = (index) => setZChat(index);
  const [toaster, setToaster] = useState(true);
  const [resetSession, setResetSession] = useState(false)
  const [allChatWithDate,setAllChatsWithDate]=useState({});
  // intro need state for V10
  const [introNeed, setIntroNeed] = useState(false);
  toastConfig({ theme: "dark" });

  useEffect(() => {
    checkAccess(setAccessEmpty, setAccessToken, setUser);
  }, [resetSession]);
  const inputRef = useRef(null);
  useEffect(() => {
    scrollDown(chatAreaRef);
  }, [chatAdded, loading]);

  useEffect(() => {
    clearToasts();
  }, []);

  const { errorMsg, apiFail, sessionExpired, mappingId, setMappingId,conversationCount, setConversationCount, invalidNeed } = useFetchSpecificNeed( isLive, productionUrl, needId,
    page, setPage, needData, setNeedData, allChats, setAllChats, loading, setLoading, resetSession,setHasMore,setAllChatsWithDate, setIntroNeed );

  const sendMessageProps = { chatMsg, setSendOverlay, isLive, productionUrl, needId, accessToken, toast, setToaster, toaster,allChatWithDate,setAllChatsWithDate,
    allChats, setAllChats, setChatMsg, openEmoji, setopenEmoji, setChatAdded, chatAdded, user, setFormData, formData,
    mappingId, setMappingId,inputRef
  };

  const deleteMessageProps = { setDeleting, isLive, productionUrl, needData, needId, accessToken, 
    allChats, setZChat, setAllChats,allChatWithDate,setAllChatsWithDate, mappingId, setMappingId };

  const inputHandlerChatProps = { setFormData, toaster, toast, setToaster, formData,inputRef,openEmoji, setopenEmoji };
  const debounceProps = { isLive, productionUrl, needId, page, setAllChats, allChats,allChatWithDate,setAllChatsWithDate,
    setPage, setChatLoader, setHasMore,conversationCount, setConversationCount};

  const needsCardDataProps = {
    needData, setChatLoader, hasMore, debounceAllCall, debounceProps, chatAreaRef, chatLoader, allChats, zChat, 
    user, deleteMessageProps, setOverLay, selectedChat, deleting, overlay, openEmoji, inputHandlerChat, 
    inputHandlerChatProps, accessEmpty, needId, sendMessageProps, sendOverlay, setopenEmoji, chatMsg, formData,
    allChatWithDate,setAllChatsWithDate, userCode,inputRef,setFormData,conversationCount, setConversationCount
  }

  return <>{
    sessionExpired ? <SessionExpired setResetSession={setResetSession} resetSession={resetSession} errorMsg={errorMsg}/> 
    : (apiFail || introNeed ? <SessionExpired home={true} errorMsg={errorMsg} invalidNeed={invalidNeed}/> : (loading ? <NeedsCardShimmer /> : <NeedsCardData {...needsCardDataProps}/>))
  }</>;

};

export default NeedsCard;
