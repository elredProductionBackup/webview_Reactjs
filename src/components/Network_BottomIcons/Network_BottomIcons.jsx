import React from 'react'
import call from '../../assets/images/call.svg'
import globe from '../../assets/images/globe.svg'
import map from '../../assets/images/location.svg'
import mail from '../../assets/images/mail.svg'


const NetworkBottomIcons = () => {
    return (
        <div className="network_bottomBar">
            <div className="wrapper">
                <img src={mail} alt="" />
            </div>
            <div className="wrapper">
                <img src={call} alt="" />
            </div>
            <div className="wrapper">
                <img src={map} alt="" />
            </div>
            <div className="wrapper">
                <img src={globe} alt="" />
            </div>
        </div>
    )
}

export default NetworkBottomIcons
