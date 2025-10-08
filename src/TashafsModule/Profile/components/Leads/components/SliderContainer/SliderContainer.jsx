import React from 'react';
import './SliderContainer.scss'
import { handlePreviousImage, handleNextImage } from './apiServices/SliderFunction'


const SliderContainer = ({ data, isPaused, setIsPaused, currentIndex, setCurrentIndex, setCurrentImageIndex, setProgress,manual, setManual, progress, setRemainingTime, 
    remainingTimeProgress, setRemainingTimeProgress,scrollDivRef, setScrollPosition, isLoading }) => {

    return (
        <div>
            <div className={isLoading ? "left-container" : "left-container left-container-cursor"} 
            onClick={() => {if (isLoading) return false; handlePreviousImage(data, isPaused, setIsPaused, currentIndex, setCurrentIndex, setCurrentImageIndex,
             setProgress, manual, setManual, progress, setRemainingTime, remainingTimeProgress, setRemainingTimeProgress);  
             setScrollPosition(scrollDivRef.current.scrollTop)}} />
            <div className={isLoading ? "right-container" : "right-container right-container-cursor"}  onClick={() => {if (isLoading) return false; handleNextImage(data, isPaused, setIsPaused, currentIndex, setCurrentIndex, setCurrentImageIndex, setProgress, manual, setManual, progress, 
                setRemainingTime, remainingTimeProgress, setRemainingTimeProgress) ; setScrollPosition(scrollDivRef.current.scrollTop)}} />
        </div>
    )
}
export default SliderContainer;