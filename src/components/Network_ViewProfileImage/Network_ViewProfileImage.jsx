import { Spinner, useNavigate, useSearchParams, useEffect, useState, back, Skeleton, clearToasts, 
    useFetchNetwork, Feedback, UserFeedbackPopup, ErrorPage, Constants, defaultGroupImg } from "./Imports_Network_ViewProfileImage";

const Network_ViewProfileImage = ({ isLive, productionUrl }) => {
    const navigate = useNavigate();
    let [searchParams] = useSearchParams();
    const networkCode = searchParams.get("networkCode");
    const [profileBackLoader, setProfileBackLoader] = useState(true);
    const [profilePicLoader, setProfilePicLoader] = useState(true);
    const [showUserFeedbackPopup, setShowUserFeedbackPopup] = useState(false);
    const [imgError, setImgError] = useState(false);

    const { data } = useFetchNetwork(isLive, productionUrl, networkCode);

    useEffect(() => {
        clearToasts();
    }, []);

    return (
        <>
            {false ? <ErrorPage />
                : <div className="profile-picture-view">
                    <div className="profile-pic-header d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <Spinner animation="border" variant="dark" size="sm" className={profileBackLoader ? "profile-pic-back-spinner" : "hiding-img-loader "} />
                            <div className={!profileBackLoader ? 'profile-pic-back showing-img-loader' : "hiding-img-loader "} onClick={() => navigate(-1)}>
                                <img src={back} alt="" onLoad={() => setProfileBackLoader(false)} />
                            </div>
                            <div className="network-profile-pic-title">
                                {!profileBackLoader && data?.name ? data?.name
                                    : <Skeleton height={12} width={200} className="network-profile-pic-header-skeleton" baseColor="#242939" highlightColor="#1e212b" />}
                            </div>
                        </div>
                        <div style={{ marginRight: "22px" }}><Feedback setOpen={setShowUserFeedbackPopup} /></div>
                    </div>
                    <div className={imgError ? "default-profile-picture-container" : "profile-picture-container"}>
                        <Spinner animation="border" variant="danger" size="md"
                            className={profilePicLoader ? "profile-pic-spinner" : "d-none"} />
                        <img src={imgError ? defaultGroupImg : data?.logo} alt="profile" onLoad={() => setProfilePicLoader(false)}
                            onError={() => { setImgError(true); setProfilePicLoader(false) }}
                            className={profilePicLoader ? "d-none" : "profile-pic-spinner"} />
                    </div>
                </div>
            }
            <UserFeedbackPopup showUserFeedbackPopup={showUserFeedbackPopup} setShowUserFeedbackPopup={setShowUserFeedbackPopup}
                screen={"Network Logo - Full View - Webview"} isLive={isLive} productionUrl={productionUrl} headerText={`${Constants?.NETWORK_NAME_SINGULAR} Logo`}
            />
        </>
    )
}

export default Network_ViewProfileImage;