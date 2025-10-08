import { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';
const useRatings = (isLive, productionUrl, userCode, apiEndpoint, type) => {
  const [wholeData, setWholeData] = useState([]);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [loader, setLoading] = useState({ ethical: false, Meet: false })
const [ethicalratingCount,setethicalRatingCount]=useState(0)
const [vrtualratingCount,setVirtualRatingCount]=useState(0)
const [wholeDataCountLoader, setWholeDataCountLoader] = useState(true)
  const fetchData = (p) => {

    const start = p ? p : page;
    axios
      .post(
        `${isLive ? productionUrl : ''}/${apiEndpoint}?userCode=${userCode}&start=${start}&offset=10`
      )
      .then((resp) => {
        setWholeData(resp?.data);
        setWholeDataCountLoader(false)
        setHasMore(resp.data.result.length < 10 ? false : true);
        if(type === 'ethical'){
          setethicalRatingCount(resp.data.ethicalCodeYesCount)
        }else{
          setVirtualRatingCount(resp.data.virtuallyMetYesCount)

        }
     
        if (start === 1) {
          setData(resp.data.result);
        } else {
          setData((prevItems) => [...prevItems, ...resp.data.result]);
        }
        setPage(page + 10);
        setLoading({ ethical: false, Meet: false })
      })
      .catch((error) =>{
        // console.log(error)
      });
  };


  const fetchNextPage = () => {
  if( type === 'ethical'){
    if(ethicalratingCount!==data.length){
      setLoading({ ethical:  true , Meet:  false})
      debounceAllCall();
    }
   
  }else{
    if(vrtualratingCount!==data.length){
      setLoading({ ethical:false, Meet: true })
      debounceAllCall();
    }
  }
  };
  const fetchNextSearch = (p) => {
    setLoading({ ethical: type === 'ethical' ? true : false, Meet: type === 'ethical' ? false : true })

    debounceAllCall(p);
  };



  const debounceAllCall = _.debounce((p) => {
    fetchData(p?p:page);
  }, 500)


  useEffect(() => {
    fetchData();
  }, []);

  return { wholeData, data, hasMore, fetchNextPage,  page, fetchData, loader: loader.ethical, meetfetchLoader: loader.Meet,
    fetchVirtualSearch:fetchNextSearch,fetchMeetNext:fetchNextSearch , wholeDataCountLoader};
};

export default useRatings;
