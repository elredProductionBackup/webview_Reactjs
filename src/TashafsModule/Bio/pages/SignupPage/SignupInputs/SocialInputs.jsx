import React from "react";
import InputField from "../../../components/InputField/InputField";
import { handleBlur } from "../../../bioGlobalFunctions";

const SocialLinksInput = ({ formData, setFormData, website1error, setWebsite1error, website2error, setWebsite2error, logoSocial }) => {
    return (
        <>
            <div className={website1error === false || 'Invalid Website 1 URL' || '' ? '' : "socialInputs"}>
                <InputField
                    label={"Enter Website 1 / Any URL (optional)"}
                    placeholder={"Paste the complete URL"}
                    logo={logoSocial}
                    required={false}
                    value={formData?.website1}
                    onChange={(e) => setFormData({ ...formData, website1: e })}
                    error={website1error}
                    errorMsg={website1error}
                    onBlur={() => handleBlur(formData?.website1, website1error, setWebsite1error, website2error, setWebsite2error)}
                    inputBlur={() => {
                        const inputValue = formData?.website1;
                        if (inputValue && !/^(https?:\/\/)?([\w-]+(\.[\w-]+){1,}\w{1,}(:\d+)?(\/\S*)?)$/.test(inputValue)) {
                            setWebsite1error("Invalid Website 1 URL");
                        } else {
                            setWebsite1error("");
                        }
                    }}
                    type={'url'}
                />
            </div>
            <div className={website2error === false || 'Invalid Website 2 URL' || '' ? '' : "socialInputs"}>
                <InputField
                    label={"Enter Website 2 / Any URL (optional)"}
                    placeholder={"Paste the complete URL"}
                    logo={logoSocial}
                    required={false}
                    value={formData?.website2}
                    onChange={(e) => setFormData({ ...formData, website2: e })}
                    error={website2error}
                    errorMsg={website2error}
                    onBlur={() => handleBlur(formData?.website2, website1error, setWebsite1error, website2error, setWebsite2error)}
                    inputBlur={() => {
                        const inputValue = formData?.website2;

                        if (inputValue && !/^(https?:\/\/)?([\w-]+(\.[\w-]+){1,}\w{1,}(:\d+)?(\/\S*)?)$/.test(inputValue)) {
                            setWebsite2error("Invalid Website 2 URL");
                        } else {
                            setWebsite2error("");
                        }
                    }}
                    type={'url'}
                />
            </div>
        </>
    );
};
export default SocialLinksInput;
