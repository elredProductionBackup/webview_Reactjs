import { useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { getRandomColor, gradientSolidColors } from "../../globalFunctions";

export const useSearchResult = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [totalTestimonialCount,setTotalTestimonialCount]=useState(0)
  const [searchResultFound, setSearchResultFound] = useState(true);
  const [paginationLoader,setpaginationLoader]=useState(false)
  let [searchParams] = useSearchParams();
  const userCode = searchParams.get("userCode");

  const getData = (searchKey, count) => {
    !searchResultFound && setSearchResultFound(true);
    const start = count ? count : page * 10 + 1;
    if (start === 1) {
      setLoading(true);
    }
    axios
      .post(
        `${url}?userCode=${userCode}&start=${start}&offset=10&searchKey=${searchKey}`
      )
      .then((resp) => {
      
        setTotalTestimonialCount(resp?.data?.userSpecificTestimonialsCount)
        const d = resp?.data?.result?.map((item) => {
          const overlayColor = getRandomColor(gradientSolidColors);
          return {
            ...item,
            overlayColor: overlayColor[1],
          };
        });
        let tepData = [...data];
        tepData = [...tepData, ...resp?.data?.result];
        try {
         
          if (resp?.data?.result?.length === 0) {
            setSearchResultFound(false);
            if(start===1){
              setData([])
            }
           
          } else {
           
            if (start === 1) {
              const areAllIdsEqual = data.every((item) => {
                return d.some(
                  (existingItem) =>
                    existingItem.testimonialId === item.testimonialId
                );
              });


              if (!areAllIdsEqual || data.length !== d.length) {
                setData(d); 
              }
            } else {
              setData([...data, ...d]);
            }
          }
         
          if (tepData.length === resp?.data?.userSpecificTestimonialsCount || resp?.data?.result<10  ) {
            setHasMore(false); 
          } else {
            setHasMore(true);
          }
        } catch (error) {
          //console.log(error);
        }
        const p = count ? count : page + 1;
        setPage(p);
        setLoading(false);
        setpaginationLoader(false)
      })
      .catch((error) => {
        setData([]);
        setHasMore(false);
        setSearchResultFound(false);
       
      })
      .finally(() => {
        setLoading(false);
        setpaginationLoader(false)
      });
  };




  const paginationcall=(searchKey,datalength)=>{
    if(totalTestimonialCount>= datalength){
      setpaginationLoader(true);
      getData(searchKey)
    }else{
      setLoading(false)
      setpaginationLoader(false)
    }
  }

  return {
    data,
    setData,
    loading,
    page,
    setSearchResultFound,
    searchResultFound,
    setPage,
    setLoading,
    hasMore,
    setHasMore,
    getData,
    paginationLoader,
    paginationcall
  };
};
