import { useEffect } from 'react';
import { clearToasts } from 'react-simple-toasts';
import NetworkRatingsSubContainer from './NetworkRatingsSubContainer';

const NetworkRatingsContainer = ({ showEthical, shoWork, setShowEthical, setShowWork, ethicalData, ethicalcount, workcount, ethicalhasMore, ethicalloader, workedHereData, workHasMore, workLoader, fetchMoreEthicalRatings, fetchMoreWorkedHereRatings,
    ethicalSetLoading, workSetLoading, ethicaldebounceAllCall, workdebounceAllCall, ethicalisSearch, ethicalsetIsSearch, worksetisSearch, workisSearch, ethicalPage, workPage, ethicalTempSearchText, workTempSearchText, ethicalSearch, workSearch, ethicalSearchLoader,
    workSearchLoader, workSearchFunction, ethicalSearchFunction, baseColor, isLive, productionUrl

}) => {

const ratingsSubContainerProps={
    showEthical, shoWork, setShowEthical, setShowWork, ethicalData, ethicalcount, workcount, ethicalhasMore, ethicalloader, workedHereData, workHasMore, workLoader, fetchMoreEthicalRatings, fetchMoreWorkedHereRatings,
    ethicalSetLoading, workSetLoading, ethicaldebounceAllCall, workdebounceAllCall, ethicalisSearch, ethicalsetIsSearch, worksetisSearch, workisSearch, ethicalPage, workPage, ethicalTempSearchText, workTempSearchText, ethicalSearch, workSearch, ethicalSearchLoader,
    workSearchLoader, workSearchFunction, ethicalSearchFunction, baseColor, isLive, productionUrl
}

    useEffect(() => {
        if (showEthical || shoWork) {
            clearToasts();
            ethicalsetIsSearch(false);
            worksetisSearch(false)
        }
    }, [showEthical, shoWork]);

    return (
        <>
         <NetworkRatingsSubContainer {...ratingsSubContainerProps} />
        </>
    )
}
export default NetworkRatingsContainer
