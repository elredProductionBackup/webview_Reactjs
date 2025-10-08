import { useState, useEffect } from 'react';
import axios from 'axios';

const useMiniCardFetcher = (isLive, productionUrl, userCode) => {
  const [miniCardData, setMiniCardData] = useState([]);
  const [wholeData, setWholeData] = useState([]);

  const fetchMiniCardData = () => {
    axios
      .post(
        `${isLive ? productionUrl : ''}/noSessionMinicardInfo?userCode=${userCode}`
      )
      .then((res) => {
        setMiniCardData(res?.data?.result?.[0]);
        setWholeData(res?.data);
      })
      .catch((error) =>{
        // console.log(error)
        });
  };

  useEffect(() => {
    fetchMiniCardData();
  }, []);

  return { miniCardData, wholeData };
};

export default useMiniCardFetcher;
