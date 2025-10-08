import React from "react";
import { dateFormatter } from "../../../../../../globalFunctions";

const BodyKey = ({moment, data, bluetick}) => {
  return (
    <>
      <div className="body-key">
        <div className="key_name">Description</div>
        <div className="colon">:</div>
        <div className="key_value">
          {data?.description !== ""
            ? data?.description
            : "Description not provided"}
        </div>
      </div>
      <div className="body-key">
        <div className="key_name">Issued date</div>
        <div className="colon">:</div>
        <div className="key_value">
          {data?.issuedDate?.trim() !== ""
            ? dateFormatter(data?.issuedDate)
            : "Date not provided"}
        </div>
      </div>
      <div className="body-key">
        <div className="key_name">Issued by</div>
        <div className="colon">:</div>
        <div className="key_value">
          {data?.issuedBy}
          {data?.issuedOrgVerifiedStatus && <img src={bluetick} alt="" />}
        </div>
      </div>
    </>
  );
};

export default BodyKey;
