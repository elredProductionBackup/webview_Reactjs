import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AboutData from "../components/AboutData/AboutData";
import Skeleton from "react-loading-skeleton";
import back from "../../../assets/images/ic_back.svg";
import { navigateToPath } from "../../../globalFunctions";
import { Spinner } from "react-bootstrap";

export {
  useState,
  useNavigate,
  AboutData,
  Skeleton,
  back,
  navigateToPath,
  Spinner,
};
