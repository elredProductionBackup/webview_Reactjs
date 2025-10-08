import { Spinner } from 'react-bootstrap'
import FormatmessageandLink from './FormatmessageandLink';
import {debounceScrollDelete} from "../../../Profile/components/Needs/needsGlobalFunctions";

const SendChatMsgData = ({ overlay, sendMsgClass, isDeleted, chatLoader, scrollContainerHeight, scrollMsgToBottom, deleteRef, handleEnable,
    id, setEnable, enable, setOverLay, selectedChat, setTopOverLay, zChat, setLoader, topOverlay, setShowscrollDate,
    deletedIcon, userName, capitalNames, username, msg, moment, date, sent, setDeletePopup, deleteReply, loader
}) => {

    return (
        <>
            <div className={overlay ? 'send_chat_active' : ''} >
                <div className={overlay ? `send_chat_msg ${sendMsgClass}` : `send_chat_msg send-msg-right ${sendMsgClass}`} onClick={isDeleted || chatLoader ? null : (e) => {
                    if (e.target.clientHeight >= scrollContainerHeight - 40 ||
                        window.innerHeight - e.target.getBoundingClientRect().bottom <= 167) debounceScrollDelete(deleteRef)
                    handleEnable(id, setEnable, enable, setOverLay, selectedChat, setTopOverLay, zChat)
                    setOverLay(!overlay)
                    setLoader(true)
                    setEnable(!enable)
                    setTopOverLay(!topOverlay)
                    setShowscrollDate(false)
                }}>
                    {isDeleted ? <div className='deleted_div'>
                        <img src={deletedIcon} alt="" />
                        <div className='deleted_msg'>You deleted this message</div>
                    </div> :
                        <div className="msg">
                            <div className='chat_username'>{username ? capitalNames(username) : capitalNames(userName)}</div>
                            <div className='message'>  <FormatmessageandLink msg={msg}/>  </div>
                        </div>}
                    <div className="date_status">
                        <span className='date'>{moment(date).format('LT')}</span>
                        {!isDeleted && <span className='tick'><img src={sent} alt="" /></span>}
                    </div>
                </div>
            </div>
            <span ref={deleteRef} className='delete-div' >
                {enable && <div className='button_div_delete' >
                    {overlay ?
                        <div className='btn_deleting' onClick={() => { setDeletePopup(true) }}> Delete
                            <span>
                                <Spinner animation="border" variant="danger" size="sm" className={loader ? 'show-img-loader' : 'hide-img-loader'} />
                                <img src={deleteReply} alt="" className={loader ? 'hide-img-loader' : 'show-image-after-loader'} onLoad={() => setLoader(false)} />
                            </span>
                        </div> : null}
                </div>
                }
            </span>
        </>
    )
}

export default SendChatMsgData
