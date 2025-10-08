import { useState, useEffect } from "react";
import axios from "axios";

import { byDate } from "../../../../../globalFunctions";
const useFetchSpecificNeed = (
  isLive,
  productionUrl,
  needId,
  page,
  setPage,
  needData,
  setNeedData,
  allChats,
  setAllChats,
  loading,
  setLoading,
  resetSession,
  setHasMore,
  setAllChatsWithDate,
) => {
  const [conversationCount, setConversationCount] = useState(0);
  const [mappingId, setMappingId] = useState(null);
  const [error, setError] = useState(false);
  const [sessionExpired, setSessionExpired] = useState(false);
  const [apiFail, setApiFail] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [invalidNeed, setInvalidNeed] = useState(false)

  useEffect(() => {
    const fetchSpecificNeed = () => {
      const accessToken = localStorage.getItem('accessToken')
      let requestUrl = `${
        isLive ? productionUrl : ""
      }/webViewFetchNeedAndSpecificConversation?needId=${needId}&start=${page}&offset=10`;

      axios
        .post(
          requestUrl,
          {},
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        )
        .then((response) => {
          setSessionExpired(false);
          setConversationCount(response?.data?.totalConversationCount);
          setNeedData(response?.data?.result?.[0]);
          setHasMore(
            response?.data?.result?.[0]?.responseDetails?.conversations.length <
              10
              ? false
              : true
          );

          setAllChats(
            response?.data?.result?.[0]?.responseDetails?.conversations
          );
          setAllChatsWithDate(
            byDate(response?.data?.result?.[0]?.responseDetails?.conversations)
          );
          setPage(page + 10);
          setLoading(false);
          setMappingId(
            response?.data?.result?.[0]?.responseDetails?.needResponseMappingId
          );
        })
        .catch((error) => {
          setLoading(false);
          if (error?.response?.data?.errorCode === -1) {
            setApiFail(true);
          } else if (error?.response?.data?.errorCode === 1) {
            setSessionExpired(true);
            setErrorMsg("Seems like you are not logged in. Please Retry");
          }
          else if (error?.response?.data?.errorCode === 7) {
            setApiFail(true);
            setInvalidNeed(true)
            setErrorMsg("This need doesn't exist");
          } else {
            setApiFail(true);
          }
        });
    };

    fetchSpecificNeed();
  }, [needId, resetSession]);

  return {
    conversationCount,
    needData,
    allChats,
    loading,
    page,
    mappingId,
    error,
    sessionExpired,
    apiFail,
    errorMsg,
    setMappingId,
    setConversationCount,
    invalidNeed,
  };
};

export default useFetchSpecificNeed;
