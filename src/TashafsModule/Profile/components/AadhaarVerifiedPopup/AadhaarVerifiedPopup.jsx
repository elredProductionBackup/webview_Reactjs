import { VerifiedImage ,  useLocation , useEffect, useState , clearToasts , Spinner } from "./Imports_AadhaarVerifiedPopup";

const AadhaarVerifiedPopup = ({ showVerifiedPopup, setShowVerifiedPopup }) => {
    const location = useLocation()
    const [aadhaarImgLoading, setAadhaarImgLoading] = useState(true);

    useEffect(() => {
        setShowVerifiedPopup(false);
    }, [location]) //eslint-disable-line 

    useEffect(() => {
        if (showVerifiedPopup) clearToasts();
    }, [showVerifiedPopup]);

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setAadhaarImgLoading(false);
        };
        img.src = VerifiedImage;
    }, [showVerifiedPopup]); //eslint-disable-line

    return (
        <>
            <div className="container-aadhar-popup">
                <div className={showVerifiedPopup ? "aadhar-verified-container aadhar-verified-container-show" 
                    : "aadhar-verified-container aadhar-verified-container-hide"}>
                    <div className={aadhaarImgLoading ? "aadhaar-verified-popup-loader-container" : "d-none"}>
                        <Spinner variant="danger" className="aadhaar-verified-popup-img-loader" />
                    </div>
                    <img src={VerifiedImage} alt="" className={aadhaarImgLoading ? "d-none" : "aadhaar-verified-popup-img"} 
                        loading="lazy" />
                    <div className="aadhaar-verified-text">Aadhaar verified</div>
                    <div className="blue-tick-symbol-text">Blue Tick symbolizes that this profile is Aadhaar verified</div>
                    <button onClick={() => setShowVerifiedPopup(false)} className="aadhaar-verified-ok-btn"><span className="btn-ok-text">Ok</span></button>
                </div>
                <div onClick={() => setShowVerifiedPopup(false)} className={showVerifiedPopup ? "aadhar-popup-overlay" : "aadhar-popup-overlay-hidden"}></div>
            </div>
        </>
    )
}

export default AadhaarVerifiedPopup;