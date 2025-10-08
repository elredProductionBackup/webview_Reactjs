import closeIcon from "../../../assets/images/x-grey.svg";
import emoji from "../../../assets/images/emoji.svg";
import send from "../../../assets/images/send.svg";
import sendDisable from "../../../assets/images/greySend.svg";
import { isMobile } from 'react-device-detect';
import EmojiPopup from "../EmojiPopup/EmojiPopup";
import { LeadsInput } from './leadsInputWidgets/LeadsInput'
import { Spinner } from 'react-bootstrap'
import { onKeyDownHandler, setCurrentPosval } from '../../Profile/components/Leads/LeadsGlobalFunctions'
import { Sendbutton } from './leadsInputWidgets/Sendbutton'
import { InputEmojiIcon } from './leadsInputWidgets/InputEmojiIcon'

export {
  closeIcon,
  emoji,
  send,
  sendDisable,
  isMobile,
  EmojiPopup,
  LeadsInput,
  Spinner,
  Sendbutton,
  InputEmojiIcon,
  onKeyDownHandler,
  setCurrentPosval,
} 