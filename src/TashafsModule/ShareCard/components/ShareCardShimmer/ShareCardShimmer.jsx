import React from 'react'
import './sharecardshimmer.scss'
import Skeleton from 'react-loading-skeleton'
import ShareCardShimmerData from './ShareCardShimmerData/ShareCardShimmerData';

const ShareCardShimmer = () => {
    const baseColor = '#242939';
    const highlightColor ="#1e212b";
   
    return (
        <div className='sharecard-shimmer'>
            <div className='title'>
                <Skeleton width={155} height={12} baseColor="#1A1D27" highlightColor={highlightColor} />
            </div>
            <div className='card_shimmer'>
                <div className='card_wrapper'>
                    <ShareCardShimmerData baseColor={baseColor} highlightColor={highlightColor} />
                    <div className='bottom_title'>
                        <Skeleton height={7} width={55} baseColor={baseColor} highlightColor={highlightColor} style={{ marginTop: "35px" }} />
                        <div>
                            <Skeleton height={18} width={18} baseColor={baseColor} highlightColor={highlightColor} style={{ marginTop: "35px" }} inline />
                            <Skeleton height={7} width={35} baseColor={baseColor} highlightColor={highlightColor} style={{ marginTop: "35px", marginLeft:'4px' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShareCardShimmer
