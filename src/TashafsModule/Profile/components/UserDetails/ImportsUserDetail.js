import { useState } from "react";
import "./userdetails.scss";
import designationImg from "../../../../assets/images/designation.svg";
import avatar from "../../../../assets/images/avatar.png";
import locate from "../../../../assets/images/locate.svg";
import bluetick from "../../../../assets/images/blue_tick.svg";
import { calcTextLength, handleMapClick } from "../../../../globalFunctions";
import { Spinner } from "react-bootstrap";
import DesignationListProfile from "../../../components/DesignationListProfile/DesignationListProfile";
import defaultGroupImg from "../../../../assets/images/group_default.png" 

export {
  useState,
  designationImg,
  avatar,
  locate,
  bluetick,
  calcTextLength,
  handleMapClick,
  Spinner,
  DesignationListProfile,
  defaultGroupImg
};
