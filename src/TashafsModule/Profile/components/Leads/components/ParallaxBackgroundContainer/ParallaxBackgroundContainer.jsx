import { useEffect, useState } from "react";
import { Spinner } from 'react-bootstrap'
import { pausePlayAnimation, updateProgress } from "../SliderContainer/apiServices/SliderFunction";
import NoLeadImage from '../../../../../../assets/images/leads-no-img-background.png'
import { checkChromeIOS, getBrowserType } from '../../../../../../globalFunctions';

const ParallaxBackgroundContainer = ({ data, currentIndex, setCurrentIndex, children, isPaused, setCurrentImageIndex,
  remainingTime, lastPausedTimestamp, setLastPausedTimestamp, setRemainingTime, setProgress, progress, currentImageIndex,
  scrollDivRef, setScrollPosition, setIsPaused, isLoading, setIsLoading
}) => {
  const browserType = getBrowserType();
  const iosChrome = checkChromeIOS();
  const [erroState, setErrorState] = useState(false)

  useEffect(() => {
    if (isLoading) { 
      return pausePlayAnimation({
        isPaused, currentIndex, data, setCurrentIndex, setCurrentImageIndex,
        updateProgress, setRemainingTime, lastPausedTimestamp, setLastPausedTimestamp, setProgress, progress, remainingTime,
        scrollDivRef, setScrollPosition
      })
    }; 
    return pausePlayAnimation({
      isPaused, currentIndex, data, setCurrentIndex, setCurrentImageIndex,
      updateProgress, setRemainingTime, lastPausedTimestamp, setLastPausedTimestamp, setProgress, progress, remainingTime,
      scrollDivRef, setScrollPosition
    });
  }, [isPaused, currentIndex, lastPausedTimestamp, data, isLoading]);

  useEffect(() => {
    if(data?.backgroundImages?.length === 1) {setIsPaused(false) ; return}
    setIsLoading(browserType === "ios" || iosChrome ? false : true)
    if (data?.backgroundImages?.length > 0) {
      const promises = data?.backgroundImages?.map((item) => {
        setIsPaused(true)
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => {
            resolve();
          };
          img.onerror = () =>{
            setErrorState(true)
          }
          img.src =  item 
        });
      });

      Promise.all(promises).then(() => {
        setIsLoading(false);
        setIsPaused(false);
      });
    }else{
      setIsPaused(true)
      const img = new Image();
      img.onload = () => {
        setIsLoading(false);
        setIsPaused(false);
      };
      img.src =  NoLeadImage  
    }
  }, []);

  return (
    <>
      <div key={`${currentIndex}_${currentImageIndex}`} className={erroState || data?.backgroundImages?.length === 0 ?
        "defaultImage" : "containerrespondingleads "}
        style={!erroState && isLoading ? { backgroundColor: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 24.98%, rgba(0, 0, 0, 0.80) 66.46%)' } : {
          backgroundImage: erroState || data?.backgroundImages?.length === 0  ? 
          `linear-gradient(180deg, rgba(0, 0, 0, 0.80), rgba(0, 0, 0, 0.8)), url(${NoLeadImage})`  :
            `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${data?.backgroundImages[currentIndex]})`,
          animationPlayState: `${isPaused ? "paused" : ""}`
        }}
      >
        {children}
        { !erroState && isLoading ? (
               <Spinner animation="border" variant="dark" size="sm" className="showing-img-loader-leads"/>
        ) : null}
      </div>
    </>
  );
};

export default ParallaxBackgroundContainer;
