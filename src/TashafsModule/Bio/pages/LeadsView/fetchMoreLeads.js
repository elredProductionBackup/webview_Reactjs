import axios from "axios";
import _ from 'lodash';

export const fetchMoreLeads = ( props) => {
  const {isLive,
    productionUrl,
    userCode,
    setData,
    page,
    setPage,
    setHasMore,
    setLoading,
   setCountofLeads,setisHitted }=props;
   setisHitted(true)
  axios
    .post(
      `${isLive ? productionUrl : ""
      }/webViewFetchUserSpecificLeads?userCode=${userCode}&start=${page}&offset=${'10'}`
    )
    .then((res) => {
      const newData = res?.data?.result;
      setData((prevData) => [...prevData, ...newData]);
    
     setCountofLeads(res?.data.userSpecificLeadsCount)
      setHasMore(res?.data?.result.length  < 10  ? false : true)
      setLoading(false)
      setisHitted(false)
      setPage((prev) => prev + 10);
    })
    .catch((error) =>{
       //console.log(error)
      });
};


export const fetchLeadMiddle=(props,id)=>{

  let {setLoading,data,getCOuntofLeads,isHitted}=props;
  if(getCOuntofLeads!==data.length ){
    
    setLoading(true)
    if(!isHitted){
      FetMoreLeadsDebounce(props,id)
    }
   
  }

}

export const FetMoreLeadsDebounce = _.debounce((props,id) => {
 
  fetchMoreLeads(props)
}, 500)


export const scrollMsgToBottom = (e,loading,hasMore,fetchMoreProps,setLoading) => {
  const bottom = e.target.scrollHeight - Math.round(e.target.scrollTop) === e.target.clientHeight;
  if (bottom) {
    if (!loading && hasMore) {
      fetchLeadMiddle(fetchMoreProps, "mapped_lead_data")
    }
  } else {
    setLoading(false)
  }
}

export const navigateToRespondingLeads = (leadId,navigate,userCode, isLive, productionUrl) => {
  const time = new Date().getTime().toString().slice(-6);
  navigate(
    `/leads/responding-leads?leadId=${leadId}&userCode=${userCode}&t=${time}`,
    { state: { isLive, productionUrl } }
  );
};



export const navigateToHomefromLeads = (userCode,navigate) => {
  const time = new Date().getTime().toString().slice(-6);
  navigate(`/?userCode=${userCode}&t=${time}`);

};
