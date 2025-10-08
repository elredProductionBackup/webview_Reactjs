import { useEffect, useState } from 'react'
import axios from "axios";
import _ from 'lodash';
function useFetchNeeds(isLive, productionUrl, userCode) {
    const [loading, setLoading] = useState(true);
    const[loader,setLoader]=useState(false)
    const [data, setData] = useState([])
    const [page, setPage] = useState(1); 
    const [hasMore, setHasMore] = useState(true);
    const [needsCount,setNeedsCount]=useState(0)
    const fetchNeeds = () => {
       
        axios.post(`${isLive ? productionUrl : ''}/webViewFetchUserSpecificNeeds?userCode=${userCode}&start=${page}&offset=10`)
            .then((res) => {
                if (page === 1) {
                    setData(res?.data?.result);
                  }else{
                    setData((prev) => [...prev, ...res?.data?.result]);
                  }
            
                setLoading(false)
                setPage(page + 10)
                if(page!==1){
                    setLoader(false)
                }
                setNeedsCount(res?.data?.totalNeedsCount)
                setHasMore(res?.data?.result.length < 10 ? false : true)
            }).catch((error) =>{
                 //console.log(error)
                });
    }

    useEffect(() => {
        setLoading(true)
        debounceAllCall()
        window.scrollTo(0, 0)
    }, [])

    const fetchMoreNeeds=()=>{
        if(loader===false && needsCount!==data.length){
            setLoader(true)
            fetchNeeds();
        }
   
    }

    const debounceAllCall = _.debounce(() => {
        fetchNeeds();
        
      }, 500)
    

    return {
        data, loading, fetchMoreNeeds, hasMore,loader
    }
}

export default useFetchNeeds
