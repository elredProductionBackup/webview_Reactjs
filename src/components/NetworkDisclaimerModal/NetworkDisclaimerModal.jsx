import { useRef, useState } from "react";
import "./NetworkDisclaimerModal.scss";
import Skeleton from "react-loading-skeleton";

function NetworkDisclaimerModal({ isOpen, onClose, disclaimerData }) {
  const modalRef = useRef();
  const [disclaimerLogo, setDisclaimerLogo] = useState(true);
  const [disclaimerImage, setDisclaimerImage] = useState(true);

  return (
    <div className="disclaimerModalOverlay" onClick={(e) => {!modalRef.current.contains(e.target) && onClose()}}>
      <div className="disclaimerMainContainer" ref={modalRef}>
        <div className="disclaimerModalContainer">
          <div style={{ height: "36px", marginRight: disclaimerLogo ? "8px" : "0" }}>
            <Skeleton
              circle
              height={36}
              width={36}
              baseColor="#4F4F54"
              highlightColor="#444446"
              className={disclaimerLogo ? "d-block" : "d-none"}
            />
          </div>
          <img
            src= {disclaimerData?.networkClusterDetails?.logo}
            alt="err"
            className={!disclaimerLogo ? "networkDisclaimerIcon" : "d-none"}
            onLoad={() => setDisclaimerLogo(false)}
          />
          <div className="disclaimerTopContentTitle">
          {disclaimerData?.networkClusterDetails?.name}
          </div>
        </div>

        <div className="disclaimerContentContainer">
          <div className="disclaimerMainModalScrollContainer">
            <div style={{ height: disclaimerImage ? "80px" : "0px" }} className="disclaimerModalNetworkImage">
              <Skeleton
                circle
                height={80}
                width={80}
                baseColor="#4F4F54"
                highlightColor="#444446"
                className={disclaimerImage ? "d-block" : "d-none"}
              />
            </div>
            <div className="disclaimerModalNetworkImage">
            <img
              src={disclaimerData?.logo}
              alt="err"
              className={!disclaimerImage ? "networkDisclaimerImage" : "d-none"}
              onLoad={() => setDisclaimerImage(false)}
            /></div>

            <div className="disclaimerContentTitle">
              {disclaimerData?.name}
            </div>
            <div className="disclaimerContentDesc">
              {disclaimerData?.disclaimer}
            </div>
          </div>
          <button className="disclaimerButton" onClick={onClose}>
            Ok Understood
          </button>
        </div>
      </div>
    </div>
  );
}

export default NetworkDisclaimerModal;
