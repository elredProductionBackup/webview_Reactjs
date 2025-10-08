import  { useEffect } from "react";
import Header from "../../../UmeshModule/components/header/Header";
import "../../../UmeshModule/comments/comments.scss";
import CommentsScroll from "../../../UmeshModule/comments/component/CommentsScroll";
import { useCommentPaginations } from "./api/useCommentsPagination";

export {
    useEffect,
    Header,
    CommentsScroll,
    useCommentPaginations
}