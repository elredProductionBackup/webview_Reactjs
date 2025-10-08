import { useSearchParams } from "react-router-dom";
import { useEffect, useState, useRef, useContext,lazy } from "react";
import LeadsReplyContainer from './LeadsReplyContainer'
import "./leadsreply.scss";
import useFetchLearCards from '../../apiservices/useFetchLearCards'
import { checkAccess } from '../../../../../../globalFunctions'
import LeadsCardShimmer from "../Leadsreply/LeadsReplyCard/LeadsCardShimmer/LeadsCardShimmer";
import { GlobalData } from "../../../../../../App";
import { clearToasts } from "react-simple-toasts";
const SessionExpired = lazy(() => import("./LeadsReplyCard/SessionExpired/SessionExpired"));

const LeadsReply = ({ isLive, productionUrl, userCode }) => {
  const { formData, setFormData } = useContext(GlobalData)
  let [searchParams] = useSearchParams();
  const leadId = searchParams.get("leadId");
  const [chatMsg, setChatMsg] = useState("");
  const [accessEmpty, setAccessEmpty] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [user, setUser] = useState("");
  const [sendOverlay, setSendOverlay] = useState(false);
  const [overlay, setOverLay] = useState(false);
  const [allChats, setAllChats] = useState([]);
  const [allChatWithDate, setAllChatsWithDate] = useState({});
  const [toaster, setToaster] = useState(true);
  const [openEmoji, setopenEmoji] = useState(false);
  const [chatAdded, setChatAdded] = useState(false);
  const [resetSession, setResetSession] = useState(false)
  const [zChat, setZChat] = useState("");
  const [deleting, setDeleting] = useState(false);
  const selectedChat = (index) => setZChat(index);
  const chatAreaRef = useRef(null);
  const [leadsMappingId, setLeadsMappingId] = useState("")
  const { isChatLoading, page, loading, setPage, leadsData, hasMore, setChatLoading, setHasMore, leadsSessionExpired, apiFail, errorMsg, setLeadsSessionExpired,
    setErrorMsg, setApiFail, reset,navigatetoLeadsList,conversationCount, setConversationCount,setReset,showButton } = useFetchLearCards(isLive, productionUrl, leadId, setAllChats, setAllChatsWithDate, setLeadsMappingId)

  const debounceProps = {
    isLive, productionUrl, leadId, page, setAllChats, setAllChatsWithDate,
    allChats, setPage, setChatLoader: setChatLoading, setHasMore, setLeadsSessionExpired,
    setErrorMsg, setApiFail, leadsMappingId, setLeadsMappingId,conversationCount, setConversationCount,chatAreaRef
  }
  const leadsContainerProps = {
    chatMsg, setChatMsg, deleting, setDeleting, setZChat, accessEmpty, sendOverlay, setOverLay, overlay, user, setSendOverlay, accessToken, setAllChats, chatAreaRef, hasMore, selectedChat, zChat, setChatLoading, isChatLoading,
    leadsData, isLive, productionUrl, leadId, allChats, loading, toaster, setToaster, openEmoji, setopenEmoji, chatAdded, setChatAdded, debounceProps, formData, setFormData, userCode, allChatWithDate, setAllChatsWithDate, setLeadsSessionExpired,
    setErrorMsg, setApiFail, leadsMappingId, setLeadsMappingId,setReset
  }

  useEffect(() => {
    checkAccess(setAccessEmpty, setAccessToken, setUser)
    clearToasts();
  }, [])


  return (
    <>
      {leadsSessionExpired ? <SessionExpired setResetSession={setResetSession} resetSession={resetSession}
        userCode={userCode} errorMsg={errorMsg} reset={reset} home={false} showButton={showButton}  /> :
        apiFail ? <SessionExpired home={true} userCode={userCode} errorMsg={errorMsg} reset={reset} 
        navigatetoLeadsList={navigatetoLeadsList} showButton={showButton} /> :
          loading ? 
          <LeadsCardShimmer />
           :
            <LeadsReplyContainer {...leadsContainerProps} />
            }
    </>
  );
};

export default LeadsReply;
