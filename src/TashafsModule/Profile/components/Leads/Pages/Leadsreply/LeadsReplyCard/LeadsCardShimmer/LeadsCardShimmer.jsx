import React from 'react'
import './leadscardshimmer.scss'
import Skeleton from 'react-loading-skeleton'
import back from '../../../../../../../../assets/images/backpage.svg'
import downloadIcon from '../../../../../../../../assets/images/downloads.svg'
import { useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { isIOS } from 'react-device-detect';
import css from '../../../../../../../../App.scss'

const LeadsCardShimmer = () => {
  const [downloadLoader, setdownloadLoader] = useState(true)
  const [backLoader, setBackLoader] = useState(true)
  const color = "#242939";
  const highlightColor = "#1e212b";

  return (
    <div className='leads_card_shimmer'>
      <div className='leads_card_shimmer_title'>
        <span className='left_title'>
          <Spinner animation="border" variant="light" size="sm" className={backLoader ? 'show-img-loader spiner-margin1' : 'hide-img-loader'} />

          <img src={back} alt=""
            className={!backLoader ? 'show-image-after-loader leads-reply-back1' : "hide-img-loader"}
            onLoad={() => setBackLoader(false)} />
          <span className='send'>Send a reply</span>
        </span>
        <div className='right_title'>
            <Spinner animation="border" variant="light" size="sm" className={downloadLoader ? 'show-img-loader download-elred-Spinner' : 'hide-img-loader'} />

            <img src={downloadIcon} className={!downloadLoader ? 'show-image-after-loader download-elred-icon' : "hide-img-loader"} alt="" onLoad={() => setdownloadLoader(false)} />
            <span className='download'>Download el RED</span>
          </div>
        

      </div>

      <div className='leadscard'>
        <div className='top_leadscard'>
          <div className='left_side'>
            <div className='dp'>
              <Skeleton circle width={34} height={34} baseColor={color} highlightColor={highlightColor} />
            </div>
            <div className='name_designation'>
              <div  className='name_shimmer'>
              <Skeleton width={78} height={11} baseColor={color} highlightColor={highlightColor} />
              </div>
            
              <div className='designation_shimmer'>
              <Skeleton width={114} height={7} baseColor={color} highlightColor={highlightColor}  />
              </div>
            
            </div>
          </div>
          <div className='right_side'>
            <Skeleton width={78} height={20} baseColor={color} highlightColor={highlightColor} borderRadius={20} />
          </div>
        </div>

        <hr id='shimmer_hr_leads' />

        <div className="leads_content_shimmer">
          <div className='top_shim'>
            <Skeleton width={89} height={22} borderRadius={40}  baseColor={color} highlightColor={highlightColor} />
          </div>
          <div>
            <Skeleton width={187} height={11} borderRadius={40}  baseColor={color} highlightColor={highlightColor} />
            <Skeleton width={231} height={11} borderRadius={40}  baseColor={color} highlightColor={highlightColor} />
            <Skeleton width={254} height={11} borderRadius={40}  baseColor={color} highlightColor={highlightColor} />
            <Skeleton width={254} height={11} borderRadius={40}  baseColor={color} highlightColor={highlightColor} />
            <Skeleton width={187} height={11} borderRadius={40}  baseColor={color} highlightColor={highlightColor} />
            <Skeleton width={231} height={11} borderRadius={40}  baseColor={color} highlightColor={highlightColor} />
          </div>
        </div>
      </div>
      <div className="leads-bottom-message-field-shimmer-container">
        <Skeleton width={335} height={50} baseColor={color} highlightColor={highlightColor} className="leads-bottom-message-field-shimmer" />
      </div>
    </div>
  )
}

export default LeadsCardShimmer
