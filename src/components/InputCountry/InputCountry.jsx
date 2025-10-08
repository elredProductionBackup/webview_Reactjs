import { useContext, countryCodesData, SearchableCountryCodes, numberPlaceholderMapper, 
    handlePhoneNumberChange, validatePhoneNumber } from "./Imports_InputCountry";
import { GlobalData } from '../../App';
import { useEffect, useRef } from "react";

function InputCountry({ phoneError, setPhoneError  }) {
    const { formData, setFormData } = useContext(GlobalData);
    const phoneRef = useRef(null);
    
    useEffect(() => {
        const handleScroll = () => {
          if (phoneRef.current === document.activeElement) {
            phoneRef.current.blur(); 
          }
        };
        window.addEventListener('touchmove', handleScroll, { passive: true }); 
    
        return () => window.removeEventListener('touchmove', handleScroll); 
      }, []);


    return (
        <div className="">
            <div className='country_select'>
                <SearchableCountryCodes countryCodesData={countryCodesData} setPhoneError={setPhoneError}
                    formData={formData} setFormData={setFormData} validatePhoneNumber={validatePhoneNumber} />
                <input
                    type="text"
                    value={formData.phone_number}
                    onChange={(e) => handlePhoneNumberChange(e, formData, setFormData, setPhoneError)}
                    placeholder={numberPlaceholderMapper(formData)}
                    className='input-field-country'
                    inputMode='numeric'
                    ref={phoneRef}
                />
            </div>
            {phoneError && formData.phone_number.length > 0 && (
                <div className='error_msg'>
                    {formData.phone_number.length === formData.maxDigits || formData.phone_number[0] === "0" ? "Enter valid phone number" :
                    `Invalid phone number - enter ${formData?.maxDigits} digits`}
                </div>
            )}
        </div>
    );
}

export default InputCountry;
