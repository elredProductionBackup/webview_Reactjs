import React from 'react'
import { Offcanvas } from 'react-bootstrap'
import EmailPopup from '../../../Cards/EmailPopup/EmailPopup'

const ShareCardMailPopup = ({openMail, setOpenMail, userDetail}) => {
  return (
    <Offcanvas
      show={openMail}
      className="bottomPopSmallShareCard"
      placement="bottom"
      onClick={() => setOpenMail(false)}
      onHide={() => setOpenMail(false)}
    >
      <EmailPopup
        email={userDetail?.alternateEmail}
        setOpenMail={setOpenMail}
        status={userDetail?.alternateEmailDisplayStatus}
      />
    </Offcanvas>
  )
}

export default ShareCardMailPopup
