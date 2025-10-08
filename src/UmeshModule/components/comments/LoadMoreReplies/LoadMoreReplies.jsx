const LoadMoreReplies = ({
  replyLoader,
  showReplies,
  repliesCount,
  replies,
  onClickShowMoreReplies,
  index,
  color,
  line,
}) => {
  return (
    <>
      {!replyLoader && showReplies && repliesCount > replies.length ? (
        <div
          className="load-more-replies d-flex align-items-center"
          onClick={(e) => {
            e.stopPropagation();
            onClickShowMoreReplies(index, "showmore");
          }}
        >
          {color ? (
            <div
              className="comment-line"
              style={{ backgroundColor: color ? color : "#E5E5E5" }}
            />
          ) : (
            <img className="line_horizontal" src={line} alt="" />
          )}
          <span
            className="text_view_more"
            style={{ color: color ? color : "#E5E5E5" }}
          >
            Load more replies
          </span>
        </div>
      ) : null}
    </>
  );
};

export default LoadMoreReplies;
