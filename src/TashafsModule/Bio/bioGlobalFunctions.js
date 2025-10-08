export const viewAward = (value, userCode, navigate) => {
  const time = new Date().getTime().toString().slice(-6);
  navigate(`/my-bio/award-view?userCode=${userCode}&t=${time}`, {
    state: { data: value, userCode: userCode },
  });
};

export const navigateTo = (userCode, navigate, url) => {
  const time = new Date().getTime().toString().slice(-6);
  navigate(`${url}?userCode=${userCode}&t=${time}`, {
    state: { data: userCode },
  });
};

export const navigateToResume = (userCode, data, navigate, url) => {
  const time = new Date().getTime().toString().slice(-6);
  navigate(`${url}?userCode=${userCode}&t=${time}`, {
    state: data,
  });
};

export const navigateToPdf = (data, userCode, navigate, awardCertificateLoader) => {
  const time = new Date().getTime().toString().slice(-6);
  if(!awardCertificateLoader){
    navigate(`/my-bio/award-view/certificate?userCode=${userCode}&t=${time}`, {
      state: { url: data?.pdfPreview, link: data?.awardCertificateURL },
    });
  }else{
    return
  }

};

export const navigateToImg = (data, userCode, navigate, awardCertificateLoader) => {
  const time = new Date().getTime().toString().slice(-6);
  if(!awardCertificateLoader){
  navigate(
    `/my-bio/award-view/view-certificate?userCode=${userCode}&t=${time}`,
    {
      state: { url: data?.awardCertificateURL },
    }
  );
  }else{
    return
  }
};

export const navigateToNeeds = (needId, userCode, navigate, setFormData) => {
  setFormData({
    message: "",
    f_name: "",
    l_name: "",
    phone_number: "",
    website1: '',
    website2: '',
    contact_type: "whatsapp",
    country_code: '+91',
    maxDigits: 10,
  });
  const time = new Date().getTime().toString().slice(-6);
  navigate(
    `/my-bio/needs/need?needId=${needId}&userCode=${userCode}&t=${time}`
  );
};

export const navigateToHomeFromNeeds = (userCode, navigate) => {
  const time = new Date().getTime().toString().slice(-6);
  navigate(`/?userCode=${userCode}&t=${time}`);
};

export const handleNumber = (input) => {
  const pattern = /^[0-9]+$/;
  return pattern.test(input);
};

export const handleChange = (value, setPhoneError, formData, setFormData) => {
  if (value === "" || (value.length <= 10 && handleNumber(value))) {
    setPhoneError(false);
    setFormData({ ...formData, phone_number: value });
  }
};

export const handleBlur = (
  value,
  firstNameError,
  setFirstNameError,
  phoneError,
  setPhoneError
) => {
  const isValid = value?.trim() !== "";
  if (!firstNameError) setFirstNameError(!isValid);
  if (!phoneError) setPhoneError(!isValid);
};
