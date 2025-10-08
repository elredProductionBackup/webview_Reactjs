import { useEffect, useState } from 'react'
import axios from "axios";
import { byDate } from '../../../../../globalFunctions'
function useFetchLearCards(isLive, productionUrl, leadId, setAllChats, setAllChatsWithDate, setLeadsMappingId) {
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)
    const [leadsData, setLeadsData] = useState({});
    const [conversationCount, setConversationCount] = useState(0);
    const [loading, setLoading] = useState(true)
    const [isChatLoading, setChatLoading] = useState(false)
    const [leadsSessionExpired, setLeadsSessionExpired] = useState(false)
    const [apiFail, setApiFail] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const [ reset,setReset]=useState(false);
    const [navigatetoLeadsList,setNavigateToleadsList]=useState(false)
    const [showButton,setShowButton]=useState(true)
    const fetchSpecificLeads = () => {

        const accessToken = localStorage.getItem("accessToken") ?? "";
        axios.post(`${isLive ? productionUrl : ""}/webViewFetchLeadAndSpecificConversation?leadId=${leadId}&start=${page}&offset=10`,
            {}, { headers: { Authorization: `Bearer ${accessToken}` }, }).then((res) => {
                setConversationCount(res?.data?.totalConversationCount);
                setLeadsData(res?.data?.result[0]);
                let chatDateWise = byDate(res?.data?.result?.[0]?.responseDetails?.conversations)
                setAllChats(res?.data?.result?.[0]?.responseDetails?.conversations);
                setAllChatsWithDate(chatDateWise)
                setHasMore(res?.data?.result?.[0]?.responseDetails?.conversations.length < 10 ? false : true)
                setPage(page + 10);
                setLoading(false);
                setChatLoading(false)
                setLeadsMappingId(res?.data?.result?.[0]?.responseDetails?.leadResponseMappingId)
            })
            .catch((err) => {
                setLoading(false);
                if (err.response?.data?.errorCode === -1) {
                   setLeadsSessionExpired(true);
                   setReset(true);
                    setErrorMsg('Its not you, its us. Please retry to continue.')
                } else if (err?.response?.data?.errorCode === 1) {  
                    setLeadsSessionExpired(true);
                    setErrorMsg('Seems like you are not logged in. Please Retry')
                }else if(err?.response?.data?.errorCode === 7){
                    setLeadsSessionExpired(true);
                    setNavigateToleadsList(true);
                    setReset(true);
                    setShowButton(false)
                     setErrorMsg("This Offering doesn't exist.")
                }

            });
    };

    useEffect(() => {
        fetchSpecificLeads()
    }, []) //eslint-disable-line



    return {
        page, loading, setLoading, isChatLoading, hasMore, leadsData, setLeadsData, setLeadsSessionExpired,
        setErrorMsg, setApiFail, setChatLoading, setHasMore, setPage, conversationCount,
        leadsSessionExpired, apiFail, errorMsg,reset,navigatetoLeadsList, setConversationCount,setReset,showButton
    }
}

export default useFetchLearCards
