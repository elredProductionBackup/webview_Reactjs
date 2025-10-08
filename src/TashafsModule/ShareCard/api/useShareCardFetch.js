import { useState, useEffect } from 'react';
import axios from 'axios';

const useShareCardFetch = (isLive, productionUrl, userCode) => {
  const [loading, setLoading] = useState(false);
  const [userDetail, setUserDetail] = useState([]);
  const [cardDetail, setCardDetail] = useState([]);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchApi = () => {
    setLoading(true);
    axios
      .post(`${isLive ? productionUrl : ""}/noSessionPreviewCardDetails?userCode=${userCode}`)
      .then((res) => {
        setUserDetail(res?.data?.result?.[0]?.userDetails);
        setCardDetail(res?.data?.result?.[0]?.cardDetails);
        setData(res?.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error?.response?.data?.success);
      });
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return { loading, userDetail, cardDetail, data, error };
};

export default useShareCardFetch;
