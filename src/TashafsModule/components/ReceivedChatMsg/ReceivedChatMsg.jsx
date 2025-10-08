import React from 'react'
import './receivedchatmsg.scss'
import moment from 'moment'
// import deletedIcon from '../../../assets/images/deletedBlack.svg'
import deletedIcon from "../../../assets/images/deletedWhite.svg";
import { capitalNames } from '../../../globalFunctions'
import FormatmessageandLink from '../SendChatMsg/SendChatMsgData/FormatmessageandLink'

const ReceivedChatMsg = ({ msg, date, isDeleted, firstname, lastname }) => {
    
    const username = firstname?.concat(" "+lastname)?.length <= 20 ? firstname?.concat(" "+lastname) 
                    : (firstname?.concat(" "+lastname)?.slice(0,20)+'...')

    return (
        <>
        <div className="chat_name">{firstname?.[0]}</div>
        <div className='received_chat_msg'>
            {
                isDeleted ?
                    <div className='deleted_div'>
                        <img src={deletedIcon} alt="" />
                        <div className='deleted_msg'>This message was deleted</div>
                    </div> :
                    <div className="msg">
                        <div className='username'>{capitalNames(username)}</div>
                        <div className='message'> <FormatmessageandLink msg={msg}/></div>
                    </div>
            }
            <div className="date_status">
                <span className='date'>{moment(date).format('LT')}</span>
            </div>
        </div>
        </>
    )
}

export default ReceivedChatMsg
