import React from 'react'
import SkillsPopup from '../../SkillsPopup/SkillsPopup'
import { Offcanvas } from 'react-bootstrap'

const SkillsPopupData = ({open, setOpen, data}) => {
    return (
        <Offcanvas show={open} className="bottomPop" placement="bottom">
            <SkillsPopup setOpen={setOpen} data={data} />
        </Offcanvas>
    )
}

export default SkillsPopupData
