import { useContext, useEffect } from "react";
import "../../../TashafsModule/Profile/components/Comments/comments.scss";
import { useSearchParams } from "react-router-dom";
import ScrollComments from "../../../TashafsModule/Profile/components/Comments/ScrollComments";
import CardHeader from "../../../TashafsModule/Profile/components/Comments/CardHeader";
import CommentsShimmer from "../../../UmeshModule/components/shimmer/CommentsShimmer";
import { useCommentPaginations } from "./api/useCommentsPagination";
import { AadharPopupContext } from '../../../TashafsModule/Profile/components/AadhaarVerifiedPopup/AadharPopupContext'

export {
    useContext, 
    useEffect,
    useSearchParams,
    ScrollComments,
    CardHeader,
    CommentsShimmer,
    useCommentPaginations,
    AadharPopupContext
}