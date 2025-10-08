import { useNavigate } from "react-router-dom";
//import BackIcon from "../../../../../../assets/images/backpage.svg";
import BackIcon from "../../../../../../assets/images/back-dark-theme.svg";
import DownloadIcon from "../../../../../../assets/images/downloads.svg";
import { navigateToLeadsWithState } from "../../../../../../globalFunctions";
import { downloadElred } from '../../../../../../globalFunctions'
import { useState } from "react";
import { Spinner } from "react-bootstrap";

const LeadsReplyHeader = ({ userCode, isLive, productionUrl, leadId, downloadUrl, setFormData }) => {
  const navigate = useNavigate();
  const navigateState = { isLive, productionUrl };
  const [backLoader, setBackLoader] = useState(true)
  const [downloadLoader, setdownloadLoader] = useState(true)

  return (
    <div className="leads-reply-header">
      <div className="header-left">

        <Spinner animation="border" variant="light" size="sm" className={backLoader ? 'show-img-loader spiner-margin' : 'hide-img-loader'} />

        <img
          onClick={(e) =>
            navigateToLeadsWithState(
              navigate,
              userCode,
              leadId,
              "/leads/responding-leads",
              navigateState,
              setFormData, e
            )
          }
          src={BackIcon}
          className={!backLoader ? 'show-image-after-loader leads-reply-back' : "hide-img-loader "}
          alt="back"
          onLoad={() => setBackLoader(false)}
        />


        <span className="leads-send-reply">Send a reply</span>
      </div>
      {/* <span className="download-elred-button" onClick={downloadElred}> */}
      <span className="download-elred-button" onClick={downloadLoader ? null : () => downloadElred(downloadUrl)}>
        <span>

          <Spinner animation="border" variant="light" size="sm" className={downloadLoader ? 'show-img-loader download-elred-Spinner' : 'hide-img-loader'} />
          <img
            className={!downloadLoader ? 'show-image-after-loader  download-elred-icon' : "hide-img-loader"}
            src={DownloadIcon}
            alt="download"
            onLoad={() => setdownloadLoader(false)}
          />
        </span>

        <span className="download-elred-text" >Download el RED</span>
      </span>
    </div>
  );
};

export default LeadsReplyHeader;
