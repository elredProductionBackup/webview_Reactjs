import React from 'react'
import { Offcanvas } from 'react-bootstrap'
import PhoneNumberPopup from '../../../Cards/PhoneNumberPopup/PhoneNumberPopup'

const ShareCardPhonePopup = ({enable, setEnable, userDetail}) => {
  return (
    <Offcanvas
      show={enable}
      className="bottomPopSmallShareCard"
      placement="bottom"
      onClick={() => setEnable(false)}
      onHide={() => setEnable(false)}
    >
      <PhoneNumberPopup
        number={userDetail?.alternatePhone}
        status={userDetail?.alternatePhoneDisplayStatus}
        setEnable={setEnable}
        share={true}
      />
    </Offcanvas>
  )
}

export default ShareCardPhonePopup
