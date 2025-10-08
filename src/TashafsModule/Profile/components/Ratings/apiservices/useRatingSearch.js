import { useState, useCallback } from 'react';

import axios from 'axios';
import _ from 'lodash';
const useRatingSearch = (isLive, productionUrl, userCode, type, endPoint, fetchNextSearch) => {
    const [data, setData] = useState([]);
    const [loader, setLoading] = useState({ ethical: false, Meet: false })
    const [searchHasMore, setSearchHasMore] = useState(true)
    const [page, setPage] = useState(1);
    const [ratingsSearchCount, setRatingsSearchCount] = useState(0)
    const [tempsearchtext, setTempSearchText] = useState('')
    const [isSearch, setIsSearch] = useState(false)
    const searchApi = (type, text, page, prevSearchText, dataLength, searchMore) => {
        let searchTextVal = text ?? "";

        let hasMore = prevSearchText === searchTextVal ? searchMore : true;

        if (searchTextVal !== "" && hasMore) {
            const offSet = 10
            let start = prevSearchText === searchTextVal ? page : 1

            let url = `${isLive ? productionUrl : ""}/${endPoint}?userCode=${userCode}&start=${start}&offset=${offSet}&searchKey=${searchTextVal}`
            axios.post(url).then((response) => {

                if (response.data.result) {
                    const TotalLength = type === "ethical" ? response.data.ethicalCodeYesCount : response.data.virtuallyMetYesCount

                    if (start === 1) {
                        setData(response.data.result);
                    } else {
                        setData((prevItems) => [...prevItems, ...response.data.result]);

                    }

                    setSearchHasMore(response.data.result < 10 ? false : true)
                    setRatingsSearchCount(TotalLength)

                    setIsSearch(true)
                    setLoading({ ethical: false, Meet: false })
                    setTempSearchText(searchTextVal)
                    setPage(start + 10);

                }
            }).catch((error) => {
                // console.log(error)
            });

        } else {
            setIsSearch(false)
            setSearchHasMore(false)
            setTempSearchText("")
            setPage(1)
            fetchEmptySearch(1, searchTextVal, prevSearchText, dataLength, searchMore)
        }

    }


    const fetchEmptySearch = (p, data, prevSearchText, dataLength, searchMore) => {
        let text = data ?? ""
        if (text === "") {
            setLoading({ ethical: false, Meet: false })
            fetchNextSearch(p);
        }
    };

    const closePopup = () => {
        setIsSearch(false)
        setLoading({ ethical: false, Meet: false })
        setData([])
    }


    const deBoundeEthical = useCallback(_.debounce((text, page, prevSearchText, dataLength, searchMore) => {

        searchApi('ethical', text.toLowerCase(), page, prevSearchText, dataLength, searchMore)
    }, 300), [])

    const deBoundeMeet = useCallback(_.debounce((text, page, prevSearchText, dataLength, searchMore) => {

        searchApi('Meet', text.toLowerCase(), page, prevSearchText, dataLength, searchMore)
    }, 300), [])
    return {
        deBoundeEthical, deBoundeMeet, ethicalloader: loader.ethical, meetLoader: loader.Meet, data, ethicalSearchMore: searchHasMore, meetSearchMore: searchHasMore,
        isSearchEthical: isSearch, isSearchMeet: isSearch, setLoading, closeEthicalPopup: closePopup, closeMeetpopUp: closePopup, ethicalPage: page, meetPage: page,
        tempsearchtextethical: tempsearchtext, tempsearchtextMeet: tempsearchtext, ratingsSearchCount
    }

}

export default useRatingSearch
