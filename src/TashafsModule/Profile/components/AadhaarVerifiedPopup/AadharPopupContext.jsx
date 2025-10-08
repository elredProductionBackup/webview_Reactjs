import { createContext, useState } from 'react';

export const AadharPopupContext = createContext();

export const AadharPopupContextProvider = ({ children }) => {
    const [showVerifiedPopup, setShowVerifiedPopup] = useState(false);
 
    return (
        <AadharPopupContext.Provider value={{ showVerifiedPopup, setShowVerifiedPopup }}>
            {children}
        </AadharPopupContext.Provider>
    );
};