const UserFeedbackInput = ({ formInput, handleTextInput, submitLoader }) => {
    return (
        <div className="user-feedback-form-input-container">
            <textarea placeholder="Type here..." value={formInput} onChange={handleTextInput}
                className="user-feedback-form-input" spellCheck="false" disabled={submitLoader} />
        </div>
    )
}

export default UserFeedbackInput;