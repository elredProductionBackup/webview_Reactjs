const ViewMoreReplies = ({
  repliesCount,
  color,
  line,
  onClickShowMoreReplies,
  index,
  showReplies,
  replies,
}) => {
  return (
    <>
      {repliesCount > 0 ? (
        <div className="view-more-replies d-flex align-items-center">
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
            onClick={(e) => {
              e.stopPropagation();
              onClickShowMoreReplies(index);
            }}
            style={{ color: color ? color : "#E5E5E5" }}
          >
            {showReplies && repliesCount !== replies.lenght
              ? `Hide ${repliesCount === 1 ? "reply" : "replies"}`
              : `View ${repliesCount} more ${
                  repliesCount === 1 ? "reply" : "replies"
                }`}
          </span>
        </div>
      ) : null}
    </>
  );
};

export default ViewMoreReplies;
