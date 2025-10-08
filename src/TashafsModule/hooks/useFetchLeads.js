import { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";
const useFetchLeads = (isLive, productionUrl, userCode) => {
  const [loading, setLoading] = useState(true);
  const [leadsData, setLeadsData] = useState([]);
  const [leadsAvailable, setLeadsAvailable] = useState(true);
  const[loader,setLoader]=useState(false)
  const [getCOuntofLeads,setCountofLeads]=useState(0)
  const fetchLeads = () => {
    setLoading(true);
    axios
      .post(
        `${
          isLive ? productionUrl : ""
        }/webViewFetchUserSpecificLeads?userCode=${userCode}&start=1&offset=10`
      )
      .then((res) => {
        if (res?.data?.userSpecificLeadsCount <10) {
          setLeadsAvailable(false);
        } else {
          setLeadsAvailable(true);
        }
        setLeadsData(res?.data?.result);
        debounceLoading()
        setCountofLeads(res?.data.userSpecificLeadsCount)
      })
      .catch((error) =>{
       // console.log(error);
        setLoading(false)
      } )
  };

  useEffect(() => {
    setLoading(true)
    
    fetchLeads();
  }, []); //eslint-disable-line


    let debounceLoading = _.debounce(() => {
      setLoading(false);
    }, 2000);

  return { loading, leadsData, leadsAvailable, fetchLeads,loader,setLoader,leadsLoading:loading,setCountofLeads,getCOuntofLeads,setLeadsData };
};

export default useFetchLeads;
