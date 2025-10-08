import React, { useEffect } from "react";
import Header from "../components/header/Header";
import "./comments.scss";
import { useCommentPagination } from "./api/useCommentPagination";
import CommentsScroll from "./component/CommentsScroll";
import { clearToasts } from "react-simple-toasts";

function Comments({ productionUrl, isLive, showVerifiedPopup, setShowVerifiedPopup }) {
  let fetchNumber = window.innerHeight< 575? 10 : 15
  const {
    data,
    setData,
    loading,
    setLoading,
    hasMore,
    getData,
    showMoreReplies,
    getComments,
    replyLoader
  } = useCommentPagination(
    `${isLive ? productionUrl : ""}/noSessionPreviewComments?`,
    `${isLive ? productionUrl : ""}/noSessionPreviewReplies`,fetchNumber
  );

  useEffect(() => {
    getData();
    clearToasts();
  }, []);

  const onClikShowMore = (index, status) => {
    const arr = [...data];
    const d = arr[index];
    d.showReplies = !status;
    setData([...arr]);
  };
  return (
    <div>
      <Header title={"Comments"} />
      <CommentsScroll
        hasMore={hasMore}
        data={data}
        getData={getComments}
        loading={loading}
        showMoreReplies={showMoreReplies}
        onClikShowMore={onClikShowMore}
        showVerifiedPopup={showVerifiedPopup}
        setShowVerifiedPopup={setShowVerifiedPopup}
        replyLoader={replyLoader}
      />
    </div>
  );
}

export default Comments;
