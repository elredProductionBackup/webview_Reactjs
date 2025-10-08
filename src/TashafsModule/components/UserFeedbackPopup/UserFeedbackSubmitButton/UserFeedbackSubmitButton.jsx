const UserFeedbackSubmitButton = ({ formInput, selectedEmoji, handleSubmitFeedback, submitLoader, Spinner }) => {
    return (
        <div className="user-feedback-submit-button-container">
            <div onClick={handleSubmitFeedback}
                className={
                    // formInput?.length > 0 && formInput.trim() && 
                selectedEmoji?.emojiFeedbackRating ? 
                "user-feedback-submit-button user-feedback-submit-button-enabled"
                : "user-feedback-submit-button user-feedback-submit-disabled"} >
                {submitLoader ? <Spinner animation="border" variant="light" 
                    className="user-feedback-submit-spinner" /> : "Submit your feedback"}
            </div>
        </div>
    )
}

export default UserFeedbackSubmitButton;