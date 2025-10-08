import React, { useState } from 'react'
import { calcTextLength, capitalizeLeadIndustry, viewProfile } from '../../../../../../../../globalFunctions'
import bluetick from "../../../../../../../../assets/images/blue_tick.svg";
import defaultDpURL from '../../../../../../../../assets/images/defaultDp.png'
import Skeleton from 'react-loading-skeleton';

function LeadsCardProfile({ data, setShowVerifiedPopup }) {
  const name = `${data?.leadOwnerDetails?.firstname} ${data?.leadOwnerDetails?.lastname}`
  const [showShimmer, setShowShimmer] = useState(true)
  return (
    <>
      <div className="user-details-profile" >
        <div className={showShimmer ? "user-details-profile-inner-div-shimmer" :
          'user-details-profile-inner-div'} onClick={() => { if (!showShimmer) viewProfile(data) }}>
          <span className="user-card-profile" >
            <div className={showShimmer ? 'd-block skelleton-margin' : "hiding-img-loader "}>
              <div className='skellBorder-chart'>
                <Skeleton
                  width={34}
                  height={34}
                  borderRadius={50}
                  baseColor="#242939"
                  highlightColor="#1e212b"
                />
              </div>
            </div>
            <img
              className={showShimmer ? "d-none" : "user-card-profile-img"}
              src={data?.leadOwnerDetails?.dpURL !== "" ? data?.leadOwnerDetails?.dpURL : defaultDpURL}
              alt="profile"
              onLoad={() => setShowShimmer(false)}
            />
            <span className="user-name-container">
              <span className='d-flex'>
                <span className="user-name" >{calcTextLength(18, name, 'name')} </span>
                {data?.leadOwnerDetails?.aadhaarVerifiedStatus && <span onClick={(e) => { e.stopPropagation(); setShowVerifiedPopup(true) }} className="bluetick-leadsProfile">
                  <img src={bluetick} alt="" />
                </span>}
              </span>

              <div className="location">
                {data?.leadOwnerDetails?.title.length > 0 && <div className={data?.leadOwnerDetails?.companyName?.length !== 0 && data?.leadOwnerDetails?.companyName !== null && data?.leadOwnerDetails?.companyName?.length > 6 ? 'designation' :
                  data?.leadOwnerDetails?.companyName?.length !== 0 && data?.leadOwnerDetails?.companyName !== null && data?.leadOwnerDetails?.companyName?.length <= 6 ? 'designation-half'
                    : 'designation-alone'} >
                  {calcTextLength(data?.leadOwnerDetails?.title[0]?.value?.length, capitalizeLeadIndustry(data?.leadOwnerDetails?.title[0]?.value))}
                </div>}
                {(data?.leadOwnerDetails?.companyName !== null && data?.leadOwnerDetails?.companyName?.length !== 0 &&
                  data?.leadOwnerDetails?.title?.length > 0) && <div className='divider-lead'>|</div>}
                {data?.leadOwnerDetails?.companyName !== null && (
                  <div className={data?.leadOwnerDetails?.title[0]?.value.length < 4 ? 'company-half' :
                    data?.leadOwnerDetails?.title.length > 0 && data?.leadOwnerDetails?.title[0]?.value.length >= 4 &&
                      data?.leadOwnerDetails?.title[0]?.value.length < 10 ? "company-more" :
                      data?.leadOwnerDetails?.title.length > 0 ? 'company' : 'company-only'}>
                    {calcTextLength(data?.leadOwnerDetails?.companyName?.length,
                      data?.leadOwnerDetails?.companyName)}
                  </div>
                )}
              </div>
            </span>
          </span>
          <span className="view-profile-button" >View profile</span>
        </div>
      </div>
    </>
  )
}

export default LeadsCardProfile
