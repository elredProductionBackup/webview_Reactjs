import toast from "react-simple-toasts";
import { isFirefox, isMacOs } from "react-device-detect";

export const handleOpenNewUrl = (userDetail) => {
  const time = new Date().getTime().toString().slice(-6);
  const url = `${userDetail?.shareProfileURL}&t=${time}`;
  window.open(url, "_blank");
};

export const handleShareCard = (userDetail) => {
  const time = new Date().getTime().toString().slice(-6);
  (async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          url: userDetail?.shareCardURL + `&t=${time}`,
        });
      } catch (error) {
        // console.error("Error Sharing:", error);
      }
    } else {
      if(navigator.userAgent.includes("Firefox") && navigator.userAgent.includes("Windows")){
        return toast('Web share not supported by Windows Firefox')
      }
      if (isFirefox && isMacOs) {
        return toast('Web share not supported by MacOS Firefox')
      }
      toast('Web share not supported by MacOS Chrome') 
    }
  })();
};
