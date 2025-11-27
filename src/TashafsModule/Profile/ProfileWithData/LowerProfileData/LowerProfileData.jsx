import {Ratings, Testimonials, HowDifferent, MyBio, Needs, NoNeeds, Comments} from './ImportsLowerProfileData'

const LowerProfileData = ({ rgba, ratingsWholeData, metWholeData, ratingsData, virtuallyMetData, hasMore, isMore, fetchNextPage,
    fetchMorePage, isLive, productionUrl, userCode, superSkillsIcon, needsAvailable, needsData,meetfetchLoader,loader,
    deBoundeEthical, deBoundeMeet, meetLoader, ethicalloader, setLoading, meetSetLoading,ratingsDataSearch,virtuallyMetDataSearch,
    isSearchEthical,isSearchMeet, closeMeetpopUp,closeEthicalPopup,meetSearchMore,ethicalSearchMore, setShowVerifiedPopup,baseColor,ethicalPage,meetPage,tempsearchtextethical,tempsearchtextMeet,
    ethicalWholeDataCountLoader, metWholeDataCountLoader,ethicalSearchCount,meetSearchCount,ethicalFetchData,meetFetchData
}) => {

    const RatingData = {
        rgba, data1: ratingsWholeData, data2: metWholeData, pagingData1: ratingsData, pagingData2: virtuallyMetData,
        hasMore, isMore, fetchNextPage, fetchMorePage,  deBoundeEthical, deBoundeMeet, meetLoader, ethicalloader, setLoading,
         meetSetLoading,ratingsDataSearch,virtuallyMetDataSearch, isSearchEthical,isSearchMeet,meetfetchLoader,loader, 
         closeMeetpopUp,closeEthicalPopup,meetSearchMore,ethicalSearchMore,baseColor,ethicalPage,meetPage,
          tempsearchtextethical,tempsearchtextMeet,  ethicalWholeDataCountLoader, 
          metWholeDataCountLoader, isLive, productionUrl,ethicalSearchCount,meetSearchCount,ethicalFetchData,meetFetchData
    }

  
  
    return (
        <>
            <Ratings {...RatingData} />
            {/* <Testimonials rgba={rgba} isLive={isLive} productionUrl={productionUrl} baseColor={baseColor} /> */}
            {/* <HowDifferent rgba={rgba} userCode={userCode} icon={superSkillsIcon} /> */}
            {/* <MyBio rgba={rgba} userCode={userCode} isLive={isLive} productionUrl={productionUrl} /> */}
            {/* {needsAvailable ? <Needs rgba={rgba} userCode={userCode} needsData={needsData} isLive={isLive} productionUrl={productionUrl} />
            : <NoNeeds rgba={rgba} />} */}
            {/* <Comments rgba={rgba} productionUrl={productionUrl} isLive={isLive} setShowVerifiedPopup={setShowVerifiedPopup} baseColor={baseColor} /> */}
        </>
    )
}

export default LowerProfileData
