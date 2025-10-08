import {ShareCardAddressPopup, ShareCardMailPopup, ShareCardPhonePopup, 
        ShareCardSkillsPopup, ShareCardWebsitePopup} from './ImportsShareCardPopups'

const ShareCardPopups = ({ open, setOpen, userDetail, enable, setEnable, openMail, setOpenMail, locationEnable,
    setLocationEnable, webEnable, setWebEnable }) => {

    const skillsPopupProps = { open, setOpen, userDetail }
    const phonePopupProps = { enable, setEnable, userDetail }
    const mailPopupProps = { openMail, setOpenMail, userDetail }
    const addressPopupProps = { locationEnable, setLocationEnable, userDetail }
    const websitePopupProps = { webEnable, setWebEnable, userDetail }

    return (
        <>
            <ShareCardSkillsPopup {...skillsPopupProps} />
            <ShareCardPhonePopup {...phonePopupProps} />
            <ShareCardMailPopup {...mailPopupProps} />
            <ShareCardAddressPopup {...addressPopupProps} />
            <ShareCardWebsitePopup {...websitePopupProps} />
        </>
    )
}

export default ShareCardPopups
