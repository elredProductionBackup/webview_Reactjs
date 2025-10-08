import React, { useState } from 'react'
import './noneeds.scss'
import noneeds from '../../../../../assets/images/noneeds.png'
import { Spinner } from 'react-bootstrap'

const NoNeeds = ({rgba}) => {
  const [logoLoader, setLogoLoader] = useState(true)
  return (
    <div className='noneeds' style={{background: rgba}}>
      <Spinner animation="border" variant="light" size="sm" className={logoLoader ? 'show-img-loader' : 'hide-img-loader'} style={{margin:"95px 0"}}/>
      <img src={noneeds} alt="" className={logoLoader ? 'hide-img-loader' : 'no-image'}  onLoad={()=>setLogoLoader(false)}/>
      <div className='title'>No Needs Available Yet</div>
    </div>
  )
}

export default NoNeeds