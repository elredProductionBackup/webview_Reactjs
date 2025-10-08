import { useContext, useState, lazy } from 'react';
import {  TopProgressBars, ParallaxBackgroundContainer, ReplyButton,
LeadContent, handleScroll} from './ImportRespondingLead'
import { AadharPopupContext } from '../../../AadhaarVerifiedPopup/AadharPopupContext';
const AadhaarVerifiedPopup = lazy(() => import("../../../AadhaarVerifiedPopup/AadhaarVerifiedPopup"));

const LeadContainer = ({ singleLeadsData, currentIndex, setCurrentIndex, isPaused, setCurrentImageIndex, remainingTime,
    lastPausedTimestamp,  setRemainingTime, setLastPausedTimestamp,setProgress, currentImageIndex, progress, manual,setManual,
    scrollheight, setScrollheight, scrollPosition, scrollDivRef, setScrollPosition,setIsPaused, remainingTimeProgress, 
    setRemainingTimeProgress, isClickableAreaVisible, setIsClickableAreaVisible, userCode, isLive,productionUrl,
    leadId, setFormData, shareLoader, setShareLoader, locationLoader, setLocationLoader
}) => {
    const { showVerifiedPopup, setShowVerifiedPopup } = useContext(AadharPopupContext);
    const [isLoading, setIsLoading] = useState(false);

    const parallaxDataProps ={ data:singleLeadsData[0] ,currentIndex, setCurrentIndex,isPaused, setCurrentImageIndex, remainingTime,
        lastPausedTimestamp,setLastPausedTimestamp, setRemainingTime, setProgress, progress, currentImageIndex,
        scrollDivRef, setScrollPosition, setIsPaused, isLoading, setIsLoading
    }

    const topProgressProps = {   data:singleLeadsData[0] ,currentIndex, setCurrentImageIndex, setCurrentIndex, progress,setProgress,
        isPaused,  scrollPosition,  scrollDivRef, scrollheight, setScrollheight}

    const LeadContentProps = {data:singleLeadsData[0],currentIndex,  setCurrentIndex,setCurrentImageIndex, progress,manual, 
        setManual,setProgress, isPaused,  setIsPaused, remainingTime,lastPausedTimestamp, setRemainingTime, setLastPausedTimestamp, 
        remainingTimeProgress, setRemainingTimeProgress, scrollheight,setScrollheight,isClickableAreaVisible, isLoading,
        setIsClickableAreaVisible, userCode,shareLoader, setShareLoader, locationLoader, setLocationLoader, scrollDivRef, setScrollPosition, setShowVerifiedPopup,
    }
    return (
        <>
            <ParallaxBackgroundContainer {...parallaxDataProps}>
                <TopProgressBars {...topProgressProps} />

                <div className="scrollcontentcontainer" id="scrollDiv"
                   onScroll={() => handleScroll(scrollDivRef, setScrollheight, setScrollPosition)} ref={scrollDivRef} >
                    <LeadContent {...LeadContentProps} />
                </div>
                <ReplyButton userCode={userCode} isLIve={isLive} productionUrl={productionUrl} leadId={leadId} setFormData={setFormData} />
            </ParallaxBackgroundContainer>
            <AadhaarVerifiedPopup showVerifiedPopup={showVerifiedPopup} setShowVerifiedPopup={setShowVerifiedPopup} />
        </>
    )
}
export default LeadContainer