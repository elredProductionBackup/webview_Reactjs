import React, { useState } from 'react'
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";
import { goToNetworks } from '../../../globalFunctions';
import css from '../../../App.scss'
import defaultGroupImg from "../../../assets/images/group_default.png"

const SingleNetwork = ({ name, location, netWorkImg,network }) => {
    const [showShimmer, setShowShimmer] = useState(true)
    const [imgError, setImgError] = useState(false);
    const navigate = useNavigate();

    return (
        <div className='network-single-wrapper'>
            <div className="logo-div">
                <div className={showShimmer ? 'showing-img-loader network-image-spinner' : "hiding-img-loader "}>
                    <div className='skellBorder'>
                        <Skeleton
                            width={48}
                            height={48}
                            borderRadius={50}
                            baseColor={css.theme_shimmer}
                        />
                    </div>
                </div>
                <img src={imgError ? defaultGroupImg : netWorkImg} alt="" className={!showShimmer ? 'network-img show-image-after-loader ' : "hiding-img-loader "}
                    onLoad={() => setShowShimmer(false)} 
                    onClick={(e)=>goToNetworks(navigate,network?.networkCode,e)}
                    onError={() => setImgError(true)}
                />
            </div>
            <div className='network-detail-wrapper'>
                <div className='network-name' onClick={(e)=>goToNetworks(navigate,network?.networkCode,e)}>
                    {name}
                </div>
                <div className='network-location'>
                    {location.city.toLowerCase()===location?.state.toLowerCase()?`${location.city}, ${location?.country}`:`${location.city}, ${location?.state}, ${location?.country}`}
                </div>
            </div>
        </div>
    )
}

export default SingleNetwork
