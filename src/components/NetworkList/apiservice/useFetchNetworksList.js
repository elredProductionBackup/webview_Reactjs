import axios from "axios";
import { useEffect, useState } from "react";
import _ from 'lodash';

const useFetchNetworksList = (isLive, productionUrl, userCode) => {
    let fetchNumber = window.innerHeight < 640 ? 10 : 12
    // let fetchNumber = 45

    const [networkList, setNetworkList] = useState([])
    const [start, setStart] = useState(1)
    const [totalCount, setTotalCount] = useState(0)
    const [hasMore, setHasMore] = useState(false)
    const [isPagination, setIsPagination] = useState(false)
    const [originalNetworkListLength, setOriginalNetworkListLength] = useState(0);

    const dataObject = (currentNetworkCode, responseData, i) => {
        return { networkId: currentNetworkCode, networkImage: responseData[i].networkClusterLogo, 
            networkName:  responseData[i].networkClusterName, networkGroups: [] }
    }

    const networkDataRearrange = (responseData, fetchNumber) => {
        if (responseData.length === 0) return [];
        let index = 0;
        let currentNetworkCode = responseData[index].networkClusterCode

        let groupedData = []
        let newObj = dataObject(currentNetworkCode, responseData, index)
        groupedData.push(newObj)

        for (let i = 0; i < fetchNumber; i++) {
            if (responseData[i].networkClusterCode === currentNetworkCode) {
                groupedData[index].networkGroups.push(responseData[i])
            } else {
                index += 1;
                currentNetworkCode = responseData[i].networkClusterCode
                newObj = dataObject(currentNetworkCode, responseData, i)
                groupedData.push(newObj)
                groupedData[index].networkGroups.push(responseData[i])
            }
        }   
        return groupedData
    }

    const removeDuplicates = (prevDataArr, newDataArr) => {
        let newData = [...prevDataArr, ...newDataArr]

        console.log("newData", newData)

        for (let i = 0; i < newData.length - 1; i++) {
            if (newData[i]?.networkId === newData[i + 1]?.networkId) {
                newData[i]?.networkGroups.push(...newData[i + 1]?.networkGroups)
                newData.splice(i + 1, 1)
                i -= 1
            }
        }
        return newData
    }

    const fetchNetworkData = async () => {
        try {
            await axios.get(`${isLive ? productionUrl : ""}/webViewGetUserNetworks?userCode=${userCode}&start=${start}&offset=${fetchNumber}`).then((response) => {
                let rearrangedData = networkDataRearrange(response?.data?.result, fetchNumber)
                if (networkList.length === 0) {
                    setNetworkList(rearrangedData)
                    setOriginalNetworkListLength(response?.data?.result?.length)
                } else {
                    setNetworkList((prevItems) => {
                        const newArr = removeDuplicates(prevItems, rearrangedData)
                        return newArr
                    });
                    setOriginalNetworkListLength(prev => prev + response?.data?.result?.length)
                }
                setStart(start + fetchNumber)
                setHasMore(response?.data?.totalNetworksCount > originalNetworkListLength)
                setTotalCount(response?.data?.totalNetworksCount)
                setIsPagination(false)
            })
        } catch (error) {}
    }

    useEffect(() => {
        fetchNetworkData()
    }, [])

    const netWorkListPagination = () => {
        if (totalCount > originalNetworkListLength) {
            setIsPagination(true)
            debounceAllCall()
        }
    }

    const debounceAllCall = _.debounce(() => {
        fetchNetworkData();
    }, 500)

    return {
        networkList, hasMore, netWorkListPagination, isPagination, totalCount, originalNetworkListLength
    }
}

export default useFetchNetworksList