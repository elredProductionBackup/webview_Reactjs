import { lazy } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import CommentsCard from "../../components/comments/CommentsCard";
import CommentsShimmer from "../../components/shimmer/CommentsShimmer";
import RedLoader from "../../../TashafsModule/Profile/components/RedLoader/RedLoader";
import classNames from "classnames";
const AadhaarVerifiedPopup = lazy(()=> import("../../../TashafsModule/Profile/components/AadhaarVerifiedPopup/AadhaarVerifiedPopup"));

export {
    InfiniteScroll,
    CommentsCard,
    CommentsShimmer,
    RedLoader,
    classNames,
    AadhaarVerifiedPopup
}