import { useEffect, useRef, useState, searchIcon, DownIcon, useOnClickOutside, CountryDropdownListItem, 
    Spinner, handleClose, selectCodeFromList, handleDropdownSearch, filterCountryCodeList, SelectedCountryCode, 
    CountryCodeSearch } from "./Imports_SearchableCountryCodes";

const SearchableCountryCodes = ({ countryCodesData, setPhoneError, formData, setFormData, validatePhoneNumber }) => {
    const [showList, setShowList] = useState(false);
    const [countryCodeList, setCountryCodeList] = useState(countryCodesData);
    const [searchVal, setSearchVal] = useState("");
    const [searchIconLoader, setSearchIconLoader] = useState(true);
    const dropdownRef = useRef();
    
    useOnClickOutside(dropdownRef, handleClose, setShowList);

    useEffect(() => {
        setSearchVal("");
        setCountryCodeList(countryCodesData);
    }, [showList]); // eslint-disable-line

    useEffect(() => {
        if (!searchVal) return setCountryCodeList(countryCodesData);
        const newList = filterCountryCodeList(countryCodesData, searchVal);
        setCountryCodeList(newList);
    }, [searchVal]); // eslint-disable-line

    useEffect(() => {
        setSearchIconLoader(true);
    }, [showList]);

    return (
        <div ref={dropdownRef} className="searchable-country-codes-main-container">
            <SelectedCountryCode showList={showList} setShowList={setShowList} formData={formData} DownIcon={DownIcon} />
            {showList ?
                <div className="searchable-country-codes-dropdown">
                <CountryCodeSearch Spinner={Spinner} searchIconLoader={searchIconLoader} searchIcon={searchIcon} 
                    setSearchIconLoader={setSearchIconLoader} searchVal={searchVal} handleDropdownSearch={handleDropdownSearch} setSearchVal={setSearchVal} />
                    <div className={countryCodeList?.length !== 0 ? "country-codes-list-container" : "country-codes-list-container overflow-hidden"}>
                        {
                            countryCodeList?.length !== 0 ?
                                countryCodeList?.map((item, index) =>
                                    <CountryDropdownListItem key={item?.id} item={item} index={index} selectedCountryCode={formData?.country_code}
                                        selectCodeFromList={selectCodeFromList} formData={formData} setFormData={setFormData} 
                                        setPhoneError={setPhoneError} setShowList={setShowList} validatePhoneNumber={validatePhoneNumber} />
                                )
                                : <div className="country-codes-list-no-result">No result found!</div>
                        }
                    </div>
                </div>
                : null
            }
        </div>
    )
}

export default SearchableCountryCodes;