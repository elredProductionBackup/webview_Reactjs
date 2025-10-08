import { useRef } from "react";
import { useEffect, useState, clearToasts, backIcon, Spinner, emojiData, UserFeedbackSuccessToast, validateFeedbackInput,
    toast, emojiCheckIcon, FeedbackStaticTextTop, UserFeedbackEmojiSingle, UserFeedbackHeader, UserFeedbackInput, 
    UserFeedbackSubmitButton, handleTextInput, handleSubmitFeedback } from "./Imports_UserFeedbackPopup";

const UserFeedbackPopup = ({ showUserFeedbackPopup, setShowUserFeedbackPopup, productionUrl, isLive, screen, openNetworkList, showDesignationsPopup,
    showEthical, shoWork, openCardPopup, headerText, openDisclaimerModal
 }) => {
    const [crossIconLoader, setCrossIconLoader] = useState(true);
    const [formInput, setFormInput] = useState("");
    const [submitLoader, setSubmitLoader] = useState(false);
    const [feedbackResponseType, setFeedbackResponseType] = useState("");
    const [showFeedbackSuccess, setShowFeedbackSuccess] = useState(false);
    const [toaster, setToaster] = useState(true);
    const [selectedEmoji, setSelectedEmoji] = useState(null);
    const [checkIconLoader, setCheckIconLoader] = useState(true);
    const popupRef = useRef(null);

    useEffect(() => {
        if (!showUserFeedbackPopup) {
            clearToasts();
            setToaster(true);
        }
        if (showUserFeedbackPopup) {
            setSelectedEmoji(null);
            setFormInput("");
            setShowFeedbackSuccess(false);
            if (popupRef.current) {
                popupRef.current.scrollTo(0, 0);
            }
        }
    }, [showUserFeedbackPopup]); // eslint-disable-line

    useEffect(() => {
        setShowFeedbackSuccess(false);
    }, [openNetworkList, showDesignationsPopup, showEthical, shoWork, openCardPopup]);

    return (
        <>
            <div className="container-user-feedback-popup">
                <div ref={popupRef} className={showUserFeedbackPopup ? "user-feedback-container user-feedback-container-show"
                    : "user-feedback-container user-feedback-container-hide"}>
                    <UserFeedbackHeader Spinner={Spinner} crossIconLoader={crossIconLoader} backIcon={backIcon} setCrossIconLoader={setCrossIconLoader} 
                        submitLoader={submitLoader} setShowUserFeedbackPopup={setShowUserFeedbackPopup} headerText={headerText} />
                    <FeedbackStaticTextTop />
                    <div className="user-feedback-emojis-top-container">
                        {emojiData?.map((item) => 
                            <UserFeedbackEmojiSingle key={item?.id} item={item} selectedEmoji={selectedEmoji} setSelectedEmoji={setSelectedEmoji} 
                                emojiCheckIcon={emojiCheckIcon} checkIconLoader={checkIconLoader} setCheckIconLoader={setCheckIconLoader} />
                        )}
                        {selectedEmoji ? null : <div className="no-feedback-emoji-selected-text">
                            Express your rating with a simple tap on emojis.</div>}
                    </div>
                    <div className="user-feedback-form-label">Describe your experience here (Optional)</div>
                    <UserFeedbackInput formInput={formInput} handleTextInput={(e) => handleTextInput(e, validateFeedbackInput, toaster, toast, 
                        setToaster, formInput, setFormInput)} submitLoader={submitLoader} />
                    {/* {formInput.trim() ?  */}
                    <div className="user-feedback-error-message-filler" />
                        {/* : <div className="user-feedback-validation-text">Minimum 1 character is required</div>} */}
                    <UserFeedbackSubmitButton formInput={formInput} selectedEmoji={selectedEmoji} handleSubmitFeedback={() => 
                        handleSubmitFeedback(formInput, submitLoader, setSubmitLoader, selectedEmoji, clearToasts, setToaster, screen, 
                            isLive, productionUrl, setFeedbackResponseType, setShowUserFeedbackPopup, setShowFeedbackSuccess)} 
                        submitLoader={submitLoader} Spinner={Spinner} />
                </div>
            </div>
            {showFeedbackSuccess && <UserFeedbackSuccessToast showFeedbackSuccess={showFeedbackSuccess} feedbackResponseType={feedbackResponseType} 
                openDisclaimerModal={openDisclaimerModal}/>}
        </>
    )
}

export default UserFeedbackPopup;