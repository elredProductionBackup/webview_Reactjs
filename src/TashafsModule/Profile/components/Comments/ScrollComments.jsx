import { InfiniteScroll, CommentsCard, RedLoader, getCurrentTime, useNavigate } from './Import_ScrollComments'

function ScrollComments({
  data,
  getData,
  hasMore,
  onClikShowMore,
  showMoreReplies,
  userCode,
  setShowVerifiedPopup,
  isProfile,
  replyLoader,
  networkCode
}) {
  const navigate = useNavigate();
  return (
    <InfiniteScroll
      dataLength={data?.length}
      next={getData}
      style={{ overflow: "hidden" }}
      scrollableTarget="comments_horizontals_container"
      hasMore={hasMore}
    >
      <div className="comment_list">
        {data?.map((item, index) => {
          return (
            <CommentsCard
              className={"text-overflow"}
              onClikShowMore={onClikShowMore}
              showMoreReplies={showMoreReplies}
              key={index}
              item={item}
              index={index}
              color={"#fff"}
              onCommentsClick={() => {
                navigate(
                  `/${!userCode ? `network-comments?networkCode=${networkCode}` : `comments?userCode=${userCode}`}&t=${getCurrentTime()}`
                );
              }}
              setShowVerifiedPopup={setShowVerifiedPopup}
              isProfile={isProfile}
              replyLoader={replyLoader}
            />
          );
        })}
      </div>
      {hasMore ? <RedLoader /> : null}
    </InfiniteScroll>
  );
}

export default ScrollComments;
