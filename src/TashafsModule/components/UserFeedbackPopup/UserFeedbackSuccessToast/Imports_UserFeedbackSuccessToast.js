import 'react-toastify/dist/ReactToastify.css';
import './user-feedback-success-toast.scss';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import greenCheck from "../../../../assets/images/feedback-success-check-greeen.svg";
import redCross from "../../../../assets/images/feedback-error-cross-red.svg";
import Skeleton from 'react-loading-skeleton';
import { Spinner } from 'react-bootstrap';
import { showFeedbackToast } from "./UserFeedbackToastFunctions/UserFeedbackToastFunctions";
// import crossIcon from "../../../../assets/images/feedback-success-toast-cross.svg";

export { useEffect , ToastContainer, toast, greenCheck , redCross, Skeleton, Spinner, showFeedbackToast };