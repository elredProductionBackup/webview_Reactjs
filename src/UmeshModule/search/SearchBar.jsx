import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
import search from "../../assets/images/search_2x.png";
import closeIcon from "../../assets/images/x-dark-theme.svg";

function SearchBar({ placeholder, setSearchText, searchText, onSearch,loading, setData }) {
  const [typingTimeout, setTypingTimeout] = useState(null);
  const [isSearch, setIsSearch] = useState(false);
  const myref = useRef(null)

  useEffect(() => {
    if(myref && myref.current){
      myref.current.focus()
    }
  },[])

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchText(value);
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
    if (!value) setIsSearch(false);
    const timeoutId = setTimeout(() => {
      if(value){
        onSearch(value, 1);   
        setIsSearch(true);
      }else{
        setData([])
      }
     }, 500);
    setTypingTimeout(timeoutId);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (myref.current === document.activeElement) {
        myref.current.blur(); 
      }
    };
    window.addEventListener('touchmove', handleScroll, { passive: true }); 

    return () => window.removeEventListener('touchmove', handleScroll); 
  }, []);

  return (
    <div className="search-container-main">
      <div className="input-group d-flex align-items-center search-container w-100 relative">
        <img className="search-icon-testimonials-search" alt="" src={search} />
        <input
        ref={myref}
          className="form-control  search-box"
          type="search"
          value={searchText}
          onChange={(e) => {
            const inputValue = e.target.value;
            if (/^[0-9A-Za-z_-]+(?:[\s_\-][0-9A-Za-z_-]+)*\s?$/.test(inputValue) || inputValue === "") {
              handleSearch(e);
            }
          }}
          placeholder={placeholder}
          aria-label="Search"
        />
        {isSearch ? <img className="testimonial-search-cancel-icon" alt="" src={closeIcon} onClick={() => {setSearchText(""); setData([]); setIsSearch(false)}} /> : null}
      </div>
    </div>
  );
}

export default SearchBar;
