import { useState, useRef, useContext,lazy, useEffect } from "react";
import "./respondingleads.scss";
import { GlobalData } from "../../../../../../App";
import {  useSearchParams, useFetchSingleLead, LeadViewShimmer } from './ImportRespondingLead'
import LeadContainer from "./LeadContainer";
import { clearToasts } from "react-simple-toasts";
const SessionExpired = lazy(() => import("../Leadsreply/LeadsReplyCard/SessionExpired/SessionExpired"));

const RespondingLeads = ({ isLive, productionUrl }) => {
  let [searchParams] = useSearchParams();
  const leadId = searchParams.get("leadId");
  const userCode = searchParams.get("userCode");
  const { loading, singleLeadsData, leadsSessionExpired, errorMsg, reset } = useFetchSingleLead(isLive, productionUrl, leadId);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(Math.floor(Math.random() * 90 + 10));
  const [progress, setProgress] = useState(Array(singleLeadsData[0]?.length)?.fill(0));
  const [isPaused, setIsPaused] = useState(false);
  const [remainingTime, setRemainingTime] = useState(5000);
  const [remainingTimeProgress, setRemainingTimeProgress] = useState(5000);
  const [lastPausedTimestamp, setLastPausedTimestamp] = useState(null);
  const [manual, setManual] = useState(0);
  const { formData, setFormData } = useContext(GlobalData)
  const scrollDivRef = useRef(null);
  const [isClickableAreaVisible, setIsClickableAreaVisible] = useState(true);
  const [scrollheight, setScrollheight] = useState(null)
  const [scrollPosition, setScrollPosition] = useState(0);
  const [resetSession, setResetSession] = useState(false)
  const [shareLoader, setShareLoader] = useState(true);
  const [locationLoader, setLocationLoader] = useState(true)

  const sessionProps = {setResetSession, resetSession,  userCode, errorMsg , reset, home: false}
  const leadsDataWithProps = { singleLeadsData, currentIndex, setCurrentIndex, isPaused, setCurrentImageIndex, remainingTime,
    lastPausedTimestamp,  setRemainingTime, setLastPausedTimestamp,setProgress, currentImageIndex, progress, manual,setManual,
    scrollheight, setScrollheight, scrollPosition, scrollDivRef, setScrollPosition,setIsPaused, remainingTimeProgress, 
    setRemainingTimeProgress, isClickableAreaVisible, setIsClickableAreaVisible, userCode, isLive,productionUrl,
    leadId, setFormData, shareLoader, setShareLoader, locationLoader, setLocationLoader
}

useEffect(() => {
  clearToasts();
}, []);

  return (
    <>
      {leadsSessionExpired ? <SessionExpired {...sessionProps} /> :
        loading ? (<LeadViewShimmer />) : (
         <LeadContainer {...leadsDataWithProps} />
        )} 
    </>)};
export default RespondingLeads;
