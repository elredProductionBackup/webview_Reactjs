import React from 'react'
import { NoRatingsDisplay, RatingsPopupData, NoSearchRatings } from './ratingsPopupImport'
import { Spinner } from 'react-bootstrap'

const RatingsPopupInnerData = ({ count, data, more, loading, isSearch, loader,
    searchMore, baseColor, noRatingsText, paginateData }) => {
    return (
        <>
            {count === 0 && !isSearch && !loading ?
                <NoRatingsDisplay noRatingsText={noRatingsText} /> : count === 0 && isSearch && !loading && data.length === 0 ? (<>
                    <NoSearchRatings />
                </>) : loading ? <>
                    <div className="loader-margin-ratings">
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <Spinner  style={{ width: "20px", height: "20px" }} animation="border" variant="danger" />
                        </div>
                    </div>

                </> :
                    <RatingsPopupData baseColor={baseColor} data={data} fetchMoreData={paginateData} more={more} loader={loader} searchMore={searchMore} isSearch={isSearch} />
            }

        </>
    )
}

export default RatingsPopupInnerData
