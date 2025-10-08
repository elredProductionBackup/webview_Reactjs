import { useState, useEffect } from 'react';
import axios from 'axios';

const useAwardsFetcher = (isLive, productionUrl, userCode) => {
  const [awards, setAwards] = useState([]);
  const [awardsData, setAwardsData] = useState({});
  const [awardsLoader, setAwardsLoader] = useState(true);
  const [awardsCount, setAwardsCount] = useState(0);

  const fetchAwards = () => {
    axios
      .post(
        `${isLive ? productionUrl : ''
        }/noSessionPreviewAwards?userCode=${userCode}&start=1&offset=10`
      )
      .then((res) => {
        setAwards(res?.data?.result);
        setAwardsData(res?.data);
        setAwardsLoader(false);
        setAwardsCount(res?.data?.totalAwardsCount);
        
      })
      .catch((err) => setAwardsLoader(false));
  };

  useEffect(() => {
    
      fetchAwards();
    
  }, [isLive, productionUrl, userCode]);

  return {
    awards,
    awardsData,
    awardsLoader,
    awardsCount,
    fetchAwards,
  };
};

export default useAwardsFetcher;
