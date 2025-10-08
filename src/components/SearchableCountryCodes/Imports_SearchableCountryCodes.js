import "./searchable-country-codes.scss";
import { useEffect, useRef, useState } from "react";
import searchIcon from "../../assets/images/searchIcon.svg";
import DownIcon from "../../assets/images/red-down-icon.svg";
import useOnClickOutside from "../../Networks/hooks/useOnClickOutside";
import CountryDropdownListItem from "./CountryDropdownListItem/CountryDropdownListItem";
import { Spinner } from "react-bootstrap";
import { handleClose, 
    selectCodeFromList, 
    handleDropdownSearch,
    filterCountryCodeList
} from "./SearchableCountryCodesFunctions/SearchableCountryCodesFunctions";
import SelectedCountryCode from "./SelectedCountryCode/SelectedCountryCode";
import CountryCodeSearch from "./CountryCodeSearch/CountryCodeSearch";

export { 
    useEffect, 
    useRef, 
    useState, 
    searchIcon, 
    DownIcon, 
    useOnClickOutside, 
    CountryDropdownListItem, 
    Spinner,
    handleClose,
    selectCodeFromList,
    handleDropdownSearch,
    filterCountryCodeList,
    SelectedCountryCode,
    CountryCodeSearch
};