import { InfiniteScroll, CommentsCard, CommentsShimmer, RedLoader, classNames, AadhaarVerifiedPopup } from './Import_CommentsScroll'

function CommentsScroll({
  hasMore,
  data,
  getData,
  loading,
  showMoreReplies,
  onClikShowMore,
  showVerifiedPopup,
  setShowVerifiedPopup,replyLoader
}) {
  return (
    <>
    <div id="comments-body" className={classNames("comments-body", {"screen-cont":!loading,"disabled-scroll":loading})}>
      <InfiniteScroll
        dataLength={data?.length}
        next={getData}
        style={{ overflow: "hidden" }}
        scrollableTarget="comments-body"
        hasMore={hasMore}
      >
        {loading ? (
          <CommentsShimmer profile={false} color={'#242939'} highlightColor="#1e212b" />
        ) : !data.length ? (
          <div className="no-comments" style={{ color: "#00000099" }}>
            No Comments Available Yet
          </div>
        ) : (
          data.map((item, index) => {
            return (
              <CommentsCard
                key={`comment-${index}`}
                item={item}
                index={index}
                showMoreReplies={showMoreReplies}
                onClikShowMore={onClikShowMore}
                setShowVerifiedPopup={setShowVerifiedPopup}
                replyLoader={replyLoader}
                dataLength={data.length}
              />
            );
          })
        )}
        {hasMore  ? <RedLoader /> : null}
      </InfiniteScroll>
    </div>
    <AadhaarVerifiedPopup showVerifiedPopup={showVerifiedPopup} setShowVerifiedPopup={setShowVerifiedPopup} />
    </>
  );
}

export default CommentsScroll;
