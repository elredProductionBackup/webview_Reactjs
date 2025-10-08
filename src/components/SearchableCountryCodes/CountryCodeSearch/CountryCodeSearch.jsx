import crossIcon from "../../../assets/images/cross-png-4x.png" 

const CountryCodeSearch = ({ Spinner, searchIconLoader, searchIcon, setSearchIconLoader, 
    searchVal, handleDropdownSearch, setSearchVal }) => {
        
    return (
        <div className="searchable-country-codes-search-container">
            <div className="searchable-country-codes-search-icon-container">
                <Spinner variant="light" className={searchIconLoader ? "searchable-country-codes-search-icon-loader" : "d-none"} />
                <img src={searchIcon} alt="" className={searchIconLoader ? "d-none" : "searchable-country-codes-search-icon"}
                    onLoad={() => setSearchIconLoader(false)} />
            </div>
            <input type="text" value={searchVal} onChange={(e) => handleDropdownSearch(e, setSearchVal)} 
                placeholder="Search by country code / name" className="searchable-country-codes-search-input" />
            {searchVal && (
                <img src={crossIcon} alt=""  className="searchable-country-codes-clear-icon" 
                    onClick={() => setSearchVal("")} 
                />
            )}
        </div>
  )
}

export default CountryCodeSearch;