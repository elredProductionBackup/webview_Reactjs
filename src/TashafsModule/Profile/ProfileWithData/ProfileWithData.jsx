import React, { useContext, useEffect, useState, lazy } from 'react'
import TopHeader from '../components/TopHeader/TopHeader'
import UpperProfileData from './UpperProfileData/UpperProfileData'
import LowerProfileData from './LowerProfileData/LowerProfileData'
import BackgroundFilter from '../components/BackgroundFilter/BackgroundFilter'
import ProfileTitlesPopup from '../components/ProfileTitlesPopup/ProfileTitlesPopup'
import BrandingHeader from '../../components/BrandingHeader/BrandingHeader'
import { AadharPopupContext } from '../components/AadhaarVerifiedPopup/AadharPopupContext'
import { ProfileShimmer } from '../ImportsProfile'
import { isIOS, isMacOs } from 'react-device-detect';
import UserFeedbackPopup from '../../components/UserFeedbackPopup/UserFeedbackPopup'
import Constants from "../../../utils/Contants"

const AadhaarVerifiedPopup = lazy(() => import("../components/AadhaarVerifiedPopup/AadhaarVerifiedPopup"));

const ProfileWithData = ({ data, rgba, tint, designTypeC, secondaryColor, baseColor, primaryColor, textColor,
  superSkillsIcon, isLive, productionUrl, miniCardData, wholeData, ratingsData, ratingsWholeData, hasMore, fetchMorePage, meetSearchMore, ethicalSearchMore,
  metWholeData, virtuallyMetData, isMore, userCode, fetchNextPage, meetfetchLoader, loader, closeMeetpopUp, closeEthicalPopup,
  deBoundeEthical, deBoundeMeet, meetLoader, ethicalloader, setLoading, meetSetLoading, ratingsDataSearch, virtuallyMetDataSearch, isSearchEthical, isSearchMeet,
  leadsData, leadsAvailable, leadsLoading, getCOuntofLeads, ethicalPage, meetPage, tempsearchtextethical, tempsearchtextMeet,
  ethicalWholeDataCountLoader, metWholeDataCountLoader, noCollabs, collabsData,ethicalSearchCount,meetSearchCount,ethicalFetchData,meetFetchData }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showTitlePopup, setShowTitlesPopup] = useState(false);
  const { showVerifiedPopup, setShowVerifiedPopup } = useContext(AadharPopupContext);
  const [showUserFeedbackPopup, setShowUserFeedbackPopup] = useState(false);
  const [openNetworkList, setOpenNetworkList] = useState(false);
  const [showDesignationsPopup, setShowDesignationsPopup] = useState(false);

  const upperProfileDataProps = {
    data, miniCardData, baseColor, secondaryColor, tint, wholeData, rgba, userCode, leadsData, 
    leadsAvailable, isLive, productionUrl, leadsLoading, getCOuntofLeads, setShowVerifiedPopup, 
    setShowTitlesPopup, noCollabs, collabsData, setShowUserFeedbackPopup, openNetworkList, setOpenNetworkList,
    showDesignationsPopup, setShowDesignationsPopup
  }

  const lowerProfileDataProps = {
    rgba, ratingsWholeData, metWholeData, ratingsData, virtuallyMetData, hasMore, isMore,
    fetchNextPage, fetchMorePage, isLive, productionUrl, userCode, superSkillsIcon,
    deBoundeEthical, deBoundeMeet, meetLoader, ethicalloader, setLoading, meetSetLoading, ratingsDataSearch, virtuallyMetDataSearch,
    isSearchEthical, isSearchMeet, meetfetchLoader, loader, closeMeetpopUp, closeEthicalPopup, meetSearchMore, ethicalSearchMore, setShowVerifiedPopup, baseColor,
    ethicalPage, meetPage, tempsearchtextethical, tempsearchtextMeet, ethicalWholeDataCountLoader, metWholeDataCountLoader,ethicalSearchCount,meetSearchCount,ethicalFetchData,meetFetchData
  }

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setIsLoading(false);
    };
    img.src = data?.result?.[0]?.profileDesignInfo?.profileBannerImageURL;

  }, []);

  return (
    <>
      {isLoading ? <ProfileShimmer color={"#242939"} highlight="#1E212B" /> :
        <>
          <div className="parent-profile"
            style={
              {
                backgroundImage: tint ? `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(${data?.result?.[0]?.profileDesignInfo?.profileBannerImageURL})` :
                  `url(${data?.result?.[0]?.profileDesignInfo?.profileBannerImageURL})`,
                backgroundSize: designTypeC == "ptypeC" ? "contain" : "cover",
                backgroundPosition: designTypeC == "ptypeC" ? "100% 0%" : '50% 0%',
                backgroundColor: designTypeC == "ptypeC" ? `#${secondaryColor}` : "#000",
                height: designTypeC === 'ptypeC' ? 'auto' : '100vh',
                overflow: designTypeC === 'ptypeC' ? '' : 'auto',
              }}
          >
            <div className='profile_header'>
              <BrandingHeader link={isIOS || isMacOs ? data?.result?.[0]?.downloadURL?.appstoreURL : data?.result?.[0]?.downloadURL?.playstoreURL} />
              <div className="profile" style={{ background: `#ffffff33`, backdropFilter: "blur(34px)" }}>
                <TopHeader color={`#${textColor}`} title={"Profile"} />
              </div>
            </div>
            <div className="profile-body bg-filter-profile-with-data">
              <UpperProfileData {...upperProfileDataProps} />
              <LowerProfileData {...lowerProfileDataProps} />
            </div>
            {data?.result[0]?.customImageCardDesignInfo?.colorFilter.length !==
              0 ? (
              <BackgroundFilter
                filterValues={data?.result[0]?.customImageCardDesignInfo?.colorFilter?.toString()}
              />
            ) : null}
          </div>
          <AadhaarVerifiedPopup showVerifiedPopup={showVerifiedPopup} setShowVerifiedPopup={setShowVerifiedPopup} />
          <ProfileTitlesPopup showTitlePopup={showTitlePopup} setShowTitlesPopup={setShowTitlesPopup} titlesArray={data?.result[0]?.title} />
          <UserFeedbackPopup showUserFeedbackPopup={showUserFeedbackPopup} setShowUserFeedbackPopup={setShowUserFeedbackPopup} 
            isLive={isLive} productionUrl={productionUrl} screen={"Networks List - Webview"} openNetworkList={openNetworkList} 
            showDesignationsPopup={showDesignationsPopup} headerText={`${Constants?.NETWORK_NAME_PLURAL} List`}
          />
        </>}
    </>
  );
};

export default ProfileWithData
