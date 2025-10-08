import axios from "axios"
import { useCallback, useEffect, useState } from "react"
import _ from 'lodash';
const useFetchNetworkRatings = (isLive, productionUrl, url, networkCode, type) => {
    const [data, setData] = useState([])
    const [ethicalcount, setEthicalcount] = useState(0)
    const [workcount, setWorkcount] = useState(0)
    const [hasMore, setHasMore] = useState(true)
    const [loader, setLoading] = useState({ ethicalNetwork: false, work: false })
    const [searchloader, setsearchLoading] = useState({ ethicalsearchNetwork: false, workSearch: false })
    const [page, setPage] = useState(1);
    const [isSearch, setIsSearch] = useState(false)
    const [tempSearchText, setTempSearchText] = useState("")
    const [staticCount, setStaticCount] = useState(0)
    useEffect(() => {
        getNetworkRatings()
    }, [])

    const getNetworkRatings = async (p, searchTextVal, prevtext) => {
        try {
            let searchtext = searchTextVal ? searchTextVal : ""
            let pretext = prevtext ? prevtext : ""
            // if (searchTextVal && searchTextVal !== pretext) {
            //     setsearchLoading({ ethicalsearchNetwork: type === "ethical-network" ? true : false, workSearch: type !== "ethical-network" ? true : false })
            // } else
            if (searchTextVal && searchTextVal === pretext) {
                setLoading({ ethicalNetwork: type === "ethical-network" ? true : false, work: type !== "ethical-network" ? true : false })
            }
            let start = p ? p : tempSearchText === searchTextVal ? page : page
            const response = await axios.get(`${isLive ? productionUrl : ""}/${url}?start=${start}&offset=10&searchKey=${searchtext}&networkCode=${networkCode}`)
            if (start === 1) {
                setData(response.data.result);
            } else {
                setData((prevItems) => [...prevItems, ...response.data.result]);
            }
            if (searchTextVal === "" || !searchTextVal) {
                if (type === 'ethical-network') {
                    setStaticCount(response?.data?.ethicalCodeYesCount)
                } else {
                    setStaticCount(response?.data?.workedHereYesCount)
                }
            }



            if (type === 'ethical-network') {
                setEthicalcount(response?.data?.ethicalCodeYesCount)
            } else {
                setWorkcount(response?.data?.workedHereYesCount)
            }

            setHasMore(response.data.result.length < 10 ? false : true);
            setPage(start + 10);
            setLoading({ ethicalNetwork: false, work: false })
            setsearchLoading({ ethicalsearchNetwork: false, workSearch: false })
            setTempSearchText(searchtext)
        } catch (error) {
            console.log(error, 'error in ratings')
        }
    }
    const debounceAllCall = _.debounce((p) => {
        getNetworkRatings(p ? p : page);
    }, 500)


    const fetchNextPage = () => {
        if (type === 'ethical-network') {

            if (ethicalcount !== data.length) {
                setLoading({ ethicalNetwork: true, work: false })
                debounceAllCall();
            }

        } else {
            if (workcount !== data.length) {
                setLoading({ ethicalNetwork: false, work: true })
                debounceAllCall();
            }
        }
    };

    const deBoundeSearch = useCallback(_.debounce((text, page, prevSearchText, dataLength, searchMore) => {

        setIsSearch(true)
        if (text !== prevSearchText) {
            if (type === "work") {
                setsearchLoading({ ethicalsearchNetwork: false, workSearch: true })

            } else {
                setsearchLoading({ ethicalsearchNetwork: true, workSearch: false })

            }

        }
        getNetworkRatings(page, text.toLowerCase(), prevSearchText)


    }, 300), [])

    // const closePopup = () => {
    //     // console.log("called>>>")
    //     // setIsSearch(false)
    //     // setLoading({ ethicalNetwork: false, work: false })
    //     // setsearchLoading({ ethicalsearchNetwork: false, workSearch: false })
    //     // setData([])
    // }


    return {
        data, workcount, hasMore, loader, fetchNextPage, ethicalcount, debounceAllCall, setLoading, isSearch,
        setIsSearch, tempSearchText, getNetworkRatings, searchloader, deBoundeSearch, page, setsearchLoading, staticCount
    }
}

export default useFetchNetworkRatings