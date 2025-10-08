import { useContext, useEffect, useState, lazy } from 'react';
import { UserDetails, Badges, SaveButton, ShareBottomOptions, caps, BackgroundFilter } from './ImportsShareCardContainer'
import { AadharPopupContext } from '../../Profile/components/AadhaarVerifiedPopup/AadharPopupContext';
import { ShareCardShimmer } from '../ImportsShareCard';
import { calcTextLength } from '../../../globalFunctions';
import NetworkIconBadges from "../../Cards/NetworkBadges/NetworkIconBadges";
import { handleOpenNewUrl } from '../shareCardFunctions';
import PrivateContactToast from '../../Cards/PrivateContactToast/PrivateContactToast';

const AadhaarVerifiedPopup = lazy(() => import("../../Profile/components/AadhaarVerifiedPopup/AadhaarVerifiedPopup"));

const ShareCardContainer = ({ userDetail, cardDetail, data, setOpen, setEnable, setOpenMail,
    setLocationEnable, setWebEnable, logo, cardUser, setOpenNetworkList }) => {
    const shareBottomOptionsProps = {
        setOpen, setEnable, setOpenMail, setLocationEnable, setWebEnable,
        logo, cardUser, userDetail
    }
    const [isLoading, setIsLoading] = useState(true);
    const { firstname, lastname } = userDetail;
    const { showVerifiedPopup, setShowVerifiedPopup } = useContext(AadharPopupContext);
    const [privateContactToast, setPrivateContactToast] = useState(false);

    useEffect(() => {
        let imgUrl = cardDetail?.cardDesignType !== "typeA" &&
            cardDetail?.cardDesignType !== "typeB"
            ? cardDetail?.cardShortBgURL !== ""
                ? cardDetail?.cardShortBgURL
                : cardDetail?.customImageCardDesignInfo?.profileBannerImageURL
            : cardDetail?.cardShortBgURL !== ""
                ? cardDetail?.cardShortBgURL
                : cardDetail?.customImageCardDesignInfo?.profileBannerImageURL
        if (imgUrl) {
            const img = new Image();
            img.onload = () => {
                setIsLoading(false);
            };
            img.src = imgUrl;
        }

    }, []);

    return (
        <>
            {isLoading ? <ShareCardShimmer /> :
                <>
                    <div className="username">
                        {calcTextLength(16, firstname, "name")}'s Personal Card
                    </div>
                    {
                        !userDetail?.alternatePhoneDisplayStatus && userDetail?.alternateEmailDisplayStatus ?
                            <div className="notify_label_div" style={{ marginBottom: "24px" }}>The contact has chosen to keep their phone number private.
                                The VCard will contain only email. </div> : null
                    }
                    <div className="card-div"
                        style={{ paddingBottom: !userDetail?.alternatePhoneDisplayStatus && !userDetail?.alternateEmailDisplayStatus ? "0px" : "100px" }}
                    >
                        <div className="share-card-container"
                            style={{
                                backgroundImage: cardDetail?.cardDesignType !== "typeA" &&
                                    cardDetail?.cardDesignType !== "typeB"
                                    ? cardDetail?.cardShortBgURL !== ""
                                        ? `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${cardDetail?.cardShortBgURL})`
                                        : `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${cardDetail?.customImageCardDesignInfo?.profileBannerImageURL})`
                                    : cardDetail?.cardShortBgURL !== ""
                                        ? `url(${cardDetail?.cardShortBgURL})`
                                        : `url(${cardDetail?.customImageCardDesignInfo?.profileBannerImageURL})`,
                                backgroundPosition: cardDetail?.cardShortBgURL == "" ? "center" : null,
                                backgroundColor: "#000"
                            }} >
                            <div className="bg-filter-sharecard" >
                                <UserDetails userDetail={userDetail} firstname={firstname} lastname={lastname} setShowVerifiedPopup={setShowVerifiedPopup} />
                                <div className="badges-div">
                                    {userDetail?.awards.length > 0 || data?.userSpecificAwardsCount > 0 ? 
                                        <Badges data={userDetail?.awards} count={data?.userSpecificAwardsCount} />
                                        : <div className="badges-div-height-space"></div>
                                    }
                                </div>
                                {data?.userSpecificNetworksCount > 0 ? <div className="network-badges-div">
                                    <NetworkIconBadges data={userDetail?.networks} count={data?.userSpecificNetworksCount} setOpenNetworkList={setOpenNetworkList} />
                                </div> : null}
                            </div>
                            <ShareBottomOptions {...shareBottomOptionsProps} />
                        </div>
                        {cardDetail?.customImageCardDesignInfo?.colorFilter?.length !== 0 ?
                            <BackgroundFilter filterValues={cardDetail?.customImageCardDesignInfo?.colorFilter?.toString()} /> : null}
                    </div>

                    {
                        // !userDetail?.alternatePhoneDisplayStatus && !userDetail?.alternateEmailDisplayStatus ?
                        //     <div className="private_text">The contact has chosen to keep their phone number and email private. You can't save the contact.</div> : 
                            <SaveButton userDetail={userDetail} cardButton="shareCard" secondButtonAction={() => handleOpenNewUrl(userDetail)} 
                                setPrivateContactToast={setPrivateContactToast}  
                                privateContact={!userDetail?.alternatePhoneDisplayStatus && !userDetail?.alternateEmailDisplayStatus ? true : false}
                            />
                    }
                    {privateContactToast && <PrivateContactToast privateContactToast={privateContactToast} setPrivateContactToast={setPrivateContactToast} />}
                    <AadhaarVerifiedPopup showVerifiedPopup={showVerifiedPopup} setShowVerifiedPopup={setShowVerifiedPopup} />

                </>}
        </>
    )
}

export default ShareCardContainer
