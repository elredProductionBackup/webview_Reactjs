import React, { useState } from 'react'
import { Offcanvas } from 'react-bootstrap'
import NetworkWorkRatings from './NetworkWorkRatings'
import NetworkEthicalPopup from './networkEthicalPopup'

const NetworkRatingsSubContainer = ({ showEthical, shoWork, setShowEthical, setShowWork, ethicalData, ethicalcount, workcount, ethicalhasMore, ethicalloader, workedHereData, workHasMore, workLoader, fetchMoreEthicalRatings, fetchMoreWorkedHereRatings,
    ethicalSetLoading, workSetLoading, ethicalisSearch, workisSearch, ethicalPage, workPage, ethicalTempSearchText, workTempSearchText, ethicalSearchLoader,
    workSearchLoader, workSearchFunction, ethicalSearchFunction, baseColor, isLive, productionUrl
}) => {
    const [showUserFeedbackPopup, setShowUserFeedbackPopup] = useState(false);

    let ethicalProps = {
        showEthical, setShowEthical, ethicalData, ethicalcount, ethicalhasMore, ethicalloader, fetchMoreEthicalRatings,
        ethicalSetLoading, ethicalisSearch, ethicalPage, ethicalTempSearchText, ethicalSearchLoader,
        ethicalSearchFunction, baseColor, isLive, productionUrl, showUserFeedbackPopup, setShowUserFeedbackPopup
    }

    let WorkProps={
         shoWork, setShowWork, workcount,
            workedHereData, workHasMore, workLoader, fetchMoreWorkedHereRatings,
            workSetLoading, workisSearch, workPage, workTempSearchText,
            workSearchLoader, workSearchFunction, baseColor, isLive, productionUrl, 
            showUserFeedbackPopup, setShowUserFeedbackPopup     
    }

    return (
        <>
            <Offcanvas show={showEthical || shoWork} className={showUserFeedbackPopup ? "ratingsPopRatingsContainer Ratings-Container-with-feedback" : "ratingsPopRatingsContainer"} 
                placement="bottom" onHide={() => { setShowEthical(false); setShowWork(false); workSearchFunction(""); ethicalSearchFunction("") }}>
                {showEthical && (
                    <NetworkEthicalPopup {...ethicalProps} />
                )}
                {shoWork && (
                    <NetworkWorkRatings {...WorkProps}/>
                )}
            </Offcanvas>
        </>
    )
}

export default NetworkRatingsSubContainer
