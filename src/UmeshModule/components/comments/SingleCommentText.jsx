import classNames from "classnames";
import { useEffect, useRef, useState } from "react";

const SingleCommentText = ({ item, className, color, isProfile }) => {
    const [showMoreComment, setShowMoreComment] = useState(false)
    const [showMoreButton, setShowMoreButton] = useState(false)
    const commentRef = useRef();
  

    useEffect(() => {
        if (commentRef?.current?.offsetHeight < commentRef?.current?.scrollHeight) {
          setShowMoreButton(true)
        }else{
        setShowMoreButton(false);
        }
      }, []);

    const showMoreCommentText = () =>{
        setShowMoreComment(true)
    }

    return (
        isProfile ? (
            <p className={classNames("comment-text-profile mb-0", { [className]: className })}
                style={{ color: color }}>{item}</p>
        ) : (
            <>
                <p className={classNames(showMoreComment ? "comment-text-in-comment mb-0" : "comment-text-in mb-0", 
                { [className]: className })}style={{ color: color }} ref={commentRef} >{item}</p>

                {showMoreButton && !showMoreComment && 
                 <span className="readMoreCommentText" onClick={showMoreCommentText}>Read more</span>}
            </>
        )
    )
}
export default SingleCommentText;
