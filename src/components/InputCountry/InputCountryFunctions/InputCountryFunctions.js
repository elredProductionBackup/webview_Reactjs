export const numberPlaceholderMapper = (formData) => {
    let zeroes = "";
    for (let i = 0; i < formData?.maxDigits; i++) {
        zeroes += "0"
    }
    return zeroes;
};

export const handlePhoneNumberChange = (event, formData, setFormData, setPhoneError) => {
    let inputNumber = event.target.value.replace(/\s/g, '');
    inputNumber = inputNumber.replace(/\D/g, '');
    inputNumber = inputNumber?.slice(0, formData.maxDigits);
    setFormData({...formData, phone_number: inputNumber});
    validatePhoneNumber(inputNumber, formData.maxDigits, setPhoneError);
};

export const validatePhoneNumber = (number, max, setPhoneError) => {
    setPhoneError(number.length !== max || number[0] === "0");
};