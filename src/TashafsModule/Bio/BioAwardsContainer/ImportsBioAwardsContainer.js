import Skeleton from "react-loading-skeleton";
import NoDataText from "../components/NoDataText/NoDataText";
import skeleton from "../../../assets/images/loadingImage.png";
import { useNavigate } from "react-router-dom";
import { navigateTo, viewAward } from "../bioGlobalFunctions";
import ProfileBioAwardList from "../components/ProfileBioAwardList/ProfileBioAwardList";
import AwardsShimmer from "./AwardsShimmer/AwardsShimmer";

export {
  skeleton,
  NoDataText,
  Skeleton,
  useNavigate,
  navigateTo,
  viewAward,
  ProfileBioAwardList,
  AwardsShimmer,
};
