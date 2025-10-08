import { useEffect, useState } from "react";
import "./user-feedback-popup.scss";
import { clearToasts } from "react-simple-toasts";
import backIcon from "../../../assets/images/ic_back.svg";
import { Spinner } from "react-bootstrap";
import { emojiData } from "./EmojiData/EmojiData";
import UserFeedbackSuccessToast from "./UserFeedbackSuccessToast/UserFeedbackSuccessToast";
import { validateFeedbackInput } from "../../../globalFunctions";
import toast from "react-simple-toasts";
import emojiCheckIcon from "../../../assets/images/selected_emoji_check.svg";
import FeedbackStaticTextTop from "./FeedbackStaticTextTop/FeedbackStaticTextTop";
import UserFeedbackEmojiSingle from "./UserFeedbackEmojiSingle/UserFeedbackEmojiSingle";
import UserFeedbackHeader from "./UserFeedbackHeader/UserFeedbackHeader";
import UserFeedbackInput from "./UserFeedbackInput/UserFeedbackInput";
import UserFeedbackSubmitButton from "./UserFeedbackSubmitButton/UserFeedbackSubmitButton";
import { handleTextInput, handleSubmitFeedback } from "./UserFeedbackFunctions/UserFeedbackFunctions";

export { 
    useEffect, 
    useState, 
    clearToasts, 
    backIcon, 
    Spinner, 
    emojiData, 
    UserFeedbackSuccessToast, 
    validateFeedbackInput,
    toast, 
    emojiCheckIcon, 
    FeedbackStaticTextTop, 
    UserFeedbackEmojiSingle, 
    UserFeedbackHeader, 
    UserFeedbackInput, 
    UserFeedbackSubmitButton,
    handleTextInput, 
    handleSubmitFeedback
};