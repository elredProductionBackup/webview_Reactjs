import "./index.scss";
import BtnShowMore from "./BtnShowMore";
import ReplyCommentCard from "./ReplyCommentCard";
import CommentsHead from "./CommentsHead";

function CommentsCard(props) {
  const {  item,color,onClikShowMore,index,showMoreReplies,className,onCommentsClick, setShowVerifiedPopup, isProfile,replyLoader, dataLength } = props

  const onClickShowMoreReplies = (index, type) => {
    
    if (type !== "showmore") {
      onClikShowMore(index, item.showReplies);
    }else{
      showMoreReplies(index, item.commentId);
    }
  };

  return (
    <div style={{ marginBottom: dataLength === index + 1 ? "20px" : "0" }}>
      <CommentsHead item={item} onCommentsClick={onCommentsClick} className={className} color={color} setShowVerifiedPopup={setShowVerifiedPopup}
      isProfile={isProfile} />

      <div className="view-replies-container">
        {item.showReplies
          ? item.replies.map((item, i) => {
              return (
                <ReplyCommentCard
                  item={item}
                  onCommentsClick={onCommentsClick}
                  className={className}
                  color={color}
                  key={`rep-${i}-${index}`}
                  setShowVerifiedPopup={setShowVerifiedPopup}
                  isProfile={isProfile}
                />
              );
            })
          : null}
      </div>
      
      <BtnShowMore repliesCount={item.repliesCount} onClickShowMoreReplies={onClickShowMoreReplies} replies={item.replies} color={color} index={index} showReplies={item.showReplies} replyLoader={replyLoader} />
    </div>
  );
}

export default CommentsCard;
