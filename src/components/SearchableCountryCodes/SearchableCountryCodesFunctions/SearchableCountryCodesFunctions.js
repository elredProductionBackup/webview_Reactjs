export const handleClose = (setShowList) => {
    setShowList(false);
};

export const selectCodeFromList = (country, formData, setFormData, setPhoneError, setShowList, validatePhoneNumber) => {
    const number = formData?.phone_number?.slice(0, country?.maxDigits);
    setFormData({ ...formData, phone_number: number, country_code: country?.countryCode, maxDigits: country?.maxDigits });
    setPhoneError(false);
    setShowList(false);
    validatePhoneNumber(number, country?.maxDigits, setPhoneError);
};

export const handleDropdownSearch = (e, setSearchVal) => {
    const searchInput = e.target.value?.trimStart();
    if (/^\+?[a-zA-Z0-9 ]*$/.test(searchInput)) {
        setSearchVal(searchInput);
    } else {
        return false;
    }
};

export const filterWithCountryCode = (countryCodesData, searchVal) => {
    const filteredCodeResult = countryCodesData?.filter((item) => 
        item.countryCode.includes(searchVal))
    .sort((a, b) => {
        const aStartsWith = a.countryCode.replace("+", "").startsWith(searchVal);
        const bStartsWith = b.countryCode.replace("+", "").startsWith(searchVal);
        if (aStartsWith && !bStartsWith) return -1;
        if (!aStartsWith && bStartsWith) return 1;
        const aNumericValue = parseInt(a.countryCode.replace("+", ""), 10);
        const bNumericValue = parseInt(b.countryCode.replace("+", ""), 10);
        return aNumericValue - bNumericValue;
    });
    return filteredCodeResult;
}

export const filterWithCountryName = (countryCodesData, searchVal) => {
    const filteredCountryNameResult = countryCodesData?.filter((item) =>
        item.countryName.toLowerCase().includes(searchVal.toLowerCase()))
    .sort((a, b) => {
        const aStartsWith = a.countryName.toLowerCase().startsWith(searchVal.toLowerCase());
        const bStartsWith = b.countryName.toLowerCase().startsWith(searchVal.toLowerCase());
        if (aStartsWith && !bStartsWith) return -1;
        if (!aStartsWith && bStartsWith) return 1;
        return 0;
    });
    return filteredCountryNameResult;
}

export const filterCountryCodeList = (countryCodesData, searchVal) => {
    const filteredList1 = filterWithCountryCode(countryCodesData, searchVal);       
    const filteredList2 = filterWithCountryName(countryCodesData, searchVal);
    const filteredCountryCodeList = [...new Set([...filteredList1, ...filteredList2])];
    return filteredCountryCodeList;
}