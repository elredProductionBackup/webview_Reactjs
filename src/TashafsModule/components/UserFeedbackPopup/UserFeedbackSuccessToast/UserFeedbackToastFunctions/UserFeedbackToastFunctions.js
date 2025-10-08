export const showFeedbackToast = (toast, feedbackResponseType, Skeleton, Spinner, greenCheck, redCross) => {
    const resolveWithSomeData = new Promise((resolve) => setTimeout(() => resolve("promise"), 1000));
    
        toast.promise(
            resolveWithSomeData,
            {
                pending: {
                    render() {
                        return (
                            <div className="feedback-success-container">
                                <div className="feedback-success-text-container">
                                    <span className={feedbackResponseType === "success" ? "feedback-submitted-main-text feedback-submitted-main-text-green" :
                                        "feedback-submitted-main-text feedback-submitted-main-text-red"
                                    }>
                                       <Skeleton width={100} height={12} baseColor={"#242939"} />
                                    </span>
                                    <span className="feedback-submitted-sub-text">
                                      <Skeleton width={160} height={12} baseColor={"#242939"} />
                                    </span>
                                </div>
                            </div>
                        )
                    },
                    icon: <div className='success-toast-load'><Skeleton circle height={36} width={36} baseColor={"#242939"}
                    /> <Spinner variant="danger" size="sm" className="feedback-success-cross-load" />
                    </div>,
    
                },
                success: {
                    render() {
                        return (
                            <div className="feedback-success-container">
                                <div className="feedback-success-text-container">
                                    <span className={feedbackResponseType === "success" ? "feedback-submitted-main-text feedback-submitted-main-text-green" :
                                        "feedback-submitted-main-text feedback-submitted-main-text-red" }>
                                        {feedbackResponseType === "success" ? "Feedback submitted" :  "Error!" }
                                    </span>
                                    <span className="feedback-submitted-sub-text">
                                        {feedbackResponseType === "success" ? "Your feedback submitted successfully" : "Something went wrong"}
                                    </span>
                                </div>
                            </div>
                        )
                    },
                    icon: <img src={feedbackResponseType === "success" ? greenCheck : redCross } 
                        alt="" className="feedback-success-green-check-icon" />
                },
                error: {
                    render() {
                        return  <div className="feedback-success-container">
                        <div className="feedback-success-text-container">
                        <span className={feedbackResponseType === "success" ? "feedback-submitted-main-text feedback-submitted-main-text-green" :
                            "feedback-submitted-main-text feedback-submitted-main-text-red" }>
                                {feedbackResponseType === "success" ? "Feedback submitted" :  "Error!" }
                            </span>
                            <span className="feedback-submitted-sub-text">
                                {feedbackResponseType === "success" ? "Your feedback submitted successfully" : "Something went wrong"}
                            </span>
                        </div>
                    </div>
                    },
                    icon: <img src={feedbackResponseType === "success" ? greenCheck : redCross } 
                        alt="" className="feedback-success-green-check-icon" />
                }
            }
        )
       }