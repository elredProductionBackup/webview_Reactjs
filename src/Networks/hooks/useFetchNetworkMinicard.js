import axios from "axios";
import { useEffect, useState } from "react";

const useFetchNetworkMinicard = (isLive, productionUrl, networkCode) => {
    const [miniCardData, setMiniCardData] = useState([])
    const [miniCardError, setMiniCardError] = useState(false)
    useEffect(() => {
        fetchMiniCardDetails()
    }, [])

    const fetchMiniCardDetails = async () => {
        try {
            const response = await axios.get(`${isLive ? productionUrl : ""}/webviewGetNetworkMiniCard?networkCode=${networkCode}`)
            setMiniCardData(response?.data?.result?.[0])
        } catch (error) {
            if (error?.response?.status === 500) {
                setMiniCardError(true)
            }
        }
    }

    return {
        miniCardData, miniCardError
    }
}

export default useFetchNetworkMinicard;