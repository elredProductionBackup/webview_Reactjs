import React, { useContext, useState } from "react";
import avatar from "../../../../../../assets/images/avatar.png";
import bluetick from "../../../../../../assets/images/blue_tick.svg";
import { viewProfile } from "../../needsGlobalFunctions";
import { calcTextLength, capitalizeLeadIndustry } from "../../../../../../globalFunctions";
import { AadharPopupContext } from "../../../AadhaarVerifiedPopup/AadharPopupContext";
import Skeleton from "react-loading-skeleton";

const ProfileTop = ({ data }) => {
  const { dpURL, firstname, lastname, companyName, title, aadhaarVerifiedStatus } =
    data?.needOwnerDetails;
  const { setShowVerifiedPopup } = useContext(AadharPopupContext);
  const [showShimmer, setShowShimmer] = useState(true)

  const name = `${firstname} ${lastname}`

  return (
    <div className={showShimmer ? "profile_top_wrapper-shimmer" : "profile_top_wrapper"} onClick={() => { if (!showShimmer) viewProfile(data) }}>
      <div className="profile_div">
        <div className={showShimmer ? 'd-block skelleton-margin' : "hiding-img-loader "}>
          <div className='skellBorder-chart-need'>
            <Skeleton
              width={36}
              height={36}
              borderRadius={50}
              baseColor="#242939"
              highlightColor = "#1e212b"
            />
          </div>
        </div>
        <div className={!dpURL == "" && showShimmer ? "d-none" : "avatar"}>
          <img src={dpURL == "" ? avatar : dpURL} alt="" className={!dpURL == "" && showShimmer ? "d-none" : "d-block"}
            onLoad={() => setShowShimmer(false)} />
        </div>
        <div className="name_detail">
          <span className='d-flex'>
            <span className={aadhaarVerifiedStatus ? "name name_withAdhar" : "name"} >{calcTextLength(18, name, 'name')} </span>
            {aadhaarVerifiedStatus && <span onClick={(e) => { e.stopPropagation(); setShowVerifiedPopup(true) }} className="bluetick-NeedsProfile">
              <img src={bluetick} alt="" />
            </span>}
          </span>
          <div className="location">
            <span className={(companyName?.length !== 0 && companyName !== null && companyName?.length <=6) ? "needs-designation-half":(companyName?.length !== 0 && companyName !== null && companyName?.length >6) ?"needs_designation" : "needs_designation-alone"}>
              {calcTextLength(title?.[0]?.value.length, capitalizeLeadIndustry(title?.[0]?.value))}

            </span>

            {(companyName !== null && companyName?.length !== 0 && title?.[0]?.value.length > 0) && <span>|</span>}
            {companyName && (
              <span className={title?.[0]?.value.length < 4 ? "needs-company-more " : title?.[0]?.value.length > 4 && title?.[0]?.value.length < 10 ? "needs-company-less" : title.length === 0 ? "needs_company-alone" : "needs_company"}>

                {calcTextLength(companyName?.length, companyName)}
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="view_button">
        View profile
      </div>
    </div>
  );
};

export default ProfileTop;
