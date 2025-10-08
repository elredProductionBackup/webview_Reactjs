import { useRef, useState } from "react";
import "./sendchatmsg.scss";
import sent from "../../../assets/images/sent.svg";
import deleteReply from "../../../assets/images/deleteReply.svg";
import deletedIcon from "../../../assets/images/deletedWhite.svg";
import moment from "moment";
import { deleteLeadsMessage } from "../../Profile/components/Leads/LeadsGlobalFunctions";
import SendChatMsgOverlays from "./SendChatMsgOverlays";
import { capitalNames, handleEnable } from "../../../globalFunctions";
import { Spinner } from "react-bootstrap";

export {
  sent,
  deleteReply,
  deletedIcon,
  moment,
  deleteLeadsMessage,
  SendChatMsgOverlays,
  capitalNames,
  handleEnable,
  Spinner,
  useRef,
  useState,
};
