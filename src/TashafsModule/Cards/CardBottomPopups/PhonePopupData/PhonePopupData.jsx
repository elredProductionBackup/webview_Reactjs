import React from 'react'
import { Offcanvas } from 'react-bootstrap'
import PhoneNumberPopup from '../../PhoneNumberPopup/PhoneNumberPopup'

const PhonePopupData = ({enable, setEnable, data, networkCardPopupStatus }) => {
    return (
        <Offcanvas
            show={enable}
            className="bottomPopSmall"
            placement="bottom"
            onClick={() => setEnable(false)}
        >
            <PhoneNumberPopup
                number={data?.phone}
                status={networkCardPopupStatus ? true : data?.cardInfo?.[0]?.alternatePhoneDisplayStatus}
                setEnable={setEnable}
            />
        </Offcanvas>
    )
}

export default PhonePopupData
