import React, { useState } from 'react'
import Skeleton from "react-loading-skeleton";
import css from '../../../../../App.scss';
const SingleAwardChip = ({ viewAward, item, userCode, navigate, calcTextLength, bluetick, data, id }) => {
    const [showShimmer, setShowShimmer] = useState(true)
    return (
        <>
            <div
                className="list-item"
                onClick={() => viewAward(item, userCode, navigate)}
                key={id} >

                <div className="logo-div">

                    <div className={showShimmer ? 'showing-img-loader' : "hiding-img-loader "}>
                         <div className='skellBorder'> 
                            <Skeleton
                                width={44}
                                height={44}
                                borderRadius={6}
                                baseColor={css.theme_shimmer}
                            />
                         </div> 
                    </div>
                    <img src={item?.awardIconURL} alt="" className={!showShimmer ? 'show-image-after-loader ' : "hiding-img-loader "}  
                    onLoad={() => setShowShimmer(false)}
                     />
                </div>


                <div className="description-div">
                    <div className="title-des">{item?.awardTitle}</div>
                    <div className="subtitle-div">
                        <div className={item?.issuedOrgVerifiedStatus ? "subtitle" : 'subtitle subtitle_withoutBlue'}>Issued by : {item?.issuedBy}</div>
                        <div className="bluetick">
                            {item?.issuedOrgVerifiedStatus && (
                                <img src={bluetick} alt="" />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <hr className={data?.length - 1 === id ? "hr-last" : "hr-middle"} />
        </>
    )
}

export default SingleAwardChip
