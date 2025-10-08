import React from 'react'
import Skeleton from 'react-loading-skeleton'

const NeedsCardBottomShimmer = ({color, highlightColor}) => {
  return (
    <div className="needscard-shimmer-page-container">
      <div className='needscard-shimmer-card-container '>
        <div className='top_needscard'>
          <div className='left_side'>
            <div className='dp'>
              <Skeleton circle width={38} height={38} baseColor={color} highlightColor={highlightColor} />
            </div>
            <div className='name_designation'>
              <Skeleton width={78} height={11} baseColor={color} highlightColor={highlightColor} className='name_shimmer' />
              <Skeleton width={114} height={7} baseColor={color} highlightColor={highlightColor} className='designation_shimmer' />
            </div>
          </div>
          <div className='right_side'>
            <Skeleton width={78} height={20} baseColor={color} borderRadius={20} highlightColor={highlightColor} />
          </div>
        </div>

        {/* <hr id='shimmer_hr_needs' /> */}

        <div className="needs_content_shimmer">
          <div className='top_shim'>
            <Skeleton width={89} height={22} borderRadius={40} baseColor=' #1e232d' highlightColor={highlightColor} />
          </div>
          <div>
            <Skeleton width={187} height={11} borderRadius={40} baseColor={color} highlightColor={highlightColor} />
            <Skeleton width={231} height={11} borderRadius={40} baseColor={color} highlightColor={highlightColor} />
            <Skeleton width={254} height={11} borderRadius={40} baseColor={color} highlightColor={highlightColor} />
            <Skeleton width={254} height={11} borderRadius={40} baseColor={color} highlightColor={highlightColor} />
            <Skeleton width={187} height={11} borderRadius={40} baseColor={color} highlightColor={highlightColor} />
            <Skeleton width={231} height={11} borderRadius={40} baseColor={color} highlightColor={highlightColor} />
          </div>
        </div>
      </div>
      <div className="needs-bottom-message-field-shimmer-container">
        <Skeleton width={335} height={50} baseColor={color} highlightColor={highlightColor} className="needs-bottom-message-field-shimmer" />
      </div>
    </div>
  )
}

export default NeedsCardBottomShimmer
