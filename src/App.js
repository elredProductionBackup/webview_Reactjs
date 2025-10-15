import React, { createContext, useState } from "react";
import { Container } from "react-bootstrap";
import "./App.scss";
import Routing from "./Routing";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-loading-skeleton/dist/skeleton.css";
import { getBrowserType } from "./globalFunctions";
import "react-toastify/dist/ReactToastify.css";
import UnsupportedBrowser from "./TashafsModule/components/UnsupportedBrowser/UnsupportedBrowser";
import { AadharPopupContextProvider } from "./TashafsModule/Profile/components/AadhaarVerifiedPopup/AadharPopupContext";
import axios from "axios";
import { toastConfig } from "react-simple-toasts";

export const GlobalData = createContext();

function App() {
  axios.defaults.headers.common[process.env.REACT_APP_DEFAULT_HEADER]
    = Math.random() > 0.5 ? process.env.REACT_APP_HEADER_KEY_1 : process.env.REACT_APP_HEADER_KEY_2;

  toastConfig({ maxVisibleToasts: 1 });

  const [formData, setFormData] = useState({
    message: "",
    f_name: '',
    l_name: '',
    phone_number: '',
    website1: '',
    website2: '',
    contact_type: 'whatsapp',
    country_code: '+91',
    maxDigits: 10,
  });
  
  const [isOffline, setisOffline] = useState(false)
  const BROWSER_TYPE = getBrowserType();

  window.addEventListener("offline", (event) => {
    setisOffline(true)
  });


  window.addEventListener("online", (event) => {
    setisOffline(false)
  });

  if ((BROWSER_TYPE !== 'Google Chrome' && BROWSER_TYPE !== "ios") && BROWSER_TYPE !== "safari mac" && BROWSER_TYPE !== "Microsoft Edge" && BROWSER_TYPE !== "Mozilla Firefox" && BROWSER_TYPE !== "Unknown browser") {
    return <UnsupportedBrowser />
  }
  return (
    <AadharPopupContextProvider>
      <Container className="main-container">
        <GlobalData.Provider value={{ formData, setFormData }}>
          <Routing isLive={process.env.REACT_APP_ISLIVE} productionUrl={process.env.REACT_APP_API} isOffline={isOffline} setisOffline={setisOffline} />
          {/* <ToastContainer position="top-center" /> */}
        </GlobalData.Provider>
      </Container>
    </AadharPopupContextProvider>
  );
}

export default App;
