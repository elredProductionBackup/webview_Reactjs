import React, { useState } from 'react'
import noleads from '../../../../../assets/images/noleads.png'
import './noleads.scss'
import { Spinner } from 'react-bootstrap'


const NoLeads = ({ rgba }) => {
  const [logoLoader, setLogoLoader] = useState(true)
  return (
    <div className='noleads' style={{ background: rgba }}>
      <Spinner animation="border" variant="light" size="sm" className={logoLoader ? 'show-img-loader' : 'hide-img-loader'} style={{ margin: "95px 0" }} />
      <img src={noleads} alt="" className={logoLoader ? 'hide-img-loader' : 'no-image'} onLoad={() => setLogoLoader(false)} />
      <div className='title'>No Offerings Available Yet</div>
    </div>
  )
}

export default NoLeads
