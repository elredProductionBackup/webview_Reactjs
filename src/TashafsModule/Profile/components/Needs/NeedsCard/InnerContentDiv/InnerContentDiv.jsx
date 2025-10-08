import React, { useState } from "react";
import moment from "moment";
import shareIcon from "../../../../../../assets/images/share-arrow.svg";
import { handleShareProfile } from "../../needsGlobalFunctions";
import { Spinner } from "react-bootstrap";
import {
  capitalizeNeedTitles,
  formatPricing,
} from "../../../../../../globalFunctions";
import ReactLinkifyComp from "../../../ReactLinkifyComp/ReactLinkifyComp";
import LeadsCardLocation from "../../../Leads/Pages/Leadsreply/LeadsReplyCard/LeadsCard/LeadsCardLocation";

const InnerContentDiv = ({ data }) => {
  const [logoLoader, setLogoLoader] = useState(true);
  const needTitleTags = data?.needType?.toLowerCase() === "introduction" ? capitalizeNeedTitles(data?.titleTags?.[0]) : data?.titleTags?.[0]
  const formattedPricing = data?.pricingRange?.currency!==""? formatPricing(data?.pricingRange?.minValue, data?.pricingRange?.maxValue, data?.pricingRange?.currency):"";

  const [locationLoader, setlocationLoader] = useState(true)
  return (
    <div className="details_div">
      <div className="content_outer">
        <div className="inner_header">
          <div className="date">
            {moment(data?.needCreatedAt).format("ddd, DD MMM YYYY")}
          </div>
          <div className="share" onClick={() => handleShareProfile(data)}>
            <Spinner
              animation="border"
              variant="light"
              size="sm"
              className={
                logoLoader ? "show-img-loader spinner" : "hide-img-loader"
              }
            />
            <img
              src={shareIcon}
              alt=""
              className={logoLoader ? "hide-img-loader" : "show-image-after-loader"}
              onLoad={() => setLogoLoader(false)}
            />{" "}
            Share
          </div>
        </div>

        {data?.needType?.toLowerCase() === "introduction" ? null : 
          <LeadsCardLocation locationLoader={locationLoader}
                setlocationLoader={setlocationLoader} data={data}
                formattedPricing={formattedPricing} type='needs' />}

        <div className="needs_card_inner_content_title">{needTitleTags}</div>
        <div className="content">
          <ReactLinkifyComp data={data?.needDescription}/>
        </div>
      </div>
    </div>
  );
};

export default InnerContentDiv;
