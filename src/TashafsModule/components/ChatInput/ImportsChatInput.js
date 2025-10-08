import { Spinner } from "react-bootstrap";
import closeIcon from "../../../assets/images/x-grey.svg";
import emoji from "../../../assets/images/emoji.svg";
import send from "../../../assets/images/send.svg";
import sendDisable from "../../../assets/images/greySend.svg";
import {
  onKeyDownHandler,
  sendMessageFromInput,
} from "../../Profile/components/Needs/needsGlobalFunctions";
import { useNavigate } from "react-router-dom";
import { isMobile } from "react-device-detect";
import OwnNeedError from "../../Profile/components/Needs/NeedsCard/OwnNeedError/OwnNeedError";
import EmojiPopup from "../EmojiPopup/EmojiPopup";
import {
  openEmojiAtPosition,
  setCurrentPosval,
} from "../../Profile/components/Leads/LeadsGlobalFunctions";

export {
  Spinner,
  closeIcon,
  emoji,
  send,
  sendDisable,
  onKeyDownHandler,
  sendMessageFromInput,
  useNavigate,
  isMobile,
  OwnNeedError,
  EmojiPopup,
  openEmojiAtPosition,
  setCurrentPosval,
};
