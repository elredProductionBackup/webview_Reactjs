import { useState, useCallback } from 'react';
import axios from 'axios';
import _ from 'lodash';
const useAwardsSearch = (isLive, productionUrl, userCode, fetchAwards, page, setLoading, loading, fetchNumber, setPaginateLoader) => {
    const [data, setData] = useState([]);
    const [offSet, setOffset] = useState(10)
    const [searchHasMore, setsearchHasMore] = useState(true);
    const [searchStart, setSearchStart] = useState(1)
    const [isSearch, setisSearch] = useState(false)
    const [paginateSearchLoader, setPaginateSearchLoader] = useState(false)
    const [awardsSearchCount, setAwardsSearchCount] = useState(true)
    const searchApi = (text, page) => {

        let searchTextVal = text ?? "";
        
        if (searchTextVal !== "") {
            const start = page ? page : 1;
            let url = `${isLive ? productionUrl : ""}/noSessionPreviewAwards?userCode=${userCode}&start=${start}&offset=${fetchNumber}&searchKey=${searchTextVal}`
            axios.post(url).then((response) => {
                if (response.data.result) {
                    setSearchStart(start + fetchNumber)
                    setsearchHasMore(response.data.result.length < fetchNumber ? false : true)


                    if (start === 1) {
                        setData(response?.data?.result);
                    } else {
                        setData((prev) => [...prev, ...response?.data?.result]);
                    }
                    setAwardsSearchCount(response.data.totalAwardsCount);
                    setPaginateSearchLoader(false)
                    setisSearch(true)
                    setLoading(false)
                }
            })
        } else {
            setisSearch(false)
            setData([])
            fetchEmptySearch(1, searchTextVal)
        }

    }


    const fetchEmptySearch = (p, data) => {

        setLoading(true)
        let text = data ?? ""
        if (text === "") {
           
            debounceAllCall(p);
        } else {
            searchApi(text?.toLowerCase())
        }

    };



    const debounceAllCall = _.debounce((p) => {

        fetchAwards(p);
    }, 300)

    const fetchAwardsPagination = _.debounce((text, Start, searchData) => {
        if (awardsSearchCount !== searchData.length) {
            
            searchApi(text?.toLowerCase(), Start);
        } else {
            setPaginateSearchLoader(false)
        }
    }, 300)


    const deBoundeAwards = useCallback(_.debounce((text) => {
       
        searchApi(text.toLowerCase())
    }, 300), [])
    return { deBoundeAwards, loading, searchData: data, isSearch, offSet, searchHasMore, fetchAwardsPagination, searchStart, setPaginateSearchLoader, paginateSearchLoader,awardsSearchCount }

}

export default useAwardsSearch
