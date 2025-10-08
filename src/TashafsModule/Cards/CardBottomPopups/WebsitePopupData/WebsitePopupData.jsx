import React from 'react'
import { Offcanvas } from 'react-bootstrap'
import WebsitePopup from '../../WebsitePopup/WebsitePopup'

const WebsitePopupData = ({webEnable, setWebEnable, data, networkCardPopupStatus }) => {
    return (
        <Offcanvas show={webEnable} className="bottomPopSmall" placement="bottom" onClick={() => setWebEnable(false)}>
            <WebsitePopup
                data={data}
                setWebEnable={setWebEnable}
                webStatus={networkCardPopupStatus ? true : data?.cardInfo?.[0]?.websiteDisplayStatus}
                socialStatus={networkCardPopupStatus ? true : data?.cardInfo?.[0]?.socialMediaDisplayStatus}
                website={data?.websiteURL}
            />
        </Offcanvas>
    )
}

export default WebsitePopupData
