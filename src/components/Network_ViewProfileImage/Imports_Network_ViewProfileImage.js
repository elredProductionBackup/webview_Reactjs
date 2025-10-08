import { Spinner } from "react-bootstrap";
import "../../TashafsModule/Profile/components/ViewProfilePicture/view-profile-picture.scss";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import back from '../../assets/images/ic_back.svg'
import Skeleton from "react-loading-skeleton";
import { clearToasts } from "react-simple-toasts";
import useFetchNetwork from "../../Networks/hooks/useFetchNetwork";
import Feedback from "../Feedback/Feedback";
import UserFeedbackPopup from "../../TashafsModule/components/UserFeedbackPopup/UserFeedbackPopup";
import ErrorPage from "../../TashafsModule/components/ErrorPage/ErrorPage";
import Constants from "../../utils/Contants";
import defaultGroupImg from "../../assets/images/group_default.png" 

export { Spinner, useNavigate, useSearchParams, useEffect, useState, back, Skeleton, clearToasts, 
    useFetchNetwork, Feedback, UserFeedbackPopup, ErrorPage, Constants, defaultGroupImg };