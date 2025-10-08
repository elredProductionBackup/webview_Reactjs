import React from 'react'
import RedLoader from '../../../../Profile/components/RedLoader/RedLoader'
import { viewAward } from '../../../bioGlobalFunctions'
import NoSearchAwards from '../NoSearchAwards/NoSearchAwards'
import AllAwardData from './AllAwardData'

const ViewAllDataContainer = ({ data, fetchMoreData, hasMore, userCode, navigate, bluetick, loading, searchLength,
    dataLength, isSearch, searchHasMore, paginateLoader, searchText, isOpenSearch, awardsCount,paginateFunction,paginateSearchLoader }) => {

    const allAwardsProps = { data, fetchMoreData, hasMore, searchHasMore, paginateLoader, viewAward, userCode, navigate, bluetick, awardsCount,paginateFunction,paginateSearchLoader,isSearch }
    let showData = ((isOpenSearch && searchText?.trim().length !== 0 && data?.length > 0) || (!isOpenSearch && data?.length > 0 && searchText?.trim().length === 0)) ? false : true

    return (
        <>
            {loading ?
                <div className="loader-center">
                    <RedLoader />
                </div>
                : isSearch && searchLength === 0 ? <>
                    <NoSearchAwards isSearch={true} showData={false} />
                </> : !loading && dataLength === 0 ? <>  <NoSearchAwards isSearch={false} showData={false} /></> :
                    isOpenSearch && searchText?.trim().length === 0 && showData ?
                        <NoSearchAwards isSearch={true} showData={true} /> :
                        ((isOpenSearch && searchText?.trim().length !== 0 && data?.length > 0) || (!isOpenSearch && data?.length > 0 && searchText?.trim().length === 0)) &&
                        <AllAwardData
                            {...allAwardsProps} 
                        >
                        </AllAwardData>
            }
        </>
    )
}

export default ViewAllDataContainer
