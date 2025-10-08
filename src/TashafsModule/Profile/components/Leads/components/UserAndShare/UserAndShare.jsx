import { useState, useRef, useEffect } from 'react'
import {
  Spinner, shareIcon, defaultDpURL, bluetick, handleShareProfile, shareURL, calcTextLength, onProfileClick, calcWidthAnimation
} from './ImportUserShare'
import Skeleton from 'react-loading-skeleton';
import { capitalizeLeadIndustry } from '../../../../../../globalFunctions';

const UserAndShare = ({ data, shareData, userCode, shareLoader, setShareLoader, setShowVerifiedPopup }) => {
  const [calculateWidth, setCalculateWidth] = useState('')
  const capitalizedFirstName = data?.firstname ? data?.firstname : '';
  const capitalizedLastName = data?.lastname ? data?.lastname : '';
  const myDivRef = useRef(null);
  const [showShimmer, setShowShimmer] = useState(true)

  useEffect(() => {
    calcWidthAnimation(myDivRef, setCalculateWidth)
  }, [myDivRef]);

  return (
    <div className="userandsharecontainer">
      <div className="userdata">
        <span className={showShimmer ? "userShimmerimg" : "userprofileimg"} onClick={(e) => {
          if(!showShimmer) onProfileClick(e, shareURL, userCode)}}>
          <div className={showShimmer ? 'showing-img-loader skelleton-margin' : "hiding-img-loader "}>
            <div className='skellBorder'>
              <Skeleton
                width={36}
                height={36}
                borderRadius={50}
                baseColor={`#d6dae5`}
              />
            </div>
          </div>
            <img  className={!showShimmer && data?.dpURL?.length !== 0 ? 'NoDPURL' : "d-none"} 
            src={data?.dpURL?.length !== 0 ? data?.dpURL : defaultDpURL} alt="profile" onLoad={() => setShowShimmer(false)} />
        </span>
        <div ref={myDivRef} className="userdetail">
          <div className='username-bluetick'>
            <div className={calculateWidth < 200 ? "username-no-ellipsis" : "username"}
              onClick={(e) => onProfileClick(e, shareURL, userCode)}>{`${capitalizedFirstName} ${capitalizedLastName}`}</div>
            {data?.aadhaarVerifiedStatus && <div className="bluetick-responding-leads" onClick={() => setShowVerifiedPopup(true)}> <img src={bluetick} alt="" /> </div>}
          </div>

          <div className="userjobcompany">

            <span className={data?.companyName?.length === 0 || data?.companyName?.length <= 18 ? "no-user-designation" : "user-designation"}
              onClick={(e) => onProfileClick(e, shareURL, userCode)}>
              {calcTextLength(data?.title[0]?.value?.length, capitalizeLeadIndustry(data?.title[0]?.value))}
            </span>

            {data?.title?.length > 1 && <span> | +{data?.title?.length - 1}  </span> }        

            {(data?.companyName !== null && data?.companyName?.length !== 0 && data?.title?.length > 0) && <div className='divider-company'>|</div>}
            {data?.companyName && (
              <span className={data?.companyName === null && data?.companyName?.length === 0 ? "no-user-company" : "user-company"}
                onClick={(e) => onProfileClick(e, shareURL, userCode)}>
                {calcTextLength(data?.companyName?.length, data?.companyName)}
              </span>
            )}
          </div>
        </div>
      </div>
      <div>
        <span className="shareiconimage" onClick={() => handleShareProfile(shareData)}>
          <Spinner animation="border" variant="#fff" size="sm" className={shareLoader ? 'show-img-loader-share' : 'hide-img-loader'} />
          <img className={shareLoader ? 'hide-img-loader' : 'd-block'} src={shareIcon} alt="share" 
          onLoad={() => setShareLoader(false)} />
          </span>
      </div>
    </div>
  );
};

export default UserAndShare;
