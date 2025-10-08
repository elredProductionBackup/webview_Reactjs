import React from 'react'
import P from '../../../../../../assets/images/P.svg'
import call from '../../../../../../assets/images/call.svg'
import globe from '../../../../../../assets/images/globe.svg'
import map from '../../../../../../assets/images/location.svg'
import mail from '../../../../../../assets/images/mail.svg'


const CardBottomOptions = () => {
    return (
        <div className="bottomBar">
            <div className="wrapper">
                <img src={P} alt="" className='mini-card-thumb-superskill'/>
            </div>
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

export default CardBottomOptions
