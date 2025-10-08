import axios from "axios";

export const handleTextInput = (
    e, validateFeedbackInput, toaster, toast, setToaster, formInput, setFormInput
) => {
    const regex = /^[0-9a-zA-Z\s!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\n\r]+$/;
    if (regex.test(e.target.value) || e.target.value === '') {
      validateFeedbackInput(e, toaster, toast, setToaster, formInput, setFormInput);
    } else return false;
};

export const handleSubmitFeedback = async (
    formInput, submitLoader, setSubmitLoader, selectedEmoji, clearToasts, setToaster, 
    screen, isLive, productionUrl, setFeedbackResponseType, setShowUserFeedbackPopup, 
    setShowFeedbackSuccess
) => {
    // if (!formInput.trim() || submitLoader || !selectedEmoji?.emojiFeedbackRating) return false;
    if (submitLoader || !selectedEmoji?.emojiFeedbackRating) return false;
    setSubmitLoader(true)
    clearToasts()
    setToaster(true)

    try {
        const token = localStorage.getItem("accessToken") ? `Bearer ${localStorage.getItem("accessToken")}` : null;
        const requestData = {
            screenName: screen,
            feedback: formInput.trim(),
            rating: selectedEmoji?.emojiFeedbackRating
        };

        const config = {
            headers: {
                Authorization: token 
            }
        };

        const res = await axios.post(`${isLive ? productionUrl : ""}/webViewFeedback`, requestData, config);
        ((res?.data?.errorCode === -1) || !res?.data?.success) ? setFeedbackResponseType("error") : setFeedbackResponseType("success");
        setSubmitLoader(false)
        setShowUserFeedbackPopup(false)
        setShowFeedbackSuccess(true)
    } catch (error) {
        setFeedbackResponseType("error")
        setSubmitLoader(false)
        setShowUserFeedbackPopup(false)
        setShowFeedbackSuccess(true)
    }
};

export const handleEmojiClick = (emojiLoader, setSelectedEmoji, currentEmoji, selectedEmoji) => {
    if (emojiLoader) return false;
    selectedEmoji?.id === currentEmoji?.id ? setSelectedEmoji(null) : setSelectedEmoji(currentEmoji);
}