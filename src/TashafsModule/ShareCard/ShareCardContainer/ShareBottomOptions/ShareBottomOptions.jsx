import React, { useState } from 'react'
import BottomOptions from '../../../Cards/BottomOptions/BottomOptions'
import { handleOpenNewUrl } from '../../shareCardFunctions'
import { Spinner } from 'react-bootstrap'

const ShareBottomOptions = ({ setOpen, setEnable, setOpenMail, setLocationEnable, setWebEnable, logo,
    cardUser, userDetail }) => {
        const [profileLoader, setprofileLoader] = useState(true)

    return (
        <>
            <BottomOptions
                setOpen={setOpen}
                setEnable={setEnable}
                setOpenMail={setOpenMail}
                setLocationEnable={setLocationEnable}
                setWebEnable={setWebEnable}
                isShareCard={true}
            />
            <div className="card-branding-new">
                <div className="logo-elred">
                    <img src={logo} alt="" />
                </div>
                <div className="main-card-profile" onClick={() => handleOpenNewUrl(userDetail)}>
                    <div className="profile-div" >
                    <Spinner animation="border" variant="light" size="sm" className={profileLoader ? 'showing-img-loader' : 'hiding-img-loader'} />

                        <img src={cardUser} alt="" className={!profileLoader ? 'showing-img-loader' : "hiding-img-loader"} onLoad={() => setprofileLoader(false)} />
                    </div>
                    <span className='shareTxt'>Profile</span>
                </div>
            </div>
        </>
    )
}

export default ShareBottomOptions
