import { useState, useEffect } from 'react';
import axios from 'axios';

const useEducompFetcher = (isLive, productionUrl, userCode) => {
  const [eduComp, setEduComp] = useState(null);
  const [eduCompLoader, setEduCompLoader] = useState(true);

  const fetchEduComp = () => {
    axios
      .post(
        `${isLive ? productionUrl : ''
        }/noSessionViewMyBioEducationDetails?userCode=${userCode}`
      )
      .then((res) => {
        setEduComp(res?.data?.result?.[0]);
        setEduCompLoader(false);
      })
      .catch((err) => setEduCompLoader(false));
  };

  useEffect(() => {
    fetchEduComp();
  }, [isLive, productionUrl, userCode]);

  return {
    eduComp,
    eduCompLoader,
    fetchEduComp,
  };
};

export default useEducompFetcher;
