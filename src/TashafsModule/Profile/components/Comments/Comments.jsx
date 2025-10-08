import React, { useEffect } from "react";
import "./comments.scss";
import { useSearchParams } from "react-router-dom";
import { useCommentPagination } from "../../../../UmeshModule/comments/api/useCommentPagination";
import ScrollComments from "./ScrollComments";
import CardHeader from "./CardHeader";
import CommentsShimmer from "../../../../UmeshModule/components/shimmer/CommentsShimmer";

const Comments = ({ productionUrl, isLive, rgba, setShowVerifiedPopup, baseColor }) => {
  let [searchParams] = useSearchParams();
  const userCode = searchParams.get("userCode");
  const networkCode = searchParams.get("networkCode");
  const isProfile = true;
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
    `${isLive ? productionUrl : ""}/noSessionPreviewReplies`,10
  );

  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  const onClikShowMore = (index, status) => {
    const arr = [...data];
    const d = arr[index];
    d.showReplies = !status;
    setData([...arr]);
  };

  return (
    <div style={{ backgroundColor: rgba, marginBottom: "54px" }} className={"comments-section "}>
      <CardHeader loading={loading} data={data} userCode={userCode} networkCode={networkCode} />
      {loading ? (
        <CommentsShimmer
          profile={true}
          className="shimmer_container"
          color={rgba}
          baseColor={baseColor}
        />
      ) : data?.length ? (
        <div
        id="comments_horizontals_container"
        className="comments-hor-container"
      >
        <ScrollComments
          data={data}
          getData={getComments}
          hasMore={hasMore}
          loading={loading}
          onClikShowMore={onClikShowMore}
          showMoreReplies={showMoreReplies}
          userCode={userCode}
          setShowVerifiedPopup={setShowVerifiedPopup}
          isProfile={isProfile}
          replyLoader={replyLoader}
        />
      </div>
      ) : (
        <div className="no-comment">No Comments Available Yet </div>
      )}
    </div>
  );
};
export default Comments;
