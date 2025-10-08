import React from 'react'
import './AwardsShimmer.scss'
import Skeleton from 'react-loading-skeleton'

const AwardsShimmer = () => {
  return (
    <div className='awards_shimmer'>
      <InnerShimmer width={166}/>
      <InnerShimmer width={166}/>
      <InnerShimmer width={209}/>
    </div>
  )
}


const InnerShimmer = ({width}) => {
    return(
        <div className="innerAwardsShimmer">
            <Skeleton width={44} height={44} circle baseColor={'#2A313F'} highlightColor="#1e212b" style={{marginRight:"10px"}}/>
            <div className="linner">
                <Skeleton width={width} height={10} baseColor={'#2A313F'} highlightColor="#1e212b" borderRadius={13}/>
                <Skeleton width={158} height={7} borderRadius={13} baseColor={'#2A313F'} highlightColor="#1e212b" />
            </div>

        </div>
    )
}

export default AwardsShimmer
