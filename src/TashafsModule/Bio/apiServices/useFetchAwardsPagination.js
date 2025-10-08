import { useState, useEffect } from "react";
import _ from "lodash";
import axios from "axios";

const useFetchAwardsPagination = (userCode, isLive, productionUrl,fetchNumber) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true)
  const[paginateLoader,setPaginateLoader] =useState(true)
  const[awardsCount,setAwardsCount]=useState(true)

  const fetchAwards = (p) => {
    const start = p ? p : page;

    axios
      .post(
        `${
          isLive ? productionUrl : ""
        }/noSessionPreviewAwards?userCode=${userCode}&start=${start}&offset=${fetchNumber}`
      )
      .then((res) => {
        if (start === 1) {
          setData(res?.data?.result);
        } else {
          setData((prev) => [...prev, ...res?.data?.result]);
        }
        setHasMore(data?.length === res?.data?.totalAwardsCount ? false : true);
        setAwardsCount(res.data.totalAwardsCount);
        setPage(page + fetchNumber);
        setLoading(false);
        setPaginateLoader(false);
      });
  };

  const fetchMoreData = () => {
    if(awardsCount!==data.length){
      setPaginateLoader(true)
      debounceAllCall();
    }
  
  };

  const debounceAllCall = _.debounce(() => {
    fetchAwards();
  }, 500);

  useEffect(() => {
    fetchAwards()
  }, [userCode, isLive, productionUrl]);

  return {
    data,
    hasMore,
    fetchAwards,
    setData,
    page,
    setLoading,
    loading,
    fetchMoreData,
    paginateLoader,
    awardsCount,
  };
};

export default useFetchAwardsPagination;
