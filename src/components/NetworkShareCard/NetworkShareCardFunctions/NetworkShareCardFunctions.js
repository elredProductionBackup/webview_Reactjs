export const fetchNetworkShareCardData = async ( isLive, productionUrl, networkCode, setfetchError, 
    setAlldata, setData, setLoading ) => {
    try {
      let response = await fetch(`${isLive ? productionUrl : ""}/webViewGetNetworkPreviewCardDetails?networkCode=${networkCode}`);
      response = await response.json();
      if (!response.success) setfetchError(true);
      setAlldata(response?.result[0])
      const cardInfo = [{ cardShortBgURL: response.result[0]?.cardDetails?.cardShortBgURL, shareCardURL: response.result[0]?.networkDetails?.shareCardURL, customImageCardDesignInfo: response?.result?.[0]?.cardDetails?.customImageCardDesignInfo }]
      setData({ ...response.result[0]?.networkDetails , cardInfo });
    } catch (error) {
      setfetchError(true);
    } finally { 
      setLoading(false);
    }
}