import React from 'react'
import './netWorksListShimmer.scss'
import Skeleton from 'react-loading-skeleton'
import css from '../../../../App.scss'

export const NetworkListShimmer = () => {
  return (
    <div className='networkList_shimmer'>
      <InnerShimmer />
      <InnerShimmer />
      <InnerShimmer />
      <InnerShimmer />
      <InnerShimmer />
      <InnerShimmer />
      <InnerShimmer />
      <InnerShimmer />
      <InnerShimmer />
      <InnerShimmer />
    </div>
  )
}

const InnerShimmer = () => {
    return(
        <div className="innerNetworkListShimmer">
            <Skeleton width={48} height={48} circle baseColor={css.theme_shimmer} style={{marginRight:"12px"}}/>
            <div className="linner">
                <Skeleton width={251} height={10}  baseColor={css.theme_shimmer}  borderRadius={13}/>
                
                <Skeleton width={145} height={10} borderRadius={13} baseColor={css.theme_shimmer} />
            </div>

        </div>
    )
}


