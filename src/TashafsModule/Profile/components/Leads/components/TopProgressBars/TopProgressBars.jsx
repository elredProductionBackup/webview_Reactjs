import { useEffect } from "react";
import ProgressBarComponent from "../../common/ProgressBarComponent/ProgressBarComponent";
import { updateProgress, scrollDiv } from "../../../../../../globalFunctions";

const TopProgressBars = ({ data, currentIndex, progress, setProgress, isPaused,  scrollPosition, scrollDivRef
}) => {

  useEffect(() => {
    let intervalProgress = updateProgress(setProgress, currentIndex, isPaused);
    return () => clearInterval(intervalProgress);
  }, [currentIndex, data?.backgroundImages?.length, isPaused]);

  useEffect(() => {
    scrollDiv(scrollPosition, scrollDivRef);
  }, [scrollPosition]);

  return (
    <div>
      {data?.backgroundImages?.length === 0 ? (
        <ProgressBarComponent data={null} progress={null} index={null} />
      ) : (
        <div className="progress-bars-row">
          {data?.backgroundImages?.map((_, index) => (
            <ProgressBarComponent key={data?.backgroundImages + Math.random()} data={data}
              progress={progress} index={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TopProgressBars;
