import React from "react";
import InputField from "../../../components/InputField/InputField";
import { handleBlur } from "../../../bioGlobalFunctions";
import { capitalizeFormInput } from "../../../../../globalFunctions";

const NameInputs = ({
  formData,
  setFormData,
  firstNameError,
  setFirstNameError,
}) => {

  return (
    <>
      <InputField
        label={"Name*"}
        placeholder={"Enter your name"}
        required={true}
        value={formData?.f_name}
        onChange={(e) => {
          let input = capitalizeFormInput(e);
          input = input?.replace(/[^A-Za-z\s]/ig, '')?.replace(/\s+/g, ' ');
          setFormData({ ...formData, f_name: input?.slice(0, 50) });
        }}
        
        error={firstNameError && (!formData?.f_name || formData?.f_name?.charAt(0) === ' '|| formData?.f_name?.length<3 )}
        errorMsg={firstNameError || (formData?.f_name?.charAt(0) === ' ' ? "First letter should be an alphabet" :  formData?.f_name?.length<3? "Name should be of minimum 3 letters":   "Enter valid name")}
        max={50}
        onBlur={() => handleBlur(formData?.f_name, firstNameError, setFirstNameError)}
        inputBlur={() => formData?.f_name?.charAt(0) === ' ' ? setFirstNameError("First letter should be an alphabet") :  formData?.f_name?.length < 3 ? setFirstNameError("Name should be of minimum 3 letters") : setFirstNameError("")}
      />
      <div className="name_word_count">{formData?.f_name?.length}/50</div>
      {/* <InputField
        label={"Last Name (optional)"}
        placeholder={"Enter your last name"}
        required={false}
        value={formData?.l_name}
        onChange={(e) => { 
        const input = e?.replace(/[^A-Za-z\s]/ig, '')?.replace(/\s+/g, ' ');
        setFormData({ ...formData, l_name: input?.slice(0, 50) });
        }}    
        max={50}
        onBlur={() => handleBlur(formData?.l_name, firstNameError, setFirstNameError)}
      /> */}
    </>
  );
};
export default NameInputs;
