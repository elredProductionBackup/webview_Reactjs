import { useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

export const useCommentPagination = (url, replyUrl, fetchCount) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [replyLoader,setReplyLoader]=useState(false);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [commentsCount, setCommentsCount] = useState(0)
  let [searchParams] = useSearchParams();
  const userCode = searchParams.get("userCode");

  const getData = () => {

    const start = page * fetchCount + 1;
    const body = { profileOwner_usercode: userCode };

    if (start !== 1) {
      setHasMore(true)
    }
    axios
      // .post(`${url}?userCode=${userCode}&startComment=${start}&offset=${fetchCount}`, body)
      .post(`${url}?startComment=${start}&offset=${fetchCount}`, body)
      .then((resp) => {
        let d = [...data];
        if (start === 1) {
          d = [...resp?.data?.result?.[0]?.comments];
          d = d?.map((item) => {
            return { ...item, showReplies: false };
          });
        } else {
          setHasMore(true);
          const comments = resp?.data?.result?.[0]?.comments?.map((item) => {
            return { ...item, showReplies: false };
          });
          d = [...d, ...comments];
        }
      
        if ( d.length === resp?.data?.result?.[0]?.commentsCount) {
          setHasMore(false); 
        } else {
          setHasMore(true);
        }
        setData(d);
        setCommentsCount(resp?.data?.result?.[0]?.commentsCount)
        const p = page + 1;
        setPage(p);
      })
      .catch(() => {
        setHasMore(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const showMoreReplies = (index, commentId) => {
    const arr = [...data];
    let d = arr[index];
    const total = d.repliesCount;
    const start = d.replies.length + 1;
    setReplyLoader(true)
    if (start !== total + 1) {
      const url = `${replyUrl}?&startReply=${start}&offset=10`;

      const body = { profileOwner_usercode: userCode, commentId: commentId };
      axios
        .post(url, body)
        .then((resp) => {
          if (resp?.data?.result) {
            d.replies = [
              ...d.replies,
              ...(resp?.data?.result[0]?.replies ?? []),
            ];
            setReplyLoader(false)
            setData([...arr]);
          }
        })
        .catch(() => { })
        .finally(() => { });
    }
  };

  const getComments = () => {
    if (data.length < commentsCount) {
      getData()
      
    }else{
      setLoading(false)
    }
   
  }

  return {
    data,
    setData,
    loading,
    page,
    setPage,
    setLoading,
    hasMore,
    setHasMore,
    getData,
    showMoreReplies,
    commentsCount,
    getComments,
    replyLoader
  };
};
