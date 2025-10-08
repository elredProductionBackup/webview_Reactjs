import { useNavigate } from "react-router-dom";
import { navigateToLeadsWithState } from "../../../../../../globalFunctions";

const ReplyButton = ({ userCode, isLive, productionUrl, leadId ,setFormData}) => {
  const navigate = useNavigate();
  const navigateState = { isLive, productionUrl };
  return (
    <div className="replyleadsbuttoncontainer">
      <div
        onClick={(e) =>
          navigateToLeadsWithState(
            navigate,
            userCode,
            leadId,
            "/leads/leads-reply",
            navigateState,
            setFormData,e
          )
        }
        className="replyleadsbutton"
      >
        Reply
      </div>
    </div>
  );
};

export default ReplyButton;
