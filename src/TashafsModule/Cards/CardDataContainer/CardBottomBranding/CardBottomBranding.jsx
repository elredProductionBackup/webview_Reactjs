import React, { useState } from 'react'
import { Spinner } from 'react-bootstrap'

const CardBottomBranding = ({ logo, cardUser, handleClose, isNetworkShareCard, networkShareUrl, handleOpenNetworkUrl }) => {
    const[profileLoader,setprofileLoader]=useState(true)
    return (
        <div className="card-branding">
            <div className="logo-elred">
                <img src={logo} alt="" />
            </div>
            <div className="main-card-profile" onClick={isNetworkShareCard ? () => handleOpenNetworkUrl(networkShareUrl) : handleClose}>
                <div className="profile-div" >
                <Spinner animation="border" variant="light" size="sm" className={profileLoader ? 'showing-img-loader' : 'hiding-img-loader'} />
                    <img src={cardUser} alt=""  className={!profileLoader ? 'showing-img-loader' : "hiding-img-loader"}    onLoad={() => setprofileLoader(false)} />
                </div>
                <span className='profile_txt'>Profile</span>
            </div>
        </div>
    )
}

export default CardBottomBranding
