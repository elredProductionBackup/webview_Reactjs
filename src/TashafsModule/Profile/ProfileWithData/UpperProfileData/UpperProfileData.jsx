import { useState } from 'react';
import { handleMapClick } from '../../../../globalFunctions'
import { UserDetails, CardThumbnail, Share, Leads, NoLeads } from './ImportsUpperProfileData'
import Designations from '../../components/Designations/Designations';

const UpperProfileData = ({ data, miniCardData, baseColor, secondaryColor, tint, wholeData, rgba, userCode, 
    leadsData, isLive, productionUrl, getCOuntofLeads, setShowVerifiedPopup, setShowTitlesPopup, noCollabs, collabsData, setShowUserFeedbackPopup,
    openNetworkList, setOpenNetworkList, showDesignationsPopup, setShowDesignationsPopup }) => {

    const [show, setShow] = useState(false);

    return (
        <>
            <UserDetails
                profileImg={data?.result?.[0]?.dpURL}
                firstName={data?.result?.[0]?.firstname}
                lastName={data?.result?.[0]?.lastname}
                designation={data?.result?.[0]?.title}
                location={data?.result?.[0]?.location}
                adhaar={data?.result?.[0]?.aadhaarVerifiedStatus}
                setShowVerifiedPopup={setShowVerifiedPopup}
                setShowTitlesPopup={setShowTitlesPopup}
                userCode={data?.result?.[0]?.userCode}
                baseColor={baseColor}
            />

            <CardThumbnail
                data={miniCardData}
                baseColor={baseColor}
                secondaryColor={secondaryColor}
                tint={tint}
                wholeData={wholeData}
                profileData={data}
                userCode={userCode}
                isLive={isLive}
                productionUrl={productionUrl}
                show={show}
                setShow={setShow}
                setShowUserFeedbackPopup={setShowUserFeedbackPopup}
                openNetworkList={openNetworkList}
                setOpenNetworkList={setOpenNetworkList}
            />
            {!noCollabs && <Designations baseColor={rgba} data={collabsData} productionUrl={productionUrl} isLive={isLive} 
                showDesignationsPopup={showDesignationsPopup} setShowDesignationsPopup={setShowDesignationsPopup} />}
            {/* <Designations baseColor={rgba} /> */}
            <Share rgba={rgba} url={data?.result?.[0]?.shareProfileURL} show={show} />
            {getCOuntofLeads > 0 ? <Leads baseColor={`${baseColor}`} rgba={rgba} userCode={userCode} leadsData={leadsData} isLive={isLive} productionUrl={productionUrl} />
                : <NoLeads rgba={rgba} />}
        </>
    )
}

export default UpperProfileData
