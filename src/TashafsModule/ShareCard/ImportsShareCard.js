import { useState } from "react";
import "./sharecard.scss";
import logo from "../../assets/images/elredLogo.png";
import cardUser from "../../assets/images/cardUser.svg";
import { useSearchParams } from "react-router-dom";
import ShareCardShimmer from "./components/ShareCardShimmer/ShareCardShimmer";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import useShareCardFetch from "./api/useShareCardFetch";
import ShareCardContainer from "./ShareCardContainer/ShareCardContainer";
import ShareCardPopups from "./ShareCardPopups/ShareCardPopups";

export {
  useState,
  logo,
  cardUser,
  useSearchParams,
  ShareCardShimmer,
  ErrorPage,
  useShareCardFetch,
  ShareCardContainer,
  ShareCardPopups,
};
