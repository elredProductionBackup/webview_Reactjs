export const handlePreviousImage = (data, isPaused, setIsPaused, currentIndex, setCurrentIndex, setCurrentImageIndex, setProgress, progress, setRemainingTime, remainingTimeProgress, setRemainingTimeProgress) => {
    if (currentIndex === 0) {
        setRemainingTimeProgress(5000)
        const updatedProgress = Array.from({ length: currentIndex - 1 }, (_, i) => 100);
        updatedProgress.push(0);
        setProgress(updatedProgress);
        setIsPaused(false);
        setCurrentImageIndex(Math.floor(Math.random() * 90 + 10));
    } else {
        setRemainingTimeProgress(5000)
        const prevIndex = (currentIndex - 1 + data?.backgroundImages?.length) % data?.backgroundImages?.length;
        setCurrentIndex(prevIndex);
        setCurrentImageIndex(Math.floor(Math.random() * 90 + 10));
        updateProgress(prevIndex, setProgress, data?.backgroundImages?.length);
        setIsPaused(false);
        if (prevIndex === currentIndex - 1) {
            const updatedProgress = Array.from({ length: currentIndex - 1 }, (_, i) => 100);
            updatedProgress.push(0);
            setProgress(updatedProgress);
        }
    }
};

export const handleNextImage = (data, isPaused, setIsPaused, currentIndex, setCurrentIndex, setCurrentImageIndex, setProgress, progress, setRemainingTime, remainingTimeProgress, setRemainingTimeProgress) => {
    setRemainingTimeProgress(5000)
    const nextIndex = (currentIndex + 1) % data?.backgroundImages?.length;
    setCurrentIndex(nextIndex);
    setCurrentImageIndex(Math.floor(Math.random() * 90 + 10));
    updateProgress(currentIndex, setProgress, data?.backgroundImages?.length);
    setIsPaused(false);
};

export const updateProgress = (currentIndex, setProgress, data) => {

    if (currentIndex === data - 1) {
        const updatedProgress = Array.from({ length: currentIndex }, (_, i) => 0);
        updatedProgress.push(0);
        setProgress(updatedProgress);
    } else {
        const updatedProgress = Array.from({ length: currentIndex + 1 }, (_, i) => currentIndex === data - 1 ? 0 : 100);
        updatedProgress.push(0);
        setProgress(updatedProgress);
    }
};

export const pausePlayAnimation = ({
    isPaused,
    currentIndex,
    data,
    setCurrentIndex,
    setCurrentImageIndex,
    setRemainingTime,
    lastPausedTimestamp,
    setLastPausedTimestamp,
    setProgress,
    remainingTime,
    scrollDivRef, setScrollPosition
}) => {
    let intervalIndex;

    if (!isPaused) {
        intervalIndex = setInterval(() => {
            setRemainingTime(prevRemainingTime => {
                const nextRemainingTime = prevRemainingTime - 100;
                if (nextRemainingTime <= 0) {
                    const nextIndex = (currentIndex + 1) % data?.backgroundImages?.length;
                    setCurrentIndex(nextIndex);
                    setScrollPosition(scrollDivRef.current.scrollTop)
                    updateProgress(currentIndex, setProgress, data?.backgroundImages?.length);
                    return 5000;
                }
                return nextRemainingTime;
            });
        }, 100);
    }
    else {
        clearInterval(intervalIndex);
    
        if (lastPausedTimestamp !== null) {
            const now = Date.now();
            const pausedTime = now - lastPausedTimestamp;
            setLastPausedTimestamp(null);
            setRemainingTime(prevRemainingTime => Math.max(prevRemainingTime - pausedTime, 0));
            updateProgress(currentIndex, setProgress, data?.backgroundImages?.length);
        }
    }
    return () => clearInterval(intervalIndex);
};

