import { lazy, useContext, useEffect, useState } from "react"
import { Share, TopHeader, UserDetails, BrandingHeader, Network_MiniCardThumbnail, Network_Ratings, NetworkShimmer, 
    NetworkComments, NetworkCardPopup, useFetchNetwork, useFetchNetworkMinicard, useFetchNetworkRatings, Feedback, UserFeedbackPopup, 
    useSearchParams, ErrorPage, AadharPopupContext, isIOS, isMacOs, Constants } from './ImportsNetworks'
import NetworkDisclaimerModal from "../components/NetworkDisclaimerModal/NetworkDisclaimerModal";

const AadhaarVerifiedPopup = lazy(() => import("../TashafsModule/Profile/components/AadhaarVerifiedPopup/AadhaarVerifiedPopup"));

const Networks = ({ textColor = "red", isLive, productionUrl }) => {
    const [show, setShow] = useState(false);
    const [openCardPopup, setOpenCardPopup] = useState(false);
    const [isBgLoading, setIsBgLoading] = useState(true);
    let [searchParams] = useSearchParams();
    const networkCode = searchParams.get("networkCode");
    const { showVerifiedPopup, setShowVerifiedPopup } = useContext(AadharPopupContext);
    const [showUserFeedbackPopup, setShowUserFeedbackPopup] = useState(false);
    const [showEthical, setShowEthical] = useState(false);
    const [shoWork, setShowWork] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const { data, error, isLoading, rgba } = useFetchNetwork(isLive, productionUrl, networkCode)
    const { miniCardData, miniCardError } = useFetchNetworkMinicard(isLive, productionUrl, networkCode)
    const { data: ethicalData, ethicalcount, hasMore: ethicalhasMore, loader: ethicalloader, fetchNextPage: fetchMoreEthicalRatings, setLoading: ethicalSetLoading, debounceAllCall: ethicaldebounceAllCall, isSearch: ethicalisSearch, setIsSearch: ethicalsetIsSearch, page: ethicalPage, tempSearchText: ethicalTempSearchText, getNetworkRatings: ethicalSearch, searchloader: ethicalSearchLoader, deBoundeSearch: ethicalSearchFunction, staticCount:ethicalTotalCount } = useFetchNetworkRatings(isLive, productionUrl, "webViewGetNetworkEthicalCodeRatings", networkCode, "ethical-network")
       
    const { data: workedHereData, workcount, hasMore: workHasMore, loader: workLoader, fetchNextPage: fetchMoreWorkedHereRatings, setLoading: workSetLoading, debounceAllCall: workdebounceAllCall, isSearch: workisSearch, setIsSearch: worksetisSearch, page: workPage, tempSearchText: workTempSearchText, getNetworkRatings: workSearch, searchloader: workSearchLoader, deBoundeSearch: workSearchFunction,staticCount:workTotalCount } = useFetchNetworkRatings(isLive, productionUrl, "webViewGetNetworkWorkedHereRatings", networkCode, "work")

    const networkRatingsData = {
        ethicalData, ethicalcount, workcount, ethicalhasMore, ethicalloader, workedHereData, workHasMore, workLoader, fetchMoreEthicalRatings, fetchMoreWorkedHereRatings, ethicalSetLoading, workSetLoading, ethicaldebounceAllCall, workdebounceAllCall, ethicalisSearch, ethicalsetIsSearch, worksetisSearch, workisSearch, ethicalPage, workPage, ethicalTempSearchText, workTempSearchText, ethicalSearch, workSearch, workSearchFunction, ethicalSearchFunction,
        ethicalSearchLoader, workSearchLoader, baseColor: data?.profileDesignInfo?.baseColor, isLive, productionUrl, showEthical, setShowEthical, shoWork, setShowWork, rgba, ethicalTotalCount,workTotalCount
    }

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setIsBgLoading(false);
        };
        img.src = data?.profileDesignInfo?.profileBannerImageURL;
    }, [data?.profileDesignInfo?.profileBannerImageURL]);

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    if (error) {
        return <ErrorPage />
    }

    return (
        <div style={{ position : "relative", backgroundColor: "#0d0d0d"}}>
            {
                isLoading || isBgLoading ? <NetworkShimmer /> : <div className="networks"
                style={{
                    // Added tint 80% for V10
                            backgroundImage: data?.profileDesignInfo?.tint ? `linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url(${data?.profileDesignInfo?.profileBannerImageURL})` :
                                `url(${data?.profileDesignInfo?.profileBannerImageURL})`,
                            backgroundSize: data?.profileDesignInfo?.designType === "ptypeC" ? "contain" : "cover",
                            backgroundPosition: data?.profileDesignInfo?.designType === "ptypeC" ? "100% 0%" : '50% 0%',
                            backgroundColor: data?.profileDesignInfo?.designType === "ptypeC" ? `#${data?.profileDesignInfo?.secondaryColor}` : "#000",
                            height: data?.profileDesignInfo?.designType === 'ptypeC' ? 'auto' : '100vh',
                            overflow: data?.profileDesignInfo?.designType === 'ptypeC' ? '' : 'auto',
                        }}
                >
                    {openCardPopup && isIOS ? null : <div className='profile_header network_header'>
                        <BrandingHeader link={isIOS || isMacOs ? data?.downloadURL?.appstoreURL : data?.downloadURL?.playstoreURL} />
                        <div className="profile d-flex align-items-center justify-content-between" style={{ background: `#ffffff33`, backdropFilter: "blur(34px)" }}>
                            <TopHeader color={`#${textColor}`} title={`${Constants.NETWORK_NAME_SINGULAR} Profile`} />
                            {/* Removed Feedback Icon for V10 */}
                            {/* <Feedback setOpen={setShowUserFeedbackPopup} /> */}
                        </div>
                    </div>}
                    <div className="profile-body network_body bg-filter-profile-with-data network-profile-body">
                        <UserDetails profileImg={data?.logo}
                            firstName={data?.name}
                            lastName={""}
                            designation={null}
                            location={data?.location}
                            adhaar={false}
                            isNetwork={true}
                            networkCode={networkCode}
                            baseColor={data?.profileDesignInfo?.baseColor}
                            networkData={data?.networkClusterDetails}
                        />
                        <Network_MiniCardThumbnail setOpenCardPopup={setOpenCardPopup} data={miniCardData}
                            tint={data?.profileDesignInfo?.tint} baseColor={data?.profileDesignInfo?.baseColor} />
                        <Share rgba={rgba} url={data?.shareProfileURL} show={show} isNetwork={true} 
                         setOpenModal={setOpenModal} disclaimerData= {data} />
                        <Network_Ratings {...networkRatingsData} />
                        {/* <NetworkComments isLive={isLive} productionUrl={productionUrl} isNetwork={true} rgba={rgba}/> */}
                    </div>
                </div>
            }
            {openCardPopup && isIOS && <div className="network-card-ios-overscroll-bg"></div>}
            {openCardPopup && <NetworkCardPopup setOpenCardPopup={setOpenCardPopup} data={miniCardData} isLive={isLive} productionUrl={productionUrl}/>}           
            <AadhaarVerifiedPopup showVerifiedPopup={showVerifiedPopup} setShowVerifiedPopup={setShowVerifiedPopup} />
            <UserFeedbackPopup showUserFeedbackPopup={showUserFeedbackPopup} setShowUserFeedbackPopup={setShowUserFeedbackPopup} screen={"Network Profile - Webview"} 
                isLive={isLive} productionUrl={productionUrl} showEthical={showEthical} shoWork={shoWork} openCardPopup={openCardPopup} headerText={`${Constants?.NETWORK_NAME_SINGULAR} Profile`}
                openDisclaimerModal={openModal}
            /> 
              {openModal ? (
                    <NetworkDisclaimerModal
                    isOpen={openModal}
                    onClose={() => setOpenModal(false)}
                    disclaimerData= {data}
        />
      ) : null}
        </div>
    )
}

export default Networks
