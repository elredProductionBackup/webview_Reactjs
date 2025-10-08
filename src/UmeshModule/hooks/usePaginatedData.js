import { useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { getRandomColor, gradientSolidColors } from "../../globalFunctions";

export const usePaginatedData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  let [searchParams] = useSearchParams();
  const userCode = searchParams.get("userCode");

  const getData = () => {
    if (page === 0) {
      setLoading(true);
    }
    const start = page * 10 + 1;
    axios
      .post(`${url}?userCode=${userCode}&start=${start}&offset=10`)
      .then((resp) => {
        if (start === 1) {
          const data = resp?.data?.result?.map((item) => {
            const overlayColor = getRandomColor(gradientSolidColors);
            return {
              ...item,
              overlayColor: overlayColor[1],
            };
          });
          setData(data ?? []);
        } else {
          const data = resp?.data?.result?.map((item) => {
            const overlayColor = getRandomColor(gradientSolidColors);
            return {
              ...item,
              overlayColor: overlayColor[1],
            };
          });
          setHasMore(true);
          setData((prevItems) => [...prevItems, ...data]);
        }

        if (
          resp?.data?.result?.length < 10 ||
          start === resp?.data?.userSpecificTestimonialsCount - 9
        ) {
          setHasMore(false); 
        } else {
          setHasMore(true);
        }
        const p = page + 1;
        setPage(p);
      })
      .catch(() => {
        setHasMore(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    data,
    setData,
    loading,
    page,
    setPage,
    setLoading,
    hasMore,
    setHasMore,
    getData,
  };
};
