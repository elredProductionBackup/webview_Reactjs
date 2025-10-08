import React, { useEffect } from 'react'
import SkillsPopupData from './SkillsPopupData/SkillsPopupData'
import PhonePopupData from './PhonePopupData/PhonePopupData'
import EmailPopupData from './EmailPopupData/EmailPopupData'
import AddressPopupData from './AddressPopupData/AddressPopupData'
import WebsitePopupData from './WebsitePopupData/WebsitePopupData'
import { clearToasts } from 'react-simple-toasts'

const CardBottomPopups = ({open, setOpen, data, enable, setEnable, openMail, 
    setOpenMail, locationEnable, setLocationEnable, webEnable, setWebEnable, networkCardPopupStatus
}) => {

    useEffect(() => {
        if (open || enable || openMail || locationEnable || webEnable) clearToasts();
    }, [open, enable, openMail, locationEnable, webEnable])

    return (
        <>
           <SkillsPopupData open={open} setOpen={setOpen} data={data}/>
           <PhonePopupData enable={enable} setEnable={setEnable} data={data} networkCardPopupStatus={networkCardPopupStatus} />
           <EmailPopupData openMail={openMail} setOpenMail={setOpenMail} data={data} networkCardPopupStatus={networkCardPopupStatus} />
           <AddressPopupData locationEnable={locationEnable} setLocationEnable={setLocationEnable} data={data} networkCardPopupStatus={networkCardPopupStatus} />
           <WebsitePopupData webEnable={webEnable} setWebEnable={setWebEnable} data={data} networkCardPopupStatus={networkCardPopupStatus} />
        </>
    )
}

export default CardBottomPopups
