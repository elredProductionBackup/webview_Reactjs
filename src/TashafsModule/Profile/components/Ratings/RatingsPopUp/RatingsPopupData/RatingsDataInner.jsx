import React, { useContext, useState } from 'react'
import { openProfile } from '../../ratingsFunctions'
import { Spinner, calcTextLength } from '../../../UserDetails/ImportsUserDetail'
import DesignationListProfileForRatings from '../../DesignationListProfile/DesignationListProfile'
import defaultDpURL from '../../../../../../assets/images/avatar.png'
import { AadharPopupContext } from '../../../AadhaarVerifiedPopup/AadharPopupContext'
// import noProfileDp from '../../../../../../assets/images/ratings_default_dp.png'
import Skeleton from 'react-loading-skeleton'

const RatingsDataInner = ({ item, bluetick, id, arr, baseColor }) => {
    const { setShowVerifiedPopup } = useContext(AadharPopupContext);
    const [Srcimg, setSrcimg] = useState(false)
    const [showShimmer, setShowShimmer] = useState(true)
    const [blueTickLoder, setBluetickLoader] = useState(true)
    return (
        <>

            <>
                <div
                    className="ratings-user"
                    onClick={() => openProfile(item.userCode)}
                >
                    <div className={"avatar"}>

                        <div className={showShimmer ? 'skelleton-margin' : "d-none"} style={{ marginTop: showShimmer ? "-3px" : "" }}>
                            <div className='skellBorder_ratings'>
                                <Skeleton
                                    width={48}
                                    height={48}
                                    borderRadius={50}
                                    baseColor="#2A313FE5"
                                    highlightColor="#1E212B"                                  
                                />
                                {/* <img src={noProfileDp} alt='nodp' /> */}
                            </div>
                        </div>

                        <img src={Srcimg ? defaultDpURL : item?.dpURL} alt="" className={showShimmer ? 'd-none' : ""}
                            onLoad={() => setShowShimmer(false)}
                            onError={() => { setSrcimg(true); setShowShimmer(false) }}
                        />
                    </div>
                    <div className={"profile1"}>
                        <div className='d-flex'>
                            <span className="name">
                                {calcTextLength(`${item?.firstname} ${item?.lastname}`.length, item?.firstname?.toLowerCase().concat(" " + item?.lastname?.toLowerCase()), '')}
                            </span>
                            <span onClick={(e) => { e.stopPropagation(); setShowVerifiedPopup(true) }} className="bluetick">
                                {item?.aadhaarVerifiedStatus &&

                                    (<>
                                                        <Spinner animation="border" variant="primary" size="sm" className={blueTickLoder ? 'showing-img-loader blueSpinner' : 'hiding-img-loader'} />

                                                        <img src={bluetick} alt="" className={!blueTickLoder ? 'showing-img-loader' : 'hiding-img-loader'}  onLoad={()=>setBluetickLoader(false)} />
                                    </>
                                    
                                    )}
                            </span>
                        </div>

                        <div className="designation">
                            <DesignationListProfileForRatings designation={item?.title} maxWidth={150} />
                        </div>
                    </div>
                </div>
                {id === arr.length - 1 ? "" : <hr id="user-hr" />}
            </>

        </>
    )
}

export default RatingsDataInner
