import { goToNetworks } from "../../../globalFunctions";
import "./networkiconbadges.scss";
import NetworkIconBadgeSingle from "./NetworkIconBadgeSingle/NetworkIconBadgeSingle";
import { useNavigate } from "react-router-dom";

const NetworkIconBadges = ({ data, count, setOpenNetworkList }) => {
  const navigate = useNavigate();
  const baseColor = "#242939";
  const highlightColor ="#1e212b";

  const handleNetworkRedirect = (e) => {
    count > 1 ? setOpenNetworkList(true) 
    : goToNetworks(navigate, data[0]?.networkCode, e);
  }

  return (
    <div className="network-icon-badges">
      {count < 4 ? (
        <div className="network-icon-badges-clickable-span" onClick={handleNetworkRedirect}>
          {data?.map((item) => (
            <NetworkIconBadgeSingle key={item?.networkCode} item={item} baseColor={baseColor} highlightColor={highlightColor} />
          ))}
        </div>
      ) : (
        <div className="network-icon-badges-clickable-span" onClick={handleNetworkRedirect}>
          {data?.slice(0, 3).map((item) => (
            <NetworkIconBadgeSingle key={item?.networkCode} item={item} baseColor={baseColor} highlightColor={highlightColor} />
          ))}
          <div className="network-icon-badge network-icon-total-badge-bg">
            <span className="d-block network-icon-total-badge">
              {" "}
              +{(count - 3) < 100 ? count - 3 : "99"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default NetworkIconBadges;
