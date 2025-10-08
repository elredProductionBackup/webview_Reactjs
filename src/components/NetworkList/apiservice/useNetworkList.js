import axios from "axios";
import { useEffect, useState } from "react";
import _ from 'lodash';

const useNetworkList = (isLive, productionUrl, userCode,fetchNumber) => {

    const [networkList, setNetworkList] = useState([])
    const [page, setPage] = useState(1)
    const [totalCount, setTotalCount] = useState(0)
    const [loading, setLoading] = useState(true)
    const [hasMore, setHasMore] = useState(false)
    const [isPagination, setIsPagination] = useState(false)

    const fetchNetworkData = async (p) => {

        try {

            await axios.get(`${isLive ? productionUrl : ""}/webViewGetUserNetworks?userCode=${userCode}&start=${page}&offset=${fetchNumber}`).then((response) => {

                if (networkList.length === 0) {
                    setNetworkList(response?.data?.result)
                } else {
                    setNetworkList((prevItems) => [...prevItems, ...response?.data?.result]);
                }
                setPage(page + fetchNumber)
                setTotalCount(response?.data?.totalNetworksCount)
                setLoading(false)
                setHasMore(response?.data?.totalNetworksCount?.length < fetchNumber ? false : true)
                setIsPagination(false)
            })
        } catch (error) {

        }


    }
    useEffect(() => {
        fetchNetworkData()
    }, [])


    const netWorkListPagination = () => {
        if (totalCount !== networkList?.length) {
            setIsPagination(true)
            debounceAllCall()
        }


    }
    const debounceAllCall = _.debounce(() => {
        fetchNetworkData();
    }, 500)

    return {
        networkList, totalCount, page, loading, hasMore, netWorkListPagination, isPagination
    }
}


export default useNetworkList;