import axios from "axios";
import moment from "moment";
import _ from "lodash";
import { Link } from "react-router-dom";
import { handleChange } from "./TashafsModule/Bio/bioGlobalFunctions";
import toast from "react-simple-toasts";
import { isFirefox, isMacOs } from "react-device-detect";

export function convertToRgbColor(hexNumber) {
  const hexString = String(hexNumber).replace(/^0+/, "");
  const paddedHexString = hexString.padStart(6, "0");
  const r = parseInt(paddedHexString.substr(0, 2), 16);
  const g = parseInt(paddedHexString.substr(2, 2), 16);
  const b = parseInt(paddedHexString.substr(4, 2), 16);
  return [r, g, b];
}

export function formatCommentTimestamp(timestamp) {
  const currentDate = new Date();
  const commentDate = new Date(timestamp);
  const timeDifferenceInSeconds = Math.floor(
    (currentDate - commentDate) / 1000
  );

  if (timeDifferenceInSeconds < 60) {
    return `${timeDifferenceInSeconds} s`;
  } else if (timeDifferenceInSeconds < 3600) {
    const minutes = Math.floor(timeDifferenceInSeconds / 60);
    return `${minutes} m`;
  } else if (timeDifferenceInSeconds < 86400) {
    const hours = Math.floor(timeDifferenceInSeconds / 3600);
    return `${hours} h`;
  } else if (timeDifferenceInSeconds < 2592000) {
    const days = Math.floor(timeDifferenceInSeconds / 86400);
    return `${days} d`;
  } else if (timeDifferenceInSeconds < 31104000) {
    const months = Math.floor(timeDifferenceInSeconds / 2592000);
    return `${months} mon`;
  } else {
    const years = Math.floor(timeDifferenceInSeconds / 31104000);
    return `${years} yr`;
  }
}

export const gradientColors = [
  ["rgba(0,0,0,0)", "rgba(0,73,89,1)"],
  ["rgba(0,0,0,0)", "rgba(141,105,57,1)"],
  ["rgba(0,0,0,0)", "rgba(201,104,98,1)"],
  ["rgba(0,0,0,0)", "rgba(162,98,201,1)"],
  ["rgba(0,0,0,0)", "rgba(98,201,158,1)"],
  ["rgba(0,0,0,0)", "rgba(139,1,35,1)"],
];

export const gradientSolidColors = [
  ["rgba(255,152,178,1)", "rgba(139,1,35,1)"],
  ["rgba(84,224,255,1)", "rgba(0,73,89,1)"],
  ["rgba(255,224,182,1)", "rgba(173,109,23,1)"],
  ["rgba(123,240,191,1)", "rgba(98,201,158,1)"],
  ["rgba(255,198,195,1)", "rgba(201,104,98,1)"],
  ["rgba(216,152,255,1)", "rgba(162,98,201,1)"],
];

export const getRandomColor = (colors) =>
  colors[Math.floor(Math.random() * colors.length)];

export function isProductionEnvironment() {
  return true;
}

export function getUserCode() {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("userCode");

  return myParam;
}
export function getNetworkCode() {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("networkCode");

  return myParam;
}

export const shareURL = `${process.env.REACT_APP_URL}/shareProfile`;

export const getCurrentTime = () => {
  const currentDate = new Date();
  const currentTimeInSeconds = Math.floor(currentDate.getTime() / 1000);
  return currentTimeInSeconds;
};

export function colorMatrixToRGBA(colorMatrix) {
  const [r, g, b, a] = colorMatrix.slice(0, 4);

  const red = Math.round(r * 255);
  const green = Math.round(g * 255);
  const blue = Math.round(b * 255);
  const alpha = Math.round(a * 255);

  const rgba = `rgba(${red}, ${green}, ${blue}, ${alpha / 255})`;

  return rgba;
}

export const handleMapClick = (lat, lon) => {
  const userAgent = navigator.userAgent;
  const isIPad = /iPad/.test(userAgent);
  const isIPhone = /iPhone|iPod/.test(userAgent);
  const isIOS = isIPad || isIPhone;
  const isMac = /Macintosh/.test(userAgent);
  const isAndroid = /Android/.test(userAgent);
  const isChrome = /Chrome|CriOS/.test(userAgent);
  const isFirefox = /Firefox|FxiOS/.test(userAgent);
  const isSafari = /Version\/[\d.]+.*Safari/.test(userAgent) && !isChrome; // More strict Safari check

  // 1. Chrome on iOS (opens Apple Maps)
  if (userAgent.includes("CriOS")) {
    window.location.href = `maps://maps?q=${lat},${lon}`;
  } 
  // 2. Firefox on Android (opens Google Maps)
  else if (isFirefox && isAndroid) {
    window.open(`http://www.google.com/maps/search/${lat},${lon}`, "_blank");
  }
  // 3. Firefox on iOS (opens Apple Maps)
  else if (userAgent.includes("FxiOS")) {
    window.location.href = `maps://maps?q=${lat},${lon}`;
  }
  // 4. Safari on iOS or Mac (now opens Apple Maps on both)
  else if (isSafari && (isIOS || isMac)) {
    window.open(`http://maps.apple.com/maps?q=${lat},${lon}`, "_blank");
  }
  // 5. Firefox on Mac (opens Google Maps)
  else if (isFirefox && isMac) {
    window.open(`https://www.google.com/maps/search/${lat},${lon}`, "_blank");
  }
  // 6. Chrome on Android (opens native maps)
  else if (isChrome && isAndroid) {
    window.open(`https://www.google.com/maps/search/${lat},${lon}`, "_blank");
  }
  // 7. Chrome on Windows/Mac/Linux (opens Google Maps)
  else if (isChrome && !isIOS && !isAndroid) {
    window.open(`https://www.google.com/maps/search/${lat},${lon}`, "_blank");
  }
  // 8. Default (Google Maps)
  else {
    window.open(`https://www.google.com/maps/search/${lat},${lon}`, "_blank");
  }
  // const userAgent = navigator.userAgent;

  // // Check if the user agent indicates an iOS device
  // if (userAgent.includes("CriOS")) {
  //   // This is Google Chrome on iOS
  //   window.location.href = `maps://maps?q=${lat},${lon}`;
  // } else if (
  //   userAgent.includes("Mozilla") &&
  //   (userAgent.includes("Android") || userAgent.includes("Linux"))
  // ) {
  //   // It's Firefox on Android
  //   const url = `http://www.google.com/maps/search/${lat},${lon}`;
  //   window.open(url, "_blank");
  // } else if (userAgent.includes("Mozilla") && userAgent.includes("FxiOS")) {
  //   // const url = `http://maps.apple.com/maps?q=${lat},${lon}`;
  //   // window.open(url, "_blank");
  //   // window.location.href = url
  //   window.location.href = `maps://maps?q=${lat},${lon}`;
  // } else if (userAgent.includes("Safari") && !userAgent.includes("CriOS")) {
  //   // This is Safari on iOS
  //   const url = `http://maps.apple.com/maps?q=${lat},${lon}`;
  //   window.open(url, "_blank");
  // } else if (
  //   userAgent.includes("Mozilla") &&
  //   userAgent.includes("Macintosh") &&
  //   userAgent.includes("Firefox")
  // ) {
  //   // This is Firefox on Mac OS
  //   const url = `http://maps.apple.com/maps?q=${lat},${lon}`;
  //   window.open(url, "_blank");
  // } else {
  //   // It's neither Chrome nor Safari on iOS
  //   const url = `https://www.google.com/maps/search/${lat},${lon}`;
  //   window.open(url, "_blank");
  // }
};

export const handleShare = (data) => {
  const time = new Date().getTime().toString().slice(-6);

  (async () => {
    if (navigator.share) {
      // const date = new Date()
      // const currentDate = moment(date).format("ddd, DD MMM YYYY")
      try {
        await navigator.share({
          url: data?.cardInfo?.[0]?.shareCardURL + `&t=${time}`,
        });
      } catch (error) {}
    } else {
      if (
        navigator.userAgent.includes("Firefox") &&
        navigator.userAgent.includes("Windows")
      ) {
        return toast("Web share not supported by Windows Firefox");
      }
      if (isMacOs && isFirefox) {
        return toast("Web share not supported by MacOS Firefox");
      }
      toast("Web share not supported by MacOS Chrome");
    }
  })();
};

export const handleShareProfile = (data) => {
  const time = new Date().getTime().toString().slice(-6);

  (async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          url: data?.cardInfo?.[0]?.shareCardURL + `&t=${time}`,
        });
      } catch (error) {}
    } else {
      if (
        navigator.userAgent.includes("Firefox") &&
        navigator.userAgent.includes("Windows")
      ) {
        return toast("Web share not supported by Windows Firefox");
      }
      if (isMacOs && isFirefox) {
        return toast("Web share not supported by MacOS Firefox");
      }
      toast("Web share not supported by MacOS Chrome");
    }
  })(); // Add parentheses here to call the function immediately
};

export const navigateToPath = (navigate, userCode, path) => {
  const time = new Date().getTime().toString().slice(-6);
  navigate(`${path}?userCode=${userCode}&t=${time}`);
};

export const navigateToPathWithState = (
  navigate,
  userCode,
  path,
  navigateState
) => {
  const time = new Date().getTime().toString().slice(-6);
  navigate(`${path}?userCode=${userCode}&t=${time}`, {
    state: navigateState,
  });
};

export const navigateToLeadsWithState = (
  navigate,
  userCode,
  leadId,
  path,
  navigateState,
  setFormData,
  e
) => {
  setFormData({
    message: "",
    f_name: "",
    l_name: "",
    phone_number: "",
    website1: "",
    website2: "",
    contact_type: "whatsapp",
    country_code: "+91",
    maxDigits: 10,
  });
  e.stopPropagation();
  const time = new Date().getTime().toString().slice(-6);
  navigate(`${path}?leadId=${leadId}&userCode=${userCode}&t=${time}`, {
    state: navigateState,
  });
};

function formatPricing(minValue, maxValue, currency) {
  if (!maxValue && !minValue) {
    return "";
  }

  if (!isNaN(parseInt(minValue)) && !isNaN(parseInt(maxValue))) {
    let min =
      currency === "₹"
        ? formatIndianCurrency(minValue)
        : formatInternationalCurrency(minValue);
    let max =
      currency === "₹"
        ? formatIndianCurrency(maxValue)
        : formatInternationalCurrency(maxValue);

    let pricingData;
    if (maxValue === "") {
      pricingData = min;
    } else if (minValue === "") {
      pricingData = max;
    } else {
      const showDash = min !== "" && max !== "" ? "-" : "";
      pricingData = `${min} ${showDash} ${max}`;
    }

    return pricingData;
  } else {
    if (isNaN(parseInt(maxValue))&&!isNaN(parseInt(minValue))) {
      let min =
        currency === "₹"
          ? formatIndianCurrency(minValue)
          : formatInternationalCurrency(minValue);
      return min;
    } else if (isNaN(parseInt(minValue))&&!isNaN(parseInt(maxValue))) {
      let max =
        currency === "₹"
          ? formatIndianCurrency(maxValue)
          : formatInternationalCurrency(maxValue);
      return max;
    } else {
      return "";
    }
  }
}

const formatIndianCurrency = (value) => {
  if (value !== "") {
    const format = IndianCountFormat.find(
      (format) => parseInt(value) < format.limit
    );
    value = (1000 * value) / format.divident;
    value = (value * 10) / 10;
    value = truncateDecimal(value);
    return value + format.letter;
  }
};

function formatInternationalCurrency(value) {
  if (value !== "") {
    const format = internationalCountFormat.find(
      (format) => parseInt(value) < format.limit
    );
    value = (1000 * value) / format.divident;
    value = (value * 10) / 10;
    value = truncateDecimal(value);
    return value + format.letter;
  }
}

const truncateDecimal = (number) => {
  let stringNumber = number.toString();
  if (stringNumber?.includes(".")) {
    let tempNumber = stringNumber.split(".");
    let frontPhase = tempNumber[0];
    let secontPhase = tempNumber[1];
    if (secontPhase?.charAt(0) === "0") {
      if (secontPhase?.charAt(1) === "0") {
        return frontPhase;
      } else {
        secontPhase =
          secontPhase?.length > 2 ? secontPhase?.slice(0, 2) : secontPhase;
        return `${frontPhase}.${secontPhase}`;
      }
    } else {
      secontPhase =
        secontPhase?.length > 2 ? secontPhase?.slice(0, 2) : secontPhase;
      return `${frontPhase}.${secontPhase}`;
    }
  } else {
    stringNumber =
      stringNumber.length > 4 ? stringNumber.slice(0, 3) : stringNumber;
    return stringNumber;
  }
};

const IndianCountFormat = [
  {
    letter: "",
    limit: 1000,
    divident: 1000,
  },
  {
    letter: "K",
    limit: 100000,
    divident: 1000000,
  },

  {
    letter: "L",
    limit: 10000000,
    divident: 100000000,
  },
  {
    letter: "C",
    limit: Infinity,
    divident: 10000000000,
  },
];
const internationalCountFormat = [
  {
    letter: "",
    limit: 1e3,
    divident: 1000,
  },
  {
    letter: "K",
    limit: 1e5,
    divident: 1000000,
  },
  {
    letter: "K",
    limit: 1e6,
    divident: 1000000,
  },
  {
    letter: "M",
    limit: 1e9,
    divident: 1000000000,
  },
  {
    letter: "B",
    limit: 1e12,
    divident: 1000000000000,
  },
];

export { formatPricing, formatIndianCurrency, formatInternationalCurrency };

export const handleResetOtp = (props) => {
  const {
    setStartTimer,
    resetTimer,
    setReqOtp,
    setIncorrectOtp,
    isLive,
    productionUrl,
    data,
    setTrn,
  } = props;
  setStartTimer(true);
  resetTimer();
  setReqOtp(false);
  setIncorrectOtp(false);
  axios
    .post(`${isLive ? productionUrl : ""}/webViewSignUp`, {
      phoneNumber: data?.phoneNumber,
      hashId: "elRed",
    })
    .then((res) => {
      setTrn(res?.data?.result?.[0]?.transactionId);
    })
    .catch((error) => {
      if (error?.response?.data?.errorCode === -1) {
        toast("Something went wrong with backend. Please try again after sometime")
      } else if (error?.response?.data?.errorCode === 104 && error?.response?.status === 500) {
        toast("OTP Service Down. Please try again after sometime")
      }
      else if (error?.response?.data?.errorCode === 113 || error?.response?.data?.errorCode === 115) {
        toast(error?.response?.data?.message)
      }
    });
};

export const verifyOtp = (
  props,
  setFormData,
  setShow,
  setOwnNeed,
  setValidationError
) => {
  const {
    otp,
    data,
    setSending,
    isLive,
    productionUrl,
    needId,
    navigate,
    setIncorrectOtp,
    toast,
    trn,
    userCode,
    setOtp,
    setOtpError,
  } = props;

  setValidationError(false);
  if (
    data?.contactMethod === "" ||
    data?.firstname?.trim() === "" ||
    data?.phoneNumber?.trim() === "" ||
    data?.responseDescription?.trim() === ""
  ) {
    setValidationError(true);
    toast("Crucial fields cannnot be empty", 2000);
    return;
  }

  const trimmedFirstname = capitalizeEachWord(data?.firstname?.trim());
  const trimmedLastname = capitalizeEachWord(data?.lastname?.trim());
  if (otp.length === 6) {
    if (data?.data?.responseDescription !== "") {
      let otpObject = {
        contactMethod: data?.contactMethod,
        phoneNumber: data?.phoneNumber,
        responseDescription: data?.responseDescription,
        socialMediaLinks: data?.socialMediaLinks,
        otp: otp,
        needId: needId,
        transactionId: trn,
        firstname: trimmedFirstname,
        lastname: trimmedLastname,
      };
      setSending(true);
      axios
        .post(`${isLive ? productionUrl : ""}/webViewVerifyOtp`, otpObject)
        .then((res) => {
          localStorage.setItem("loggedInUserCode", res?.data?.userCode);
          const time = new Date().getTime().toString().slice(-6);
          localStorage.setItem(
            "accessToken",
            res?.data?.result?.[0]?.accessToken
          );
          navigate(
            `/my-bio/needs/need?needId=${needId}&userCode=${userCode}&t=${time}`
          );
          setFormData({
            message: "",
            f_name: "",
            l_name: "",
            phone_number: "",
            website1: "",
            website2: "",
            contact_type: "whatsapp",
            country_code: "+91",
            maxDigits: 10,
          });
          setSending(false);
        })
        .catch((err) => {
          if (err?.response?.data?.errorCode === 5) {
            setIncorrectOtp(true);
            setOtp("");
            setSending(false);
            setOtpError("Invalid OTP entered");
          } else if (err?.response?.data?.errorCode === 8) {
            setIncorrectOtp(true);
            setOtp("");
            setSending(false);
            setOtpError("OTP expired");
          } else if (err?.response?.data?.errorCode === 2) {
            setShow(true);
            setSending(false);
          } else if (err?.response?.data?.errorCode === 3) {
            setOwnNeed(true);
          } else if (err?.response?.data?.errorCode === -1) {
            toast(
              "Something went wrong with backend. Please refresh page to continue"
            );
            setSending(false);
          } else if (err?.response?.data?.errorCode === 115) {
            toast(err?.response?.data?.message)
            setSending(false);
          }
        });
    } else {
      toast.error("Message should not be empty");
    }
  }
};

export const clearData = (setFormData) => {
  setFormData({
    message: "",
    f_name: "",
    l_name: "",
    phone_number: "",
    website1: "",
    website2: "",
    contact_type: "whatsapp",
    country_code: "+91",
    maxDigits: 10,
  });
};

export const goHome = (navigate, userCode) => {
  const time = new Date().getTime().toString().slice(-6);
  navigate(`/?userCode=${userCode}&t=${time}`);
};
export const goToLeadsList = (navigate, userCode) => {
  const time = new Date().getTime().toString().slice(-6);
  navigate(`/leads?userCode=${userCode}&t=${time}`);
};

export const downloadElred = (url) => {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  if (isIOS || isMacOs) {
    // Redirect to the App Store URL for iOS
    window.open(url);
  } else {
    // Redirect to the Play Store URL for Android
    // window.open("https://play.google.com/store/apps/details?id=com.elredmod.one","_blank");
    // window.open(url);
    window.open(
      "https://play.google.com/store/search?q=el%20red&c=apps&hl=en_IN&gl=US",
      "_blank"
    );
  }
};

export const byDate = (Conversation) => {
  let data = Conversation.reduce((obj, item) => {
    let date = moment(item.responseCreatedAt).format("ddd, DD MMM YYYY");
    let today = moment().format("ddd, DD MMM YYYY");
    let yesterDay = moment().subtract(1, "days").format("ddd, DD MMM YYYY");
    date = date === today ? "Today" : date === yesterDay ? "Yesterday" : date;
    if (obj[date]) {
      obj[date].push(item);

      return obj;
    }
    obj[date] = [{ ...item }];

    return obj;
  }, {});
  return data;
};

export const reload = () => {
  window.location.reload();
};

export const naviagteToLeadOrNeeds = (
  needId,
  setFormData,
  navigate,
  userCode,
  leadId
) => {
  const time = new Date().getTime().toString().slice(-6);
  if (needId !== "") {
    navigate(
      `/my-bio/needs/need?needId=${needId}&userCode=${userCode}&t=${time}`
    );
  } else {
    navigate(
      `/leads/leads-reply?leadId=${leadId}&userCode=${userCode}&t=${time}`
    );
  }
};

export const ScrollToTop = _.debounce((id, responseId) => {
  const responseIdDiv = document.getElementById(responseId);
  responseIdDiv.scrollIntoView({ behavior: "auto", block: "start" });
}, 100);

export const handleEnable = (
  idx,
  setEnable,
  enable,
  setOverLay,
  selectedChat,
  setTopOverLay,
  zChat
) => {
  setEnable(!enable);
  setOverLay(true);

  setTopOverLay(true);
  if (zChat !== "") {
    selectedChat("");
  } else {
    selectedChat(idx);
  }
};

export const OffLineRetry = (toast, setisOffline, setIsButton) => {
  if (!navigator.onLine) {
    toast("Still internet is not back!");
    setIsButton(true);
    debouncebutton(setIsButton);
  } else {
    setisOffline(false);
    setIsButton(false);
  }
};
let debouncebutton = _.debounce((setIsButton) => {
  setIsButton(false);
}, 3000);

export const checkAccess = (setAccessEmpty, setAccessToken, setUser) => {
  if (localStorage.getItem("accessToken")) {
    if (localStorage.getItem("accessToken") === "") {
      setAccessEmpty(true);
    } else {
      setAccessToken(localStorage.getItem("accessToken"));
    }
  } else {
    setAccessEmpty(true);
    localStorage.setItem("accessToken", "");
  }

  if (localStorage.getItem("loggedInUserCode")) {
    setUser(localStorage.getItem("loggedInUserCode"));
  } else {
    localStorage.setItem("loggedInUserCode", "");
  }
};

export const contactType = (setFormData, type, formData) => {
  setFormData({ ...formData, contact_type: type });
};

export const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const calcTextLength = (length, text, stringType) => {
  const firstLetter = text?.[0]?.toUpperCase() || "";
  const bodyLetter = text?.slice(1)?.toLowerCase() || "";
  const joinedText = firstLetter + bodyLetter;
  let finalText = "";

  if (stringType === "name") {
    const words = joinedText.split(" ");
    const titleCaseWords = words.map((word) => capitalizeFirstLetter(word));
    const string = titleCaseWords.join(" ");
    const finalLength = length + 1;
    if (string.length <= finalLength) {
      finalText = string;
    } else {
      finalText = string?.slice(0, finalLength - 1) + "...";
    }
  } else if (stringType === "capitalize") {
    if (joinedText?.length <= length) {
      finalText = joinedText;
    } else {
      finalText = joinedText?.slice(0, length) + "...";
    }
  } else {
    if (text?.length <= length) {
      finalText = text;
    } else {
      finalText = text?.slice(0, length) + "...";
    }
  }

  return finalText;
};

export const calcTextLength2 = (length, text, stringType) => {
  let finalText = "";

  if (stringType === "name") {
    const words = text.split(" ");
    const titleCaseWords = words.map((word) => capitalizeFirstLetter(word));
    const string = titleCaseWords.join(" ");
    const finalLength = length + 1;
    if (string.length <= finalLength) {
      finalText = string;
    } else {
      finalText = string?.slice(0, finalLength - 1) + "...";
    }
  } else if (stringType === "capitalize") {
    if (text.length <= length) {
      finalText = text;
    } else {
      finalText = text?.slice(0, length) + "...";
    }
  } else {
    // Default behavior for other string types
    const joinedText =
      text?.[0]?.toUpperCase() + text?.slice(1)?.toLowerCase() || "";
    if (joinedText.length <= length) {
      finalText = joinedText;
    } else {
      finalText = joinedText?.slice(0, length) + "...";
    }

    // Check if the length of the text is less than or equal to 3, then uppercase it
    if (finalText.length <= 3) {
      finalText = finalText.toUpperCase();
    }
  }

  return finalText;
};

export const capitalNames = (text) => {
  const textLower = text?.toLowerCase();

  const firstLetter = textLower?.[0]?.toUpperCase();
  const bodyLetter = textLower?.slice(1)?.toLowerCase();
  let joinedText = firstLetter + bodyLetter;

  const words = joinedText.split(" ");
  const titleCaseWords = words.map((word) => capitalizeFirstLetter(word));
  const string = titleCaseWords.join(" ");
  return string;
};

export const capitalizeFormInput = (text) => {
  if (!text) return "";
  const textLower = text?.toLowerCase();

  const firstLetter = textLower?.[0]?.toUpperCase();
  const bodyLetter = textLower?.slice(1)?.toLowerCase();
  let joinedText = firstLetter + bodyLetter;

  const words = joinedText.split(" ");
  const titleCaseWords = words.map((word) => capitalizeFirstLetter(word));
  const string = titleCaseWords.join(" ");
  return string.trimStart();
};

export const onEmojiClickvalue = (
  formData,
  currentPosition,
  value,
  setFormData,
  setopenEmoji,
  inputRef,
  id,
  setCurrentPosition,
  inputHandlerChatProps
) => {
  const { toaster, toast, setToaster } = inputHandlerChatProps;

  let formtext = formData.message + value;
  let getLength = 500 - formData.message.length;

  if (getLength >= value.length) {
    if (formtext.length > 500) {
      if (toaster === true) {
        toast("Oops! You have reached the maximum character limit.");
        setToaster(false);
        setTimeout(() => {
          setToaster(true);
        }, 3000);
      }
    } else {
      setFormData({ ...formData, message: formtext });
      inputRef.current.focus();
      setCurrentPosition(formtext.length);
      inputRef.current.scrollTop = inputRef?.current?.scrollHeight;
    }
  } else if (formData.message.length === 500) {
    if (toaster === true) {
      toast("Oops! You have reached the maximum character limit.");
      setToaster(false);
      setTimeout(() => {
        setToaster(true);
      }, 3000);
    }
  }
};

export const makeFirstCapital = (text) => {
  if (!text) return "";

  const words = text.split(" ");

  const processedWords = words.map((word) => {
    if (word.length === 0) return "";

    const firstLetter = word[0].toUpperCase();
    const restOfWord = word.slice(1).toLowerCase();
    return firstLetter + restOfWord;
  });

  return processedWords.join(" ");
};

export const capitalizeNameString = (str) => {
  if (str) {
    const letter = str.toLowerCase().replace(/\b[a-z]/g, function (letter) {
      return letter.toUpperCase();
    });

    return letter;
  }

  return "";
};

export function getBrowserType() {
  const test = (regexp) => {
    return regexp.test(navigator.userAgent);
  };

  if (test(/opr\//i) || !!window.opr) {
    return "Opera";
  } else if (test(/edg/i)) {
    // if (window.innerWidth < 500) {
    //   return "Microsoft Edge"
    // } else {
    //   return "desktop browser";
    // }
    return "Microsoft Edge";
  } else if (test(/chrome|chromium|crios/i)) {
    return "Google Chrome";
  } else if (test(/firefox|fxios/i)) {
    // if (window.innerWidth < 500) {
    //   return "Mozilla Firefox";
    // } else {
    //   return "desktop browser";
    // }
    return "Mozilla Firefox";
  } else if (test(/safari/i)) {
    if (test(/Macintosh/i)) return "safari mac";
    return "ios";
  } else if (test(/trident/i)) {
    return "Microsoft Internet Explorer";
  } else if (test(/ucbrowser/i)) {
    return "UC Browser";
  } else if (test(/samsungbrowser/i)) {
    return "Samsung Browser";
  } else {
    return "Unknown browser";
  }
}

export function checkChromeIOS() {
  const test = (regexp) => {
    return regexp.test(navigator.userAgent);
  };

  if (test(/crios/i)) {
    return true;
  } else return false;
}

export const caps = (text) => {
  let firstLetter = text?.[0].toUpperCase();
  let body = text?.slice(1).toLowerCase();
  const final = firstLetter + body;
  return final;
};

export const preText = (text) => {
  return text.replace(/\n/g, "\n");
};

export function capitalizeEachWord(sentence) {
  const words = sentence.toLowerCase().split(" ");

  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  return capitalizedWords.join(" ");
}

export function getFileExtension(url) {
  const parts = url.split(".");
  if (parts.length > 1) {
    return parts[parts.length - 1];
  }
  return null;
}

export const parseParagraph = (text) => {
  const urlRegex = /((https?:\/\/)?(www\.)?([^\s]+(\.[^\s]+)+))/g;
  const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})/g;

  // Split the text into words while preserving URLs and email addresses
  const words = text?.split(/(\s+|(?=https?:\/\/)|(?=mailto:))/);

  const parsedText = words?.map((word, index) => {
    if (urlRegex?.test(word)) {
      const formattedUrl = word?.startsWith("http") ? word : `http://${word}`;
      return (
        <Link
          key={index}
          to={formattedUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {word}
        </Link>
      );
    } else if (emailRegex?.test(word)) {
      return (
        <a
          key={index}
          href={`mailto:${word}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {word}
        </a>
      );
    }
    return word;
  });

  return parsedText;
};

export const parseParagraphLead = (text) => {
  if (!text) return null;

  const createLink = (url, content) => (
    <a
      onClick={(e) => e.stopPropagation()}
      key={url}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
    </a>
  );

  const words = text.split(/(\s+|(?=https?:\/\/)|(?=mailto:))/);

  const parsedText = words.map((word, index) => {
    if (word.startsWith("http://") || word.startsWith("https://")) {
      return createLink(word, word);
    } else if (word.includes("@")) {
      return createLink(`mailto:${word}`, word);
    } else if (word.match(/^www\./)) {
      return createLink(`http://${word}`, word);
    }
    return word;
  });

  return parsedText;
};

export const handleNumberChange = (
  value,
  setPhoneError,
  formData,
  setFormData
) => {
  const modifiedValue = value?.replace(/[^\d+]/g, "");
  let truncatedValue = modifiedValue?.replace(/^0+/, "");

  if (truncatedValue?.startsWith("+91") && truncatedValue?.length > 12) {
    truncatedValue = truncatedValue?.slice(3);
  } else if (truncatedValue?.startsWith("91") && truncatedValue?.length >= 12) {
    truncatedValue = truncatedValue?.slice(2);
  }
  truncatedValue = truncatedValue?.slice(0, 10);
  handleChange(truncatedValue, setPhoneError, formData, setFormData);
};

export const handleChangeOTP = (value, setOtp) => {
  const updatedOTP = value?.replace(/\D/g, "");
  setOtp(updatedOTP);
};

export const handleInputBlur = (
  value,
  setFormData,
  phoneError,
  setPhoneError
) => {
  if (value.length < 10) {
    setPhoneError("Enter valid phone number");
  } else {
    setPhoneError("");
  }
};

export const openPlaystore = () => {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  if (isIOS || isMacOs) {
    window.open("https://apps.apple.com/us/app/instagram/id389801252");
  } else {
    window.open(
      "https://play.google.com/store/search?q=el%20red&c=apps&hl=en_IN&gl=US",
      "_blank"
    );
  }
};

export const handleUrlClick = (url) => {
  if (url.includes("http://") || url.includes("https://")) {
    window.open(url, "_blank");
  } else {
    window.open(`https://${url}`, "_blank");
  }
};

export const viewProfile = (data) => {
  const time = new Date().getTime().toString().slice(-6);
  window.open(`${data?.shareProfileURL}&t=${time}`, "_blank");
};

export const cancelDelete = (
  deleteCancelProps,
  setTopOverLay,
  setDeletePopup
) => {
  const { closePopup, setOverLay, setEnable, selectedChat } = deleteCancelProps;
  closePopup(setOverLay, setEnable);
  setTopOverLay(false);
  selectedChat("");
  setDeletePopup(false);
};

export const handleScroll = (
  scrollDivRef,
  setScrollheight,
  setScrollPosition
) => {
  const scrollDiv = scrollDivRef.current;
  const divHeight = scrollDiv.offsetHeight;
};

export const updateProgress = (setProgress, currentIndex, isPaused) => {
  return setInterval(() => {
    if (!document.hidden && !isPaused) {
      setProgress((prevProgress) =>
        prevProgress?.map((value, i) =>
          i === currentIndex || (i === 0 && currentIndex === 0)
            ? value + 1
            : value
        )
      );
    }
  }, 50);
};

export const scrollDiv = (scrollPosition, scrollDivRef) => {
  if (scrollPosition && scrollDivRef?.current) {
    scrollDivRef.current.scrollTop = scrollPosition;
  }
};
export const onProfileClick = (e, shareURL, userCode) => {
  const url = `${shareURL}/?userCode=${userCode}&t=${getCurrentTime()}`;
  window.open(url, "_blank");
  e.stopPropagation();
};

export const calcWidthAnimation = (myDivRef, setCalculateWidth) => {
  if (myDivRef.current) {
    const width = myDivRef?.current?.offsetWidth;
    setCalculateWidth(width);
  }
};

export const parseParagraphItalic = (text) => {
  const urlRegex = /((https?:\/\/)?(www\.)?([^\s]+(\.[^\s]+)+))/g;
  const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})/g;

  // Split the text into words while preserving URLs and email addresses
  const words = text?.split(/(\s+|(?=https?:\/\/)|(?=mailto:))/);

  const parsedText = words?.map((word, index) => {
    if (urlRegex?.test(word)) {
      const formattedUrl = word?.startsWith("http") ? word : `http://${word}`;
      return (
        <Link
          key={index}
          to={formattedUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <u>
            <i>{word}</i>
          </u>
        </Link>
      );
    } else if (emailRegex?.test(word)) {
      return (
        <a
          key={index}
          href={`mailto:${word}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <u>
            <i>{word}</i>
          </u>
        </a>
      );
    }
    return word;
  });

  return parsedText;
};

// Define regular expressions to match URLs and email addresses
const urlRegex = /((https?:\/\/)?(www\.)?([^\s]+(\.[^\s]+)+))/g;
const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})/g;

export function parseText(text) {
  // Split the text into words while preserving URLs, email addresses, and line breaks
  const words = text?.split(/(\s+|(?=https?:\/\/)|(?=mailto:)|\n)/);

  const parsedText = words?.map((word, index) => {
    if (urlRegex?.test(word)) {
      const formattedUrl = word?.startsWith("http") ? word : `http://${word}`;
      return (
        <>
          <Link
            key={index}
            to={formattedUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {word}
          </Link>
          &nbsp;
        </>
      );
    } else if (emailRegex?.test(word)) {
      return (
        <>
          <a
            key={index}
            href={`mailto:${word}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {word}
          </a>
          &nbsp;
        </>
      );
    } else if (word === "\n") {
      return <br key={index} />;
    }
    return word;
  });

  return parsedText;
}

export const getURlValid = async (url) => {
  let isValid;

  if (url.includes("gmail")) {
    isValid = false;
    return isValid;
  } else {
    try {
      await fetch(url, { mode: "no-cors" })
        .then((rows) => {
          if (rows.status === 404) {
            isValid = false;
          } else if (rows.status === 0) {
            isValid = true;
          } else {
            isValid = false;
          }
        })
        .catch((e) => {
          isValid = false;
        });
      return isValid;
    } catch (error) {
      isValid = false;
      return isValid;
    }
  }
};

export const getURlValidcopy = (title, setfinalUrl, setshowFavIcon) => {
  let imgTitle = title;
  let finalUrla;

  imgTitle = title?.includes("www.") ? title?.replaceAll("www.", "") : title;
  let cleanedUrl = imgTitle.includes("https")
    ? imgTitle?.replaceAll("https://", "")
    : imgTitle.includes("http")
    ? imgTitle?.replaceAll("http://", "")
    : imgTitle;

  cleanedUrl = cleanedUrl.includes("/") ? cleanedUrl.split("/")[0] : cleanedUrl;

  const faviconFetchLink = "https://www.google.com/s2/favicons?domain=";
  finalUrla = `${faviconFetchLink}${imgTitle}&sz=32`;

  setfinalUrl(finalUrla);
};

export const getFavicon = (title, setshowFavIcon, setfinalUrl, callback) => {
  let imgTitle = title?.includes("www.")
    ? title?.replaceAll("www.", "")
    : title;
  let cleanedUrl = imgTitle.includes("https")
    ? imgTitle?.replaceAll("https://", "")
    : imgTitle.includes("http")
    ? imgTitle?.replaceAll("http://", "")
    : imgTitle;

  cleanedUrl = cleanedUrl.includes("/") ? cleanedUrl.split("/")[0] : cleanedUrl;

  const faviconLink = document.createElement("link");
  faviconLink.rel = "icon";
  faviconLink.href = `https://${cleanedUrl}/favicon.ico`;

  setfinalUrl(faviconLink.href);
  faviconLink.onload = function () {
    callback(faviconLink.href);
    setshowFavIcon(true);
  };
};

export const preventZoom = (deviceinfo) => {
  if (deviceinfo?.deviceDetect()?.os === "iOS") {
    document.body.style.zoom = 1.0;
  }
};

export const dateFormatter = (value) => {
  let timestampMs = parseInt(value);
  let dateObject = moment(timestampMs);
  let formattedDate = dateObject.format("ddd, DD MMM YYYY");
  return formattedDate;
};

export const openLocationfromLeadsandNeeds = (
  location,
  latitude,
  longitude
) => {
  if (location !== "") {
    handleMapClick(latitude, longitude);
  }
};

export const getFirstWorkofLocation = (datalocation) => {
  if (datalocation !== "") {
    let newLocationArray = datalocation.split(",");
    let correctedTExt = calcTextLength(26, newLocationArray[0]);
    return correctedTExt;
  }
};

export const removeFocus = (e) => {
  if (e.keyCode === 13 || e.key === "Enter") {
    e.preventDefault();
    e.target.blur();
  }
};

export const handleOpenNetworkUrl = (networkProfileUrl) => {
  const time = new Date().getTime().toString().slice(-6);
  const url = `${networkProfileUrl}&t=${time}`;
  window.open(url, "_blank", "noopener");
};

export const goToNetworks = (navigate, networkcode, e) => {
  const time = new Date().getTime().toString().slice(-6);
  const url = `${shareURL}/?networkCode=${networkcode}&t=${time}`;
  window.open(url, "_blank");
  e.stopPropagation();
};

export const validateFeedbackInput = (
  e,
  toaster,
  toast,
  setToaster,
  formInput,
  setFormInput
) => {
  let backSpace = e.target.value.length < formInput?.length ? true : false;
  let getLength = 10000 - formInput?.length;
  if (
    getLength >= e?.nativeEvent?.data?.length ||
    e?.nativeEvent?.inputType === "insertFromPaste" ||
    e?.nativeEvent?.inputType === "deleteContentBackward" ||
    e?.nativeEvent?.inputType === "insertLineBreak" ||
    e.keyCode === 13 ||
    e.key === "Enter" ||
    backSpace ||
    e?.nativeEvent?.inputType === "insertText"
  ) {
    if (e.target.value.length >= 10000) {
      setFormInput(e.target.value.slice(0, 10000));
      if (toaster === true) {
        toast("Max character limit reached");
        setToaster(false);
        setTimeout(() => {
          setToaster(true);
        }, 3000);
      }
      return;
    } else {
      setFormInput(e.target.value);
    }
  } else {
    if (toaster === true) {
      toast("Max character limit reached");
      setToaster(false);
      setTimeout(() => {
        setToaster(true);
      }, 3000);
    }
  }
};

// export function transformText(text) {
//   if (text.length <= 3) {
//       return text.toUpperCase();
//   } else {
//       return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
//   }
// }

// export function transformText(text) {
//   if (text.length <= 3) {
//     return text.toUpperCase();
//   } else {
//     return text.split(' ')
//       .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//       .join(' ');
//   }
// }

export function transformText(txt) {
  let text = txt?.split(" ");
  let myWords = ["in", "or", "of", "is", "the", "for", "as", "to", "an", "and"];

  return text
    .map((word) => {
      if (word.length <= 3) {
        if (myWords.includes(word.toLowerCase())) {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        } else {
          return word.toUpperCase();
        }
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
    })
    .join(" ");
}

export function transformArray(text) {
  let myWords = ["in", "or", "of", "is", "the", "for", "as", "to", "an", "and"];

  return text
    .map((sentence) => {
      let words = sentence.split(" ");
      return words
        .map((word) => {
          if (myWords.includes(word.toLowerCase())) {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
          } else {
            if (word.length <= 3) {
              return word.toUpperCase();
            } else {
              return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            }
          }
        })
        .join(" ");
    })
    .join(" ");
}

export function capitalizeLeadIndustry(text) {
  const specialWords = [
    "in",
    "or",
    "of",
    "is",
    "the",
    "for",
    "as",
    "to",
    "an",
    "and",
  ];

  return text
    .split(" ")
    .map((word) => {
      if (specialWords?.includes(word?.toLowerCase())) {
        return word?.charAt(0).toUpperCase() + word?.slice(1).toLowerCase();
      }
      return word?.length <= 3
        ? word?.toUpperCase()
        : word?.charAt(0).toUpperCase() + word?.slice(1).toLowerCase();
    })
    .join(" ");
}

export function capitalizeText(text) {
  // Split the text into words
  let words = text.split(" ");

  // Capitalize each word
  let capitalizedWords = words.map((word) => {
    // Ensure that the word is not empty
    if (word.length > 0) {
      // Capitalize the first letter and convert the rest to lowercase
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    } else {
      return word; // Return empty word as it is
    }
  });

  // Join the capitalized words back into a sentence
  let capitalizedText = capitalizedWords.join(" ");

  return capitalizedText;
}

export function transformArrayRatings(text) {
  let myWords = ["in", "or", "of", "is", "the", "for", "as", "to", "an", "and"];

  let words = text.split(" ");

  return words
    .map((word) => {
      if (myWords.includes(word.toLowerCase())) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      } else {
        if (word.length <= 3) {
          return word.toUpperCase();
        } else {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
      }
    })
    .join(" ");
}

export const redirectToAwards = (
  isMiniCardThumbnail,
  isNetwork,
  userCode,
  navigate
) => {
  if (isNetwork || isMiniCardThumbnail) return false;
  const time = new Date().getTime().toString().slice(-6);
  navigate(`/my-bio/view-awards-certificates?userCode=${userCode}&t=${time}`, {
    state: { data: userCode },
  });
};

export const handleMouseOver = (setTooltip) => {
  return setTooltip(true);
}

export const capitalizeNeedTitles = (str) => 
    str.split(",")
       .map(title => title.trim()
                          .split(" ")
                          .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                          .join(" "))
       .join(", ")