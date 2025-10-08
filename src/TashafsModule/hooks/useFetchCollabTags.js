import axios from "axios";
import { useEffect, useState } from "react";

const useFetchCollabTags = (isLive, productionUrl, userCode) => {
    const [data, setData] = useState()
    const [noCollabs, setNoCollabs] = useState(null)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get(`${isLive ? productionUrl : ""}/webViewGetUserCollabTags?userCode=${userCode}`)
            setData(response?.data)
            if (response?.data?.result?.length === 0) {
                setNoCollabs(true)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return {
        data, noCollabs
    }
}

export default useFetchCollabTags;