import { useEffect, useState, NetworkCardPopup, NetworkShareCardShimmer, useSearchParams, 
  ErrorPage, fetchNetworkShareCardData } from "./Imports_NetworkShareCard";

const NetworkShareCard = ({ isLive, productionUrl }) => {
  let [searchParams] = useSearchParams();
  const networkCode = searchParams.get("networkCode");

  const [loading, setLoading] = useState(true);
  const [isBgLoading, setIsBgLoading] = useState(true);
  const [allData, setAlldata] = useState([]);
  const [data, setData] = useState([]);
  const [fetchError, setfetchError] = useState(false);

  useEffect(() => {
    fetchNetworkShareCardData(isLive, productionUrl, networkCode, setfetchError, 
      setAlldata, setData, setLoading);
  }, []); // eslint-disable-line

  useEffect(() => {
    let imgUrl = allData?.cardDetails?.customImageCardDesignInfo ? 
    allData?.cardDetails?.customImageCardDesignInfo?.profileBannerImageURL : 
    allData?.cardDetails?.cardShortBgURL;
    if (imgUrl) {
        const img = new Image();
        img.onload = () => {
            setIsBgLoading(false);
        };
        img.src = imgUrl;
    }
  }, [allData?.cardDetails?.cardShortBgURL, allData?.cardDetails?.customImageCardDesignInfo, allData?.cardDetails?.customImageCardDesignInfo?.profileBannerImageURL]);

  if (fetchError) return <ErrorPage />

  return (
    <>
      {
        loading || isBgLoading ?
        <NetworkShareCardShimmer /> 
        : 
          <NetworkCardPopup isNetworkShareCard={true} data={data} isLive={isLive} productionUrl={productionUrl} shareCardData={allData} />
      }   
    </>
  )
}

export default NetworkShareCard;