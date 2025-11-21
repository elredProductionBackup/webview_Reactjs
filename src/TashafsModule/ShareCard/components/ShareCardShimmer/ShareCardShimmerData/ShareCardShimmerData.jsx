import React from 'react'
import Skeleton from 'react-loading-skeleton'

const ShareCardShimmerData = ({baseColor, highlightColor }) => {
    return (
        <div className='middle_section'>
            <Skeleton circle height={124} width={124} baseColor={baseColor} highlightColor={highlightColor} />
            <Skeleton height={10} width={154} baseColor={baseColor} highlightColor={highlightColor} style={{ marginTop: "40px" }} />
            <Skeleton height={7} width={70} baseColor={baseColor} highlightColor={highlightColor} style={{ marginTop: "15px" }} />
            <Skeleton height={7} width={79} baseColor={baseColor} highlightColor={highlightColor} style={{ marginTop: "30px" }} />
            <Skeleton height={7} width={121} baseColor={baseColor} highlightColor={highlightColor} style={{ marginTop: "12px", marginBottom: "10px" }} />
            <div className="circle_icons">
                {/* <Skeleton circle height={30} width={30} baseColor={baseColor} highlightColor={highlightColor} />
                <Skeleton circle height={30} width={30} baseColor={baseColor} highlightColor={highlightColor} />
                <Skeleton circle height={30} width={30} baseColor={baseColor} highlightColor={highlightColor} />
                <Skeleton circle height={30} width={30} baseColor={baseColor} highlightColor={highlightColor} /> */}
            </div>
            <div className="circle_icons_two ">
                {/* <Skeleton circle height={30} width={30} baseColor={baseColor} highlightColor={highlightColor} />
                <Skeleton circle height={30} width={30} baseColor={baseColor} highlightColor={highlightColor} />
                <Skeleton circle height={30} width={30} baseColor={baseColor} highlightColor={highlightColor} />
                <Skeleton circle height={30} width={30} baseColor={baseColor} highlightColor={highlightColor} />
                <Skeleton circle height={30} width={30} baseColor={baseColor} highlightColor={highlightColor} /> */}
            </div>
            {/* <Skeleton height={7} width={101} baseColor={baseColor} highlightColor={highlightColor} style={{ marginTop: "35px" }} /> */}
            <div className="square_icons">
                <Skeleton height={32} width={32} baseColor={baseColor} highlightColor={highlightColor} borderRadius={10} />
                <Skeleton height={32} width={32} baseColor={baseColor} highlightColor={highlightColor} borderRadius={10} />
                <Skeleton height={32} width={32} baseColor={baseColor} highlightColor={highlightColor} borderRadius={10} />
                <Skeleton height={32} width={32} baseColor={baseColor} highlightColor={highlightColor} borderRadius={10} />
                <Skeleton height={32} width={32} baseColor={baseColor} highlightColor={highlightColor} borderRadius={10} />
            </div>
        </div>
    )
}

export default ShareCardShimmerData
