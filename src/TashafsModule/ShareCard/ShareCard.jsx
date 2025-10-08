import { useEffect } from 'react';
import {useState, logo, cardUser, useSearchParams, ShareCardShimmer, ErrorPage, useShareCardFetch, 
  ShareCardContainer, ShareCardPopups} from './ImportsShareCard'
import { clearToasts } from 'react-simple-toasts';
import NetworkListIndex from '../../components/NetworkList/NetworkListIndex';

const ShareCard = ({ productionUrl, isLive }) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const userCode = searchParams.get("userCode");
  const [open, setOpen] = useState(false);
  const [enable, setEnable] = useState(false);
  const [openMail, setOpenMail] = useState(false);
  const [webEnable, setWebEnable] = useState(false);
  const [locationEnable, setLocationEnable] = useState(false);
  const [openNetworkList, setOpenNetworkList] = useState(false);
  const [showUserFeedbackPopup, setShowUserFeedbackPopup] = useState(false);

  const { loading, userDetail, cardDetail, data, error } = useShareCardFetch(isLive, productionUrl, userCode);

  const shareCardContainerProps = {
    userDetail, cardDetail, data, setEnable, setOpen, setOpenMail,
    setLocationEnable, setWebEnable, logo, cardUser, setOpenNetworkList
  }
  const shareCardPopupsProps = {
    open, setOpen, userDetail, enable, setEnable, openMail,
    setOpenMail, locationEnable, setLocationEnable, webEnable, setWebEnable
  }
  useEffect(() => {
    clearToasts();
  }, []);

  return (
    <div className="share-card">
      {
        loading ? <ShareCardShimmer /> : (error == false ? <ErrorPage /> :
        openNetworkList ? <NetworkListIndex  userCode={userCode} isLive={isLive} productionUrl={productionUrl} setOpenNetworkList={setOpenNetworkList} 
          showUserFeedbackPopup={showUserFeedbackPopup} setShowUserFeedbackPopup={setShowUserFeedbackPopup} isShareCard={true} /> :
          <>
            <ShareCardContainer {...shareCardContainerProps} />
            <ShareCardPopups {...shareCardPopupsProps} />
          </>)
      }
    </div>
  );
};

export default ShareCard;
