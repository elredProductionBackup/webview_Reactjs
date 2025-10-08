import React, { useState } from 'react'
import './NeedAttachment.scss'
import { Spinner } from 'react-bootstrap';
import back from '../../assets/images/back_light.svg'
import {useNavigate, useLocation} from 'react-router-dom'

const NeedAttachment = () => {
    const [backLoader, setBackLoader] = useState(true)
    const location = useLocation()
    const navigate = useNavigate()
    const [noAttachmentLoader, setNoAttachmentLoader] = useState(true)
  return (
    <div className='need_attachment'>
        <div className='needattachment_header'>
            <div className='left'>
                <div className={backLoader ? 'image_div' : 'image_div cp'} onClick={()=>backLoader ? null : navigate(-1)}>
                    <Spinner animation="border" variant="light" size="sm" className={backLoader ? 'show-img-loader needs-top-margin-loader' : 'hide-img-loader'} />
                    <img src={back} alt="" className={backLoader ? 'hide-img-loader' : 'show-image-after-loader needs-top-margin'} onLoad={() => setBackLoader(false)} />
                </div>
                <div className='title'>Attachment</div>
            </div>
        </div>
        <div className='need_attachment_div'>
            <Spinner animation="border" variant="danger" size="md" className={ noAttachmentLoader ? 
                'show-img-loader':"hiding-img-loader "}/>
            <img src={location?.state} alt="" onLoad={() => setNoAttachmentLoader(false)}
                 className={!noAttachmentLoader ? 'd-block' : 'hide-img-loader'}/>
        </div>
    </div>
  )
}

export default NeedAttachment