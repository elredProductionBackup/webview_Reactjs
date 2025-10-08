import React from 'react'
import { sendMessageFromInput } from '../../../Profile/components/Leads/LeadsGlobalFunctions'

export const Sendbutton=({ sendOverlay, Spinner, value, sendDisable, sendLoader, setSendLoader, sendBlueLoader, send, setSendBlueLoader, accessEmpty, data, navigate, leadId, sendMessageProps, userCode, setName, name })=> {
    return (
        <>
            {sendOverlay ? (
                <div className='send_btn_click_leads'>
            <Spinner  animation="border" style={{ width: "20px", height: "20px" }} variant="danger" className=' msgLoad' size='sm' />

                </div>) : (
                value?.trim()?.length === 0 ?
                    <>
                        <div className="send_btn_click_disabled_leads">
                        <Spinner animation="border" variant="secondary" size="sm" className={sendLoader ? 'show-img-loader msgLoad' : 'hide-img-loader'} />
                        <img src={sendDisable} className={!sendLoader ? 'show-image-after-loader send-Default' : 'hide-img-loader'} alt="" onLoad={() => setSendLoader(false)} />
                        </div>
                    </> : <>
                        <div className='send_btn_click_leads' onClick={(e) => sendMessageFromInput(accessEmpty, data, navigate, value, leadId, sendMessageProps, userCode, setName, name)}>
                        <Spinner animation="border" variant="secondary" size="sm" className={sendBlueLoader ? 'show-img-loader msgLoad' : 'hide-img-loader'} />

                        <img  src={send}
                            className={!sendBlueLoader ? 'show-image-after-loader imgSend' : 'hide-img-loader'} onLoad={() => setSendBlueLoader(false)}
                            alt=""  />
                        </div>
                       

                    </>)}
        </>
    )
}
