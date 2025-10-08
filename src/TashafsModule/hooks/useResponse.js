import { useState, useEffect, useCallback } from "react";
import axios from "axios";

/**
 * Custom hook for handling API responses.
 * @param {string} url - The URL for the API endpoint.
 * @returns {object} response - The response object containing data, error, loading state, and data retrieval function.
 */
export const useResponse = (url) => {
  const [data, setData] = useState([]); 
  const [error, setError] = useState({}); 
  const [loading, setLoading] = useState(false); 

  const getData = useCallback(() => {
    setLoading(true);
    axios
      .post(url)
      .then((res) => {
        if (res.data.success) {
          setData(res?.data?.result?.filter(item=> item?.pinStatus==="pinned"));
          setError({ error: false, message: "" });
        } else {
          setError({ error: true, message: res.message });
        }
        setLoading(false);
      })
      .catch((err) => {
        setError({ error: true, message: "Something went wrong" });
        setLoading(false);
      });
  }, [url]);

  useEffect(() => {
    getData();
  }, [getData]);

  return {
    data,
    error,
    setData,
    loading,
    getData,
  };
};
