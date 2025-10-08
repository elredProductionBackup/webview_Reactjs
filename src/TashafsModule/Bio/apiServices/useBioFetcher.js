import { useState, useEffect } from 'react';
import axios from 'axios';

const useBioFetcher = (isLive, productionUrl, userCode) => {
  const [bio, setBio] = useState(null);
  const [aboutLoader, setAboutLoader] = useState(true);

  const fetchBio = () => {
    axios
      .post(
        `${isLive ? productionUrl : ''}/noSessionViewMyBio?userCode=${userCode}`
      )
      .then((res) => {
        setBio(res?.data?.result?.[0]);
        setAboutLoader(false);
      })
      .catch((err) => setAboutLoader(false));
  };

  useEffect(() => {
    fetchBio();
  }, [isLive, productionUrl, userCode]);

  return {
    bio,
    aboutLoader,
    fetchBio,
  };
};

export default useBioFetcher;
