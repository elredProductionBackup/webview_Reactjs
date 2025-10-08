import { useEffect , ToastContainer, toast, greenCheck , redCross, Skeleton, Spinner , 
    showFeedbackToast} from "./Imports_UserFeedbackSuccessToast";

const UserFeedbackSuccessToast = ({ showFeedbackSuccess, feedbackResponseType, openDisclaimerModal }) => {
    useEffect(() => {
        if (showFeedbackSuccess) {
            showFeedbackToast(toast, feedbackResponseType, Skeleton, Spinner, greenCheck, redCross) 
        }
    }, [showFeedbackSuccess]); //eslint-disable-line

    if (openDisclaimerModal) return null;
    
    return (
        <div>
            <ToastContainer
                position="bottom-center"
                autoClose={1000}
                limit={1}
                hideProgressBar
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover={false}
                theme="light"
            />
        </div>
    )
}

export default UserFeedbackSuccessToast;