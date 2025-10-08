import React, { useState } from 'react'
import './needscardshimmer.scss'
import back from '../../../../../../assets/images/back_light.svg'
import downloadIcon from '../../../../../../assets/images/downloads.svg'
import { Spinner } from 'react-bootstrap';
import NeedsCardBottomShimmer from './NeedsCardBottomShimmer'
import { isIOS } from 'react-device-detect';


const NeedsCardShimmer = () => {
  const color = "#242939";
  const highlightColor = "#1e212b";
  const [logoLoader, setLogoLoader] = useState(true)
  const [backLoader, setBackLoader] = useState(true)

  return (
    <div className='needs_card_shimmer'>
      <div className='needs_card_shimmer_title'>
        <div className='left_title'>
          {/* <Spinner animation="border" variant="light" size="sm" className={backLoader ? 'show-img-loader needs-top-margin-loader' : 'hide-img-loader'} />
          <img src={back} alt="" className={backLoader ? 'hide-img-loader' : 'show-image-after-loader needs-top-margin'} onLoad={() => setBackLoader(false)} /> */}
          <span className='send'>Send a reply</span>
        </div>
        <div className='right_title'>
          <Spinner animation="border" variant="light" size="sm" className={logoLoader ? 'show-img-loader' : 'hide-img-loader'} style={{ marginRight: '6px' }} />
          <img src={downloadIcon} className={logoLoader ? 'hide-img-loader' : 'show-image-after-loader'} alt="" onLoad={() => setLogoLoader(false)} />
          <span className='download'>Download el RED</span>
        </div>
      </div>
      <NeedsCardBottomShimmer color={color} highlightColor={highlightColor} />
    </div>
  )
}

export default NeedsCardShimmer
