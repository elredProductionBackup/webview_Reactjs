import React, { useState } from 'react'
import mobile from '../../../assets/images/mobile2x.png'
import googlePlay from '../../../assets/images/Google Play.png'
import appleIOS from '../../../assets/images/Apple-play.png'
import elred from '../../../assets/images/el.png'
import { Offcanvas, Spinner } from 'react-bootstrap'
import { downloadElred, openPlaystore } from '../../../globalFunctions'
import { isMacOs } from 'react-device-detect'

const AlreadyAccountPopup = ({ show, handleClose, downloadURL }) => {
    const [imageLoaded, setImageLoaded] = useState(false)

    const handleImageLoad = () => {
        setImageLoaded(true)
    }

    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    return (
        <Offcanvas show={show} onHide={handleClose} placement='bottom' className='offerings_screen'>
            <div className='main_div_canvas'>
                <div className='top_canvas_section'>
                    <span className='skipOfferings' onClick={handleClose}>Skip</span>
                    <hr id='popup_hr' />
                    <img src={elred} alt="" />
                </div>
                <div className="wallpaper">
                    {!imageLoaded && <Spinner animation="border" />}
                    <img src={mobile} alt="" onLoad={handleImageLoad} style={{ display: imageLoaded ? 'block' : 'none' }} />
                </div>
                <div className='content_div_canvas'>
                    <div className='txt1'>
                        An account with the registered email/phone already exists.
                    </div>
                    <div className="description">
                        Please download the el RED app to get the best experience
                    </div>
                    {/* <img src={isIOS ? appleIOS : googlePlay} alt="" onClick={openPlaystore} /> */}
                    {/* <img src={isIOS || isMacOs ? appleIOS : googlePlay} alt="" /> */}
                    {
                        isIOS || isMacOs ?
                            <img src={appleIOS} alt='elred-appstore' onClick={() => downloadElred(downloadURL?.appstoreURL)} /> :
                            <img src={googlePlay} alt='elred-appstore' onClick={() => downloadElred(downloadURL?.playstoreURL)} />
                    }
                </div>
            </div>
        </Offcanvas>
    )
}

export default AlreadyAccountPopup
