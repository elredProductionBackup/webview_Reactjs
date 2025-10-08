import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchNeeds = (isLive, productionUrl, userCode) => {
  const [loading, setLoading] = useState(true);
  const [needsData, setNeedsData] = useState([]);
  const [needsAvailable, setNeedsAvailable] = useState(true);

  const fetchNeeds = () => {
    setLoading(true);
    axios
      .post(`${isLive ? productionUrl : ''}/webViewFetchUserSpecificNeeds?userCode=${userCode}&start=1&offset=10`)
      .then((res) => {
        if (res?.data?.totalNeedsCount === 0) {
          setNeedsAvailable(false);
        } else {
          setNeedsAvailable(true);
        }
        setNeedsData(res?.data?.result);
        setLoading(false);
      }).catch((error) =>{
        // console.log(error)
        });
  };

  useEffect(() => {
    fetchNeeds();
  }, []);

  return { loading, needsData, needsAvailable, fetchNeeds };
};

export default useFetchNeeds;
