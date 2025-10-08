import { useState, useEffect } from "react";
import axios from "axios";

const useFetchSingleLead = (isLive, productionUrl, leadId) => {
  const [loading, setLoading] = useState(true);
  const [singleLeadsData, setSingleLeadsData] = useState([]);
  const [leadsSessionExpired, setLeadsSessionExpired] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [ reset,setReset]=useState(false);

  const fetchSingleLead = () => {
    setLoading(true);
    axios
      .post(
        `${isLive ? productionUrl : ""}/webViewFetchSingleLead?leadId=${leadId}`
      )
      .then((res) => {
        setSingleLeadsData(res?.data?.result);
        setLoading(false);
      })
      .catch((err) => {
      
        if (err?.response?.data?.errorCode === 7) {
          setLeadsSessionExpired(true);
          setReset(true);
          setErrorMsg("This Offering doesn't exist.")
        }
        else if (err?.response?.data?.errorCode === -1) {
         
          setLeadsSessionExpired(true);
          setReset(true);
          setErrorMsg('Seems like you are not logged in. Please Retry')
        }
         else if (err?.response?.data?.errorCode === 1) {
         
          setLeadsSessionExpired(true);
          setErrorMsg('Seems like you are not logged in. Please Retry')
        }
      });

  };

  useEffect(() => {
    fetchSingleLead();
  }, []); //eslint-disable-line

  return { loading, singleLeadsData, fetchSingleLead,setErrorMsg, leadsSessionExpired, setLeadsSessionExpired,errorMsg, reset  };
};

export default useFetchSingleLead;
