import { NetworkBottomIcons, calcTextLength, capitalNames, convertToRgbColor, useEffect, useState, Skeleton, defaultGroupImg } from "./Imports_Network_MiniCardThumbnail";

const Network_MiniCardThumbnail = ({ setOpenCardPopup, data, tint, baseColor }) => {
    const { location, name, logo } = data
    const newAddress = `${location?.city && location?.state && location.city === location.state ? "" : location?.city ? location.city + "," : ""} ${location?.state ? location.state + "," : ""} ${location?.country}`;

    const [isLoading, setIsLoading] = useState(true);
    const [imgError, setImgError] = useState(false);

    let color = convertToRgbColor(baseColor);
    const rgba = `rgba(${color?.[0]},${color?.[1]},${color?.[2]},50%)`;

    // useEffect(() => {
    //     const img = new Image();
    //     img.onload = () => {
    //         setIsLoading(false);
    //     };
    //     img.src = data?.cardInfo?.[0]?.cardShortBgURL;
    // }, [data?.cardInfo?.[0]?.cardShortBgURL]); //eslint-disable-line

    useEffect(() => {
        const img = new Image();
        const imageUrl = data?.cardInfo?.[0]?.customImageCardDesignInfo 
          ? data?.cardInfo?.[0]?.customImageCardDesignInfo?.profileBannerImageURL 
          : data?.cardInfo?.[0]?.cardShortBgURL;
      
        if (imageUrl) {
          img.onload = () => {
            setIsLoading(false);
          };
          img.src = imageUrl;
      
          // Clean up function to reset loading state if the component unmounts
          return () => {
            setIsLoading(true); // Optionally reset loading state if needed
          };
        }
      }, [data?.cardInfo?.[0]?.cardShortBgURL, data?.cardInfo?.[0]?.customImageCardDesignInfo?.profileBannerImageURL, data?.cardInfo?.[0]?.customImageCardDesignInfo]);

    return (
        <>
        {
            isLoading ? <Skeleton height={85} width={57} baseColor={rgba} className="network_minicard_thumbnail_shimmer" /> :
                // <div className="network_minicard_thumbnail" onClick={() => setOpenCardPopup(true)}
                //     style={{ backgroundImage: tint ? `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${data?.cardInfo?.[0]?.cardShortBgURL})` : `url(${data?.cardInfo?.[0]?.cardShortBgURL})`,
                //         backgroundColor: "#000" }}>
                <div
                    className="network_minicard_thumbnail"
                    onClick={() => setOpenCardPopup(true)}
                    style={{
                        backgroundImage: tint
                        ? `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${
                            data?.cardInfo?.[0]?.customImageCardDesignInfo
                                ? data?.cardInfo?.[0]?.customImageCardDesignInfo
                                    ?.profileBannerImageURL
                                : data?.cardInfo?.[0]?.cardShortBgURL
                            })`
                        : `url(${
                            data?.cardInfo?.[0]?.customImageCardDesignInfo
                                ? data?.cardInfo?.[0]?.customImageCardDesignInfo
                                    ?.profileBannerImageURL
                                : data?.cardInfo?.[0]?.cardShortBgURL
                            })`,
                        backgroundColor: "#000",
                    }}
                    >
                    <img src={imgError ? defaultGroupImg : logo} className='network_image' alt="" onError={() => setImgError(true)} />
                    <div className="thumbnail-group-network-name-dp-container">
                        <img src={data?.networkClusterDetails?.logo} className="thumbnail-group-network-dp-img" alt="" />
                        <span className="thumbnail-group-network-title">{data?.networkClusterDetails?.name}</span>
                    </div>
                    <div className="network_name">{name}</div>
                    <div className="network_location">{capitalNames(newAddress)}</div>
                    <NetworkBottomIcons />
                </div>
            }
        </>
    )
}

export default Network_MiniCardThumbnail
