import React, { useContext } from 'react';
import moment from "moment";
import SliderContainer from "../../components/SliderContainer/SliderContainer";
import UserAndShare from "../../components/UserAndShare/UserAndShare";
import TextAndDescription from "../../components/TextAndDescription/TextAndDescription";
import ClickableAreaPauseAnimation from "../../components/ClickableAreaPauseAnimation/ClickableAreaPauseAnimation";

const LeadContent = ({ data, currentIndex, setCurrentIndex, setCurrentImageIndex, progress, manual, setManual,
  setProgress, isPaused, setIsPaused, remainingTime, lastPausedTimestamp, setRemainingTime, setLastPausedTimestamp,
  remainingTimeProgress, setRemainingTimeProgress,scrollheight,setScrollheight,isClickableAreaVisible, userCode,shareLoader, 
  setShareLoader, locationLoader, setLocationLoader, scrollDivRef, setScrollPosition, setShowVerifiedPopup, isLoading,
}) => {

  const sliderProps = {
    data, isPaused, setIsPaused, currentIndex, setCurrentIndex, setCurrentImageIndex, setProgress, manual, setManual, progress,
    setRemainingTime, remainingTimeProgress, setRemainingTimeProgress, remainingTime, lastPausedTimestamp, setLastPausedTimestamp,
    scrollheight, setScrollheight, scrollDivRef, setScrollPosition, isLoading
  }

  return (
    <>
      {data?.backgroundImages?.length !== 0 ? (
        <div>
          <SliderContainer {...sliderProps} />
          {isClickableAreaVisible && data?.backgroundImages?.length !== 0 && (
            <ClickableAreaPauseAnimation setIsPaused={setIsPaused} isLoading={isLoading} />
          )}
        </div>
      ) : <div className="no-image-scrollContainer-top"></div>}
      <div className="singleleadDate">
        Created on {moment(data?.leadCreatedAt).format("ddd, DD MMM YYYY")}
      </div>
      <UserAndShare data={data?.leadOwnerDetails} shareData={data} userCode={userCode} shareLoader={shareLoader}
        setShareLoader={setShareLoader} setShowVerifiedPopup={setShowVerifiedPopup}/>
      <TextAndDescription data={data} locationLoader={locationLoader} setLocationLoader={setLocationLoader} />
    </>
  );
};

export default LeadContent;
