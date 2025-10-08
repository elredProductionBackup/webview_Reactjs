import React from 'react'
import Skeleton from 'react-loading-skeleton'
import shimmer from '../../../../../assets/images/shimmer.png'

const AboutShimmer = ({ color, highlightColor }) => {
  return (
    <div style={{margin:'0 20px', marginTop:'20px'}}>
      <Skeleton width={72} height={17} borderRadius={13} baseColor={color} highlightColor={highlightColor} style={{marginBottom:"10px"}}/>
      <Skeleton width={325} height={10} borderRadius={6} baseColor={color} highlightColor={highlightColor} />
      <Skeleton width={276} height={10} borderRadius={6} baseColor={color} highlightColor={highlightColor} />
      <Skeleton width={325} height={10} borderRadius={6} baseColor={color} highlightColor={highlightColor} />
      <Skeleton width={303} height={10} borderRadius={6} baseColor={color} highlightColor={highlightColor} style={{marginBottom:"30px"}}/>

      <div className='resume-shimmer'>
        <Skeleton width={48} height={48} baseColor={color} highlightColor={highlightColor} circle style={{marginRight:"20px"}}/>
        <Skeleton width={72} height={8} baseColor={color} highlightColor={highlightColor} />
      </div>
      <div style={{display:'flex', justifyContent:'space-between', marginBottom: "20px"}}>
        <Skeleton width={84} height={17} borderRadius={13} baseColor={color} highlightColor={highlightColor} />
        <Skeleton width={84} height={10} borderRadius={13} baseColor={color} highlightColor={highlightColor} />
      </div>
      <hr className='full-hr'/>
    </div>
  )
}

export default AboutShimmer
