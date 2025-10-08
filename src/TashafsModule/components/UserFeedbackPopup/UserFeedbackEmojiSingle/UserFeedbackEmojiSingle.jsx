import { useState , Skeleton, handleEmojiClick } from "./Imports_UserFeedbackEmojiSingle";

const UserFeedbackEmojiSingle = ({ item, selectedEmoji, setSelectedEmoji, emojiCheckIcon, checkIconLoader, setCheckIconLoader }) => {
    const [emojiLoader, setEmojiLoader] = useState(true);

    return (
        <span className="feedback-emoji-container-span">
            <span className={
                item?.emojiBottomText === selectedEmoji?.emojiBottomText ? 
                "feedback-emoji-img-container selected-feedback-emoji-bg feedback-emoji-cursor-pointer" 
                : `feedback-emoji-img-container feedback-container-emoji-bg ${emojiLoader ? "" : "feedback-emoji-cursor-pointer"}`
                } onClick={() => handleEmojiClick(emojiLoader, setSelectedEmoji, item, selectedEmoji)}
            >
                {
                    item?.emojiBottomText === selectedEmoji?.emojiBottomText ? 
                        <>
                            <Skeleton circle className={checkIconLoader ? "selected-feedback-emoji-check-loader" : "d-none"} baseColor="#242939" />
                            <img src={emojiCheckIcon} alt="" className={checkIconLoader ? "d-none" : "selected-feedback-emoji-check"} 
                                onLoad={() => setCheckIconLoader(false)}
                            /> 
                        </>
                    : null
                }
                <Skeleton circle className={emojiLoader ? "feedback-emoji-image-shimmer" : "d-none"} baseColor="#242939" />
                <img src={item?.emojiIcon} alt="" className={emojiLoader ? "d-none" : "feedback-emoji-image"} onLoad={() => setEmojiLoader(false)} />
            </span>
            {
                item?.emojiBottomText === selectedEmoji?.emojiBottomText ? 
                    <span className="feedback-emoji-bottom-text">
                        {item?.emojiBottomText}
                    </span> 
                : null
            }
        </span>
    )
}

export default UserFeedbackEmojiSingle;