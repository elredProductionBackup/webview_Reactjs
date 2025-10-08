import { useState, star, Spinner, NetworkRatingsContainer } from "./Imports_Network_Ratings";

const Network_Ratings = ({ ethicalData, ethicalhasMore, ethicalloader, workedHereData, ethicalcount, workcount, workHasMore,
    workLoader, fetchMoreEthicalRatings, fetchMoreWorkedHereRatings, ethicalSetLoading, workSetLoading, ethicaldebounceAllCall,
    workdebounceAllCall, ethicalisSearch, ethicalsetIsSearch, worksetisSearch, workisSearch, ethicalPage, workPage, showEthical, setShowEthical, shoWork, setShowWork,
    ethicalTempSearchText, workTempSearchText, ethicalSearch, workSearch, ethicalSearchLoader, workSearchLoader, workSearchFunction, ethicalSearchFunction, baseColor, isLive, productionUrl, rgba, ethicalTotalCount,workTotalCount
}) => {

    const [logoLoader, setLogoLoader] = useState(true)

    const networkRatingsContainerProps = {
        showEthical, shoWork, setShowEthical, setShowWork, ethicalData, ethicalhasMore, ethicalloader,
        workedHereData, ethicalcount, workcount, workHasMore, workLoader, fetchMoreEthicalRatings,
        fetchMoreWorkedHereRatings, ethicalSetLoading, workSetLoading, ethicaldebounceAllCall, workdebounceAllCall,
        ethicalisSearch, ethicalsetIsSearch, worksetisSearch, workisSearch, ethicalPage, workPage, ethicalTempSearchText, workTempSearchText, ethicalSearch, workSearch, ethicalSearchLoader, workSearchLoader, workSearchFunction, ethicalSearchFunction, baseColor, isLive, productionUrl
    }

    return (
        <div className="ratings" style={{ background: `${rgba}` }}>
            <div className="circle-logo" style={{ background: `${rgba}`, backdropFilter: "blur(34px)" }}>
                <Spinner animation="border" variant="light" size="sm" className={logoLoader ? 'show-img-loader' : 'hide-img-loader'} />
                <img src={star} alt="" className={logoLoader ? 'hide-img-loader' : 'show-image-after-loader'} onLoad={() => setLogoLoader(false)} />
            </div>
            <div className="title-ratings">Ratings</div>
            <div className="desc-ratings" onClick={() => setShowEthical(true)}>
                <div className="ratings-count">
                    {false ? (
                        <Spinner animation="border" variant="light" size="sm" className={false ? 'ratingCountLoader' : 'd-none'} />
                    ) : (
                        ethicalTotalCount
                    )}
                </div>

                <div className="ratings-desc">
                    It is a safe haven for community engagement and activities
                </div>
            </div>
            <hr style={{ margin: "0 23px" }} />
            <div className="desc-ratings" onClick={() => setShowWork(true)} style={{ paddingBottom: '20px', margin: "0" }}>
                <div className="ratings-count">
                    {false ? (
                        <Spinner animation="border" variant="light" size="sm" className={false ? 'ratingCountLoader' : 'd-none'} />
                    ) : (
                        workTotalCount
                    )}
                </div>
                <div className="ratings-desc">
                Have associated with this group / were associated with this group in the past
                </div>
            </div>
            <NetworkRatingsContainer {...networkRatingsContainerProps} />
        </div>
    );
};

export default Network_Ratings;
