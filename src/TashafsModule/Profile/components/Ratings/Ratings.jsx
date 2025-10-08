import React, { useState, lazy } from "react";
import "./ratings.scss";
import star from "../../../../assets/images/star.svg";
import { Spinner } from "react-bootstrap";
const RatingsContainer = lazy(() => import("./RatingsContainer/RatingsContainer"));

const Ratings = ({ rgba, data1, data2, hasMore, fetchNextPage, pagingData1, pagingData2, isMore, fetchMorePage,
  meetLoader, ethicalloader, setLoading, meetSetLoading, deBoundeEthical, meetfetchLoader, loader,
  deBoundeMeet, ratingsDataSearch, virtuallyMetDataSearch, isSearchEthical, isSearchMeet, closeMeetpopUp,
  closeEthicalPopup, meetSearchMore, ethicalSearchMore, baseColor, ethicalPage, meetPage, tempsearchtextethical,
  tempsearchtextMeet, ethicalWholeDataCountLoader, metWholeDataCountLoader, isLive, productionUrl, ethicalSearchCount, meetSearchCount,ethicalFetchData,meetFetchData }) => {
  const [showEthical, setShowEthical] = useState(false);
  const [showMet, setShowMet] = useState(false);

  const ratingsContainerProps = {
    showEthical, showMet, data1, data2, pagingData1, pagingData2, setShowEthical, baseColor,
    setShowMet, hasMore, isMore, fetchMorePage, fetchNextPage, meetLoader, ethicalloader,
    setLoading, meetSetLoading, deBoundeEthical, meetfetchLoader, loader, deBoundeMeet,
    ratingsDataSearch, virtuallyMetDataSearch, isSearchEthical, isSearchMeet, closeMeetpopUp,
    closeEthicalPopup, meetSearchMore, ethicalSearchMore, ethicalPage, meetPage, tempsearchtextethical,
    tempsearchtextMeet, isLive, productionUrl, ethicalSearchCount, meetSearchCount,ethicalFetchData,meetFetchData
  };

  

  const [logoLoader, setLogoLoader] = useState(true)
  return (
    <div className="ratings" style={{ background: `${rgba}` }}>
      <div className="circle-logo" style={{ background: `${rgba}` }}>
        <Spinner animation="border" variant="light" size="sm" className={logoLoader ? 'show-img-loader' : 'hide-img-loader'} />
        <img src={star} alt="" className={logoLoader ? 'hide-img-loader' : 'show-image-after-loader'} onLoad={() => setLogoLoader(false)} />
      </div>
      <div className="title-ratings">Ratings</div>
      <div className="desc-ratings" onClick={() => setShowEthical(true)}>
        <div className="ratings-count">
          {ethicalWholeDataCountLoader ? (
            <Spinner animation="border" variant="light" size="sm" className={ethicalWholeDataCountLoader ? 'ratingCountLoader' : 'd-none'} />
          ) : (
            data1.ethicalCodeYesCount
          )}
        </div>

        <div className="ratings-desc">
          Say has ethical code of conduct / and is safe to do business with
        </div>
      </div>
      <hr style={{ margin: "0 23px" }} className="hr-line" />
      <div className="desc-ratings" onClick={() => setShowMet(true)} style={{ paddingBottom: '20px', margin: "0" }}>
        <div className="ratings-count">
          {metWholeDataCountLoader ? (
            <Spinner animation="border" variant="light" size="sm" className={metWholeDataCountLoader ? 'ratingCountLoader' : 'd-none'} />
          ) : (
             data2.virtuallyMetYesCount
          )}
        </div>
        <div className="ratings-desc">Have met in real life / virtually</div>
      </div>
      <RatingsContainer {...ratingsContainerProps} />
    </div>
  );
};

export default Ratings;
