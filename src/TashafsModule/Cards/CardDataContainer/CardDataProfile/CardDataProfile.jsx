import React, { useState } from 'react'
import { calcTextLength, handleShare, handleShareProfile } from '../../../../globalFunctions'
import { Spinner } from 'react-bootstrap'
import DesignationListProfile from '../../../components/DesignationListProfile/DesignationListProfile'
import avatar from '../../../../assets/images/avatar.png'
import blueTick from "../../../../assets/images/blue_tick.svg"
import Skeleton from 'react-loading-skeleton'
const CardDataProfile = ({ share, dpURL, firstname, lastname, title, newAddress, data, setShowVerifiedPopup }) => {
    const [shareLoader, setShareLoader] = useState(true)
    const [profileImageLoader, setprofileImageLoader] = useState(true)
    const baseColor = '#242939';
    return (
        <>
            <div className="top-sharing">
                <div className="share-icon" onClick={() => handleShareProfile(data)}>
                    <Spinner animation="border" variant="light" size="sm" className={shareLoader ? 'showing-img-loader' : 'hiding-img-loader'} />
                    <img src={share} alt="" className={!shareLoader ? 'showing-img-loader' : "hiding-img-loader"} onLoad={() => setShareLoader(false)} />
                </div>
                <span className="title" onClick={() => handleShareProfile(data)}>Share</span>
            </div>
            <div className="profile-image">
            <Skeleton circle height={127} width={127} baseColor={baseColor} className={profileImageLoader ? 'showing-img-loader' : 'hiding-img-loader'} />

                <img src={dpURL == "" ? avatar : dpURL} alt="" 
                    className={profileImageLoader ? 'd-none' : 
                    data?.aadhaarVerifiedStatus ? "profile-image-border-blue" : "profile-image-border-white"} onLoad={() => setprofileImageLoader(false)} />
            </div>
            <div className="name-div">
                <div className="title-name">{calcTextLength(50, firstname, 'name')}</div>
                <div className="sub-name">
                    {calcTextLength(50, lastname, 'name')}
                </div>
            </div>
            {data?.aadhaarVerifiedStatus && <div className="verified-user-card-icon-check-container"
                onClick={() => setShowVerifiedPopup(true)}><img src={blueTick} alt="" className="verified-user-card-icon-check" /></div>}
            <div className="designations">
                <div className="title-designation">
                    <DesignationListProfile designation={title} maxWidth={125} /></div>
                <div className="address">
                    {newAddress?.length <= 28 ? newAddress : newAddress?.slice(0, 28) + '...'}
                </div>
            </div>
        </>
    )
}

export default CardDataProfile
