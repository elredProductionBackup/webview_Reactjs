import { useNavigate } from "react-router-dom";
import { navigateToPathWithState } from "../../../../../../globalFunctions";

const SeeAllLeads = ({ userCode, isLive, productionUrl }) => {
  const navigate = useNavigate();
  const navigateState = { isLive, productionUrl };

  return (
    <div className="leads-top">
      <div>Offerings Gallery</div>
      <div
        className="see-text"
        onClick={() =>
          navigateToPathWithState(
            navigate,
            userCode,
            "/leads",
            navigateState
          )
        }
      >
        See all
      </div>
    </div>
  );
};

export default SeeAllLeads;
