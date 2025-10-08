import ProgressBar from "react-bootstrap/ProgressBar";

const ProgressBarComponent = ({ data, progress, index }) => {
  return (
  <>
    {data ? 
    <ProgressBar variant="light" style={{
        height: "4px", backgroundColor: "#ffffff66",
        transition: "width 5s linear",
        width: `${100 / data?.backgroundImages?.length}%`,
      }}
      now={progress[index]}
    /> : <ProgressBar className="nobgline" variant="light"
            style={{ height: "4px" }} now="100" />
    }
  </>
  );
};

export default ProgressBarComponent;
