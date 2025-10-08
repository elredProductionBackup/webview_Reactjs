const UserFeedbackHeader = ({ Spinner, crossIconLoader, backIcon, setCrossIconLoader, 
    submitLoader, setShowUserFeedbackPopup, headerText }) => {
    return (
        <div className="feedback-header-with-cross">
            <Spinner animation="border" variant="light" 
                className={crossIconLoader ? "d-block feedback-cross-button-loader" : "d-none"} />
            <img src={backIcon} alt="" className={crossIconLoader ? "d-none" : "d-block"}
                onLoad={() => setCrossIconLoader(false)} onClick={() => { return submitLoader ? false : setShowUserFeedbackPopup(false) }} />
            <span className="feedback-header-title-text">{headerText}</span>
        </div>
    )
}

export default UserFeedbackHeader;