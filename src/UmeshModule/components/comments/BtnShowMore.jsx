import RedLoader from "../../../TashafsModule/Profile/components/RedLoader/RedLoader";
import line from "../../../assets/images/Line 35.svg";
import LoadMoreReplies from "./LoadMoreReplies/LoadMoreReplies";
import ViewMoreReplies from "./ViewMoreReplies/ViewMoreReplies";

function BtnShowMore({
  repliesCount,
  onClickShowMoreReplies,
  replies,
  color,
  index,
  showReplies,
  replyLoader
}) {
  return (
    <>
    {replyLoader&&showReplies&& repliesCount > replies.length&&<RedLoader/>}
    <LoadMoreReplies replyLoader={replyLoader} showReplies={showReplies}
       repliesCount={repliesCount} replies={replies} onClickShowMoreReplies={onClickShowMoreReplies}
       index={index} color={color} line={line} />
    <ViewMoreReplies repliesCount={repliesCount} color={color}  line={line}  
     onClickShowMoreReplies={onClickShowMoreReplies} index={index}  showReplies={showReplies}  replies={replies} />
    </>
  );
}
export default BtnShowMore;
