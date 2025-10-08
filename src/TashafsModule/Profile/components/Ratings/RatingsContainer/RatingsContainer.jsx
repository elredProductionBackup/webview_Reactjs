import { Offcanvas } from 'react-bootstrap'
import RatingsPopUp from '../RatingsPopUp/RatingsPopUp'
//import closeButton from '../../../../../assets/images/closeBg.svg'
import closeButton from '../../../../../assets/images/close_dark.svg'
import { useEffect } from 'react';
import { clearToasts } from 'react-simple-toasts';

const RatingsContainer = ({ showEthical, showMet, data1, data2, pagingData1, pagingData2, setShowEthical, setShowMet,
    hasMore, isMore, fetchNextPage, fetchMorePage, meetfetchLoader, loader, meetLoader, ethicalloader, setLoading, meetSetLoading, deBoundeEthical, deBoundeMeet,
    isSearchEthical, isSearchMeet, ratingsDataSearch, virtuallyMetDataSearch, closeMeetpopUp, closeEthicalPopup, meetSearchMore, ethicalSearchMore, baseColor, ethicalPage, meetPage, tempsearchtextethical, tempsearchtextMeet,
    isLive, productionUrl, ethicalSearchCount, meetSearchCount, ethicalFetchData, meetFetchData }) => {

    useEffect(() => {
        if (showEthical || showMet) {
            clearToasts();
            closeMeetpopUp();
            closeEthicalPopup()
        }
    }, [showEthical, showMet]);
    return (
        <>
            <Offcanvas show={showEthical || showMet} className="ratingsPopRatingsContainer" placement="bottom" onHide={() => {
                setShowEthical(false); setShowMet(false);
                deBoundeMeet("",1,tempsearchtextethical,ratingsDataSearch.length,ethicalSearchMore);deBoundeEthical("",1,tempsearchtextMeet,virtuallyMetDataSearch,meetSearchMore); 
                //ethicalFetchData(1); meetFetchData(1); closeMeetpopUp(); closeEthicalPopup();

            }}>
                {showEthical && (
                    <RatingsPopUp
                        count={isSearchEthical ? ethicalSearchCount : data1?.ethicalCodeYesCount}
                        closeBtn={closeButton}
                        close={setShowEthical}
                        msg={"Say has ethical code of conduct"}
                        data={isSearchEthical ? ratingsDataSearch : pagingData1}
                        more={hasMore}
                        fetchMoreData={isSearchEthical ? deBoundeEthical : fetchNextPage}
                        searchHandler={deBoundeEthical}
                        setLoading={setLoading}
                        loading={ethicalloader}
                        type='ethical'
                        isSearch={isSearchEthical}
                        loader={loader}
                        closePopUp={closeEthicalPopup}
                        searchMore={ethicalSearchMore}
                        baseColor={baseColor}
                        page={ethicalPage}
                        prevSearchText={tempsearchtextethical}
                        noRatingsText={"Once someone rates this profile, their name will be displayed here."}
                        noelipse={"true"}
                        showEthical={showEthical}
                    />
                )}
                {showMet && (
                    <RatingsPopUp
                        count={isSearchMeet ? meetSearchCount : data2?.virtuallyMetYesCount}
                        closeBtn={closeButton}
                        close={setShowMet}
                        msg={"Have met in real life / virtually"}
                        data={isSearchMeet ? virtuallyMetDataSearch : pagingData2}
                        more={isMore}
                        fetchMoreData={isSearchMeet ? deBoundeMeet : fetchMorePage}
                        searchHandler={deBoundeMeet}
                        setLoading={meetSetLoading}
                        loading={meetLoader}
                        type='Meet'
                        isSearch={isSearchMeet}
                        loader={meetfetchLoader}
                        closePopUp={closeMeetpopUp}
                        searchMore={meetSearchMore}
                        baseColor={baseColor}
                        page={meetPage}
                        prevSearchText={tempsearchtextMeet}
                        noRatingsText={"Once someone rates this profile, their name will be displayed here."}
                        noelipse={"true"}
                        shoWork={showMet}
                    />
                )}
            </Offcanvas>
        </>
    )
}
export default RatingsContainer
