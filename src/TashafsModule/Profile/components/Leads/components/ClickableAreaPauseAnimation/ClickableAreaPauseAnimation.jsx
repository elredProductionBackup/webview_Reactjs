const ClickableAreaPauseAnimation = ({ setIsPaused, isLoading }) => {
  return (
    <div
      className={isLoading ? "clickable-area" : "clickable-area clickable-area-cursor"}
      onClick={() => {if (isLoading) return false ; setIsPaused((prevIsPaused) => !prevIsPaused)}}
    ></div>
  );
};

export default ClickableAreaPauseAnimation;
