import { useNavigate } from 'react-router-dom';
import {
  useState, designationImg, avatar, locate, bluetick, calcTextLength,
  handleMapClick, Spinner, DesignationListProfile, defaultGroupImg
} from './ImportsUserDetail'
import Skeleton from "react-loading-skeleton";
import { capitalNames, convertToRgbColor, handleMouseOver } from '../../../../globalFunctions';
const UserDetails = ({ profileImg, designation, location, firstName, lastName, adhaar, setShowVerifiedPopup, userCode, setShowTitlesPopup, baseColor, isNetwork, networkCode, networkData }) => {

  // const newAddress = `${location?.city?.length > 0 ? location?.city + "," : ""} ${location?.country}`
  // const networkAddress = `${location?.city && location?.state && location.city === location.state ? "" : location?.city ? location.city + "," : ""} ${location?.state ? location.state + "," : ""} ${location?.country}`;
  // const address = isNetwork ? networkAddress : newAddress;
  // const formattedAddress = address?.length <= 28 ? address : address?.slice(0, 28) + '...';
  const newAddress = `${location?.city?.length > 0 ? location?.city + "," : ""} ${location?.country}`;
  const networkAddress = `${location?.city && location?.state && location.city === location.state ? "" : location?.city ? location.city + "," : ""} ${location?.state ? location.state + "," : ""} ${location?.country}`;
  const address = isNetwork ? networkAddress : newAddress;
  const formattedAddress = isNetwork ? address : (address?.length <= 28 ? address : address?.slice(0, 28) + '...');


  const username = `${firstName} ${lastName}`
  const [designationLoader, setDesignationLoader] = useState(true)
  const [locationLoader, setLocationLoader] = useState(true)
  const [profileImageLoader, setprofileImageLoader] = useState(true)
  const [imgError, setImgError] = useState(false);
  const navigate = useNavigate();
  const [tooltip, setTooltip] = useState(false);

  let color = convertToRgbColor(baseColor);
  const rgba = `rgba(${color?.[0]},${color?.[1]},${color?.[2]},50%)`;

  return (
    <div className="user-details">
      <span className="profile-img">
        <Skeleton
          circle
          height={62}
          width={62}
          className={profileImageLoader ? 'showing-img-loader user-img' : 'hiding-img-loader'}
          baseColor={`${rgba}`}
        />
        <span onClick={() => navigate(`${isNetwork ? `/view-network-picture?networkCode=${networkCode}` : `/view-profile-picture?userCode=${userCode}`}`)} style={{ cursor: "pointer" }}>
          <img src={profileImg == "" ? avatar : isNetwork && imgError ? defaultGroupImg : profileImg} alt="" onLoad={() => setprofileImageLoader(false)}
            className={!profileImageLoader ? 'showing-img-loader' : "hiding-img-loader"}
            onError={() => setImgError(true)}
          />
        </span>
      </span>
      {isNetwork && <div className='network_profile_name'>
        <img src={networkData?.logo} alt='network_name' onClick={()=>navigate(`/view-network-cluster-picture?networkCode=${networkCode}`)}
        style={{cursor:"pointer"}} />
        <div className='networkData_name'>{networkData?.name}</div>
        </div>}
      <div className="name">
        <div onMouseOver={() => handleMouseOver(setTooltip)} onMouseLeave={() => { if (tooltip) setTooltip(false)}}
        className={isNetwork ? "networkUserName" : "profileUserName"}>{isNetwork ? username : calcTextLength(username.length, username, 'name')}</div>
        {adhaar && <div className="btick" onClick={() => setShowVerifiedPopup(true)}>
          <img src={bluetick} alt="" className="blue-verify-tick" />
        </div>}
        {tooltip && <div className="profileUserName-tooltip-container">
          <div className="profileUserName-tooltip">{username}</div>
        </div>}
      </div>
      {designation && <div onClick={() => setShowTitlesPopup(true)} className="designation">
        <img src={designationImg} className={!designationLoader ? 'showing-img-loader designation-image' : "hiding-img-loader"} onLoad={() => setDesignationLoader(false)} alt="" />
        <Spinner animation="border" variant="light"
          size="sm" className={designationLoader ?
            'showing-img-loader designation-loader' : 'hiding-img-loader'} />

        <div className="designation-name">
          <DesignationListProfile designation={designation} maxWidth={115} />
        </div>
      </div>}
      <div className="locate" >
        <Spinner animation="border" variant="light" size="sm" className={locationLoader ? 'showing-img-loader location-loader' : 'hiding-img-loader'} />
        <span className="location-img-profile" onClick={() => handleMapClick(location?.latitude, location?.longitude)}>
          <img src={locate} alt="" className={!locationLoader ? 'showing-img-loader location-img' : "hiding-img-loader"}
            onLoad={() => setLocationLoader(false)} /></span>
        <span className="location-name" onClick={() => handleMapClick(location?.latitude, location?.longitude)}>
          {/* {formattedAddress?.length <= 32 ? capitalNames(formattedAddress) : capitalNames(formattedAddress?.slice(0, 33) + '...')} */}
          {capitalNames(formattedAddress)}
        </span>
      </div>
    </div>
  );
};

export default UserDetails;
