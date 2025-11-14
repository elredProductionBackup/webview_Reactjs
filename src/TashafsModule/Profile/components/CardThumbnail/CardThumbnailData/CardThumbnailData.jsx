import React, { useEffect, useState } from 'react'
import Badges from '../../../../Cards/Badges/Badges'
import CardBottomOptions from './CardBottomOptions/CardBottomOptions'
import DesignationListProfile from '../../../../components/DesignationListProfile/DesignationListProfile'
import { calcTextLength, convertToRgbColor } from '../../../../../globalFunctions'
import BackgroundFilter from '../../BackgroundFilter/BackgroundFilter'
import avatar from '../../../../../assets/images/avatar.png'
import blueTick from "../../../../../assets/images/blue_tick.svg"
import Skeleton from 'react-loading-skeleton'

const CardThumbnailData = ({ cardInfo, tint, handleShow, dpURL, firstname, lastname, title, newAddress,
    data, wholeData, profileData, designType,baseColor
}) => {
    const [isLoading, setIsLoading] = useState(true);
    let color=convertToRgbColor(baseColor);
    const rgba = `rgba(${color?.[0]},${color?.[1]},${color?.[2]},50%)`;

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setIsLoading(false);
        };
        img.src = cardInfo?.[0]?.customImageCardDesignInfo !== null
            ? cardInfo?.[0]?.customImageCardDesignInfo?.profileBannerImageURL
            : cardInfo?.[0]?.cardShortBgURL

    }, []);
    return (
        <>
            {isLoading ? <Skeleton height={85} width={55} baseColor={rgba} /> :

                <div className="mini-card"
                    style={{
                        backgroundImage:
                            cardInfo?.[0]?.customImageCardDesignInfo !== null
                                ? `linear-gradient( rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url(${cardInfo?.[0]?.customImageCardDesignInfo?.profileBannerImageURL})`
                                : `${tint ? `linear-gradient( rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url(${cardInfo?.[0]?.cardShortBgURL})`
                                    : `url(${cardInfo?.[0]?.cardShortBgURL})`}`,
                        backgroundPosition: designType === "ptypeC" ? "100% 0%" : "50% 50%",
                        backgroundColor: "#000"
                    }}
                    onClick={handleShow}>
                    <div className="bg-filter-mini-card-thumbnail">
                        <div className="profileImg">

                            <img src={dpURL == "" ? avatar : dpURL} alt="" 
                                className={profileData.result[0].aadhaarVerifiedStatus ? "profileImg-border-blue" : "profileImg-border-white"} />
                        </div>
                        {profileData.result[0].aadhaarVerifiedStatus && <img src={blueTick} className="blue-tick-verified-icon" alt="" />}
                        <div className="name">{calcTextLength(12, firstname, 'name')}</div>
                        <div className="name2">{calcTextLength(19, lastname, 'name')}</div>
                        <div className="designation"><DesignationListProfile designation={title} maxWidth={150} /></div>
                        <div className="location">
                            {newAddress?.length <= 28 ? newAddress : newAddress?.slice(0, 28) + '...'}
                        </div>
                        {/* Removed from Awards and Networks Badges for V10 */}
                        {/* {data?.awards?.length !== 0 ? (
                            <div className="mini-badges">
                                <Badges
                                    data={data?.awards}
                                    count={wholeData?.userSpecificAwardsCount}
                                    isMiniCardThumbnail={true}
                                    noBorder={true}
                                />
                            </div>
                        ) : <div className="no-mini-badges-icons"></div>} */}
                        {/* {data?.networks?.length !== 0 ? (
                            <div className="mini-badges">
                            <Badges
                                     data={data?.networks}
                                     isNetwork={true}
                                     count={wholeData?.userSpecificNetworksCount}
                                     noBorder={true}
                                 />
                             </div>
                            ) : <div className="no-mini-badges-icons-network"></div>} */}
                        <CardBottomOptions />
                    </div>
                    {cardInfo?.[0]?.customImageCardDesignInfo?.colorFilter?.length !== 0 ? (
                        <BackgroundFilter filterValues={cardInfo?.[0]?.customImageCardDesignInfo?.colorFilter?.toString()} />
                    ) : null}
                </div>}
        </>
    )
}

export default CardThumbnailData
