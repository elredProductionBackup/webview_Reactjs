import { useContext } from 'react';
import './InputCountry.scss';
import { countryCodesData } from './countryData';
import SearchableCountryCodes from "../SearchableCountryCodes/SearchableCountryCodes";
import { numberPlaceholderMapper, handlePhoneNumberChange, validatePhoneNumber } from "./InputCountryFunctions/InputCountryFunctions";

export { useContext, 
    countryCodesData, 
    SearchableCountryCodes, 
    numberPlaceholderMapper, 
    handlePhoneNumberChange, 
    validatePhoneNumber 
};