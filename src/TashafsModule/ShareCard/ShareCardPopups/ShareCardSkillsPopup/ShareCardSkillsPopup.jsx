import React from 'react'
import { Offcanvas } from 'react-bootstrap'
import SkillsPopup from '../../../Cards/SkillsPopup/SkillsPopup'

const ShareCardSkillsPopup = ({ open, setOpen, userDetail }) => {
    return (
        <Offcanvas show={open} className="bottomPop" placement="bottom">
            <SkillsPopup setOpen={setOpen} data={userDetail} />
        </Offcanvas>
    )
}

export default ShareCardSkillsPopup
