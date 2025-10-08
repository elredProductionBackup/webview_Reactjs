import React from 'react'
import { Offcanvas } from 'react-bootstrap'
import WebsitePopup from '../../../Cards/WebsitePopup/WebsitePopup'

const ShareCardWebsitePopup = ({webEnable, setWebEnable, userDetail}) => {
  return (
    <Offcanvas
      show={webEnable}
      className="bottomPopSmallShareCard"
      placement="bottom"
      onClick={() => setWebEnable(false)}
      onHide={() => setWebEnable(false)}


    >
      <WebsitePopup
        data={userDetail}
        setWebEnable={setWebEnable}
        webStatus={userDetail?.websiteDisplayStatus}
        socialStatus={userDetail?.socialMediaDisplayStatus}
        website={userDetail.website}
      />
    </Offcanvas>
  )
}

export default ShareCardWebsitePopup
