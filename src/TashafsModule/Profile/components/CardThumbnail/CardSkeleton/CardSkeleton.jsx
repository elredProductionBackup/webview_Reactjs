import React from 'react'
import Skeleton from 'react-loading-skeleton'

const CardSkeleton = ({secondaryColor, baseColor}) => {
    return (
        <div>
            <span className="card-show">
                <Skeleton
                    width={61}
                    height={90}
                    baseColor={baseColor}
                    style={{ background: `#${secondaryColor}` }}
                />
            </span>
        </div>
    )
}

export default CardSkeleton
