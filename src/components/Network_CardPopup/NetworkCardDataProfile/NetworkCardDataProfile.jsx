import { useState , capitalNames, handleShareProfile, Spinner, avatar, Skeleton, shareIcon, defaultGroupImg } from "./ImportsNetworkCardDataProfile";

const NetworkCardDataProfile = ({ dpURL, networkName, newAddress, data, isNetworkShareCard, shareCardData }) => {
  const [shareLoader, setShareLoader] = useState(true);
  const [profileImageLoader, setprofileImageLoader] = useState(true);
  const [imgError, setImgError] = useState(false);
  const baseColor = "#242939";
  const highlightColor = "#1e212b";

  return (
    <>
      <div className="network-top-sharing">
        <div
          className="network-share-icon"
          onClick={() => handleShareProfile(data)}
        >
          <Spinner
            animation="border"
            variant="light"
            size="sm"
            className={shareLoader ? "d-block" : "d-none"}
          />
          <img
            src={shareIcon}
            alt=""
            className={shareLoader ? "d-none" : "d-block"}
            onLoad={() => setShareLoader(false)}
          />
        </div>
        <span
          className="network-share-text"
          onClick={() => handleShareProfile(data)}
        >
          Share
        </span>
      </div>
      <div className={profileImageLoader ? "network-profile-image" : "network-profile-image dp-bg-white"}>
        <Skeleton
          circle
          height={127}
          width={127}
          baseColor={baseColor}
          highlightColor={highlightColor}
          className={profileImageLoader ? "d-block" : "d-none"}
        />
        <img
          src={dpURL === "" ? avatar : imgError ? defaultGroupImg : dpURL}
          alt=""
          className={profileImageLoader ? "d-none" : "d-block"}
          onLoad={() => setprofileImageLoader(false)}
          onError={() => setImgError(true)}
        />
      </div>
      <div className="group-network-name-dp-container">
        <span className="group-network-dp">
          <img src={isNetworkShareCard ? shareCardData?.networkClusterDetails?.logo : data?.networkClusterDetails?.logo} className="group-network-dp-img" alt="" />
        </span>
        <span className="group-network-title">{isNetworkShareCard ? shareCardData?.networkClusterDetails?.name : data?.networkClusterDetails?.name}</span>
      </div>
      <div className="network-name-div">
        <div className="network-title-name">
          {networkName}
        </div>
      </div>
      <div className="network-address-container">
        <div className="network-address">
          {capitalNames(newAddress)}
        </div>
      </div>
    </>
  );
};
export default NetworkCardDataProfile;
