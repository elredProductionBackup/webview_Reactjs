import React from 'react'
import { Button } from 'react-bootstrap'
import { downloadElred } from '../../../globalFunctions'

import brand_logo from '../../../assets/images/logo_title.svg'

const BrandingHeader = ({ link }) => {
    return (
        <div className="branding_header">
            <div className='logo'>
                <img src={brand_logo} alt="" />
            </div>
            <Button className='cta_download' onClick={() => downloadElred(link)}>Download app</Button>
        </div>
    )
}

export default BrandingHeader
