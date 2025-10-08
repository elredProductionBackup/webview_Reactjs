import React from 'react'
import { Spinner } from 'react-bootstrap'

const ChatInputOverlay = ({ sendOverlay, value, sendLoader, sendDisable, setSendLoader,
  sendMessageFromInput, sendMessageFromInputProps, send }) => {
  return (
    <>
      {sendOverlay ? (
        <div className='needs-send-overlay-loader'>
          <Spinner animation="border" variant="danger" size="sm" style={{ width: "20px", height: "20px" }} />
        </div>

      ) : value?.trim()?.length == 0 ? (
        <>
          <Spinner animation="border" variant="light" size="sm" className={sendLoader ? 'show-img-loader needs-top-margin-loader' : 'hide-img-loader'} style={{ position: "absolute", left: "87%" }} />
          <div className="send_btn_click_disabled">
            <img src={sendDisable} alt="" className="disable_btn" onLoad={() => setSendLoader(false)} />
          </div>
        </>
      ) : (
        <>
          <Spinner animation="border" variant="light" size="sm" className={sendLoader ? 'show-img-loader needs-top-margin-loader' : 'hide-img-loader'} style={{ position: "absolute", left: "87%" }} />
          <div onClick={() => sendMessageFromInput(sendMessageFromInputProps)} className="send_btn_click">
            <img src={send} className="enable_btn" alt="" onLoad={() => setSendLoader(false)} />
          </div>
        </>

      )}
    </>
  )
}

export default ChatInputOverlay
