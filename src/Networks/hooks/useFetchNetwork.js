import axios from "axios";
import { useEffect, useState } from "react";
import { convertToRgbColor } from "../../globalFunctions";

const useFetchNetwork = (isLive, productionUrl, networkCode) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [color, setColor] = useState(null)
    const [opacity, setOpacity] = useState(null)
    const rgba = `rgba(${color?.[0]},${color?.[1]},${color?.[2]},${opacity}%)`;


    const fetchNetworkData = async () => {
        setIsLoading(true)
        try {
            const response = await axios.get(`${isLive ? productionUrl : ""}/webviewGetNetworkProfile?networkCode=${networkCode}`)
            setData(response?.data?.result?.[0])
            
            setColor(convertToRgbColor(response?.data?.result?.[0]?.profileDesignInfo?.secondaryColor))
            setOpacity(response?.data?.result?.[0]?.profileDesignInfo?.opacity?.secondary);
            setIsLoading(false)
        } catch (error) {
            if (error?.response?.status === 500) {
                setError(true)
                setIsLoading(false)
            }
            setIsLoading(false)
        }
    }
    useEffect(() => {
        fetchNetworkData()
    }, [])

    return {
        data, error, isLoading, rgba
    }
}


export default useFetchNetwork;