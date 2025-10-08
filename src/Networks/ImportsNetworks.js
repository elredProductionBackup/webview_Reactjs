import "./networks.scss";
import Share from "../TashafsModule/Profile/components/Share/Share";
import TopHeader from "../TashafsModule/Profile/components/TopHeader/TopHeader";
import UserDetails from "../TashafsModule/Profile/components/UserDetails/UserDetails";
import BrandingHeader from "../TashafsModule/components/BrandingHeader/BrandingHeader";
import Network_MiniCardThumbnail from "../components/Network_MiniCardThumbnail/Network_MiniCardThumbnail";
import "./networks.scss";
import Network_Ratings from "../components/Network_Ratings/Network_Ratings";
import NetworkShimmer from "./NetworkShimmer";
import NetworkComments from "../components/NetworkComments/Comments/ProfileComments";
import NetworkCardPopup from "../components/Network_CardPopup/NetworkCardPopup";
import useFetchNetwork from "./hooks/useFetchNetwork";
import useFetchNetworkMinicard from "./hooks/useFetchNetworkMinicard";
import useFetchNetworkRatings from "./hooks/useFetchNetworkRatings";
import Feedback from "../components/Feedback/Feedback";
import UserFeedbackPopup from "../TashafsModule/components/UserFeedbackPopup/UserFeedbackPopup";
import { useSearchParams } from "react-router-dom";
import { ErrorPage } from "../TashafsModule/ShareCard/ImportsShareCard";
import { AadharPopupContext } from "../TashafsModule/Profile/components/AadhaarVerifiedPopup/AadharPopupContext";
import { isIOS, isMacOs } from "react-device-detect";
import Constants from "../utils/Contants";

export {
  Share,
  TopHeader,
  UserDetails,
  BrandingHeader,
  Network_MiniCardThumbnail,
  Network_Ratings,
  NetworkShimmer,
  NetworkComments,
  NetworkCardPopup,
  useFetchNetwork,
  useFetchNetworkMinicard,
  useFetchNetworkRatings,
  Feedback,
  UserFeedbackPopup,
  useSearchParams,
  ErrorPage,
  AadharPopupContext,
  isIOS,
  isMacOs,
  Constants,
};
