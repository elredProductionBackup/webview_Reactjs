import { Spinner } from "react-bootstrap";
import "./view-profile-picture.scss";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import back from "../../../../assets/images/back_light.svg";
import { ErrorPage, useFetch } from "../../ImportsProfile";
import Skeleton from "react-loading-skeleton";
import { clearToasts } from "react-simple-toasts";

const ViewProfilePicture = ({ productionUrl, isLive }) => {
    const navigate = useNavigate();
    let [searchParams] = useSearchParams();
    const userCode = searchParams.get("userCode");
    const [profileBackLoader, setProfileBackLoader] = useState(true);
    const [profilePicLoader, setProfilePicLoader] = useState(true);


    const {data, error, isLoading: loading } = useFetch(`${ isLive ? productionUrl : "" }/noSessionProfileDetails?userCode=${userCode}`);

    useEffect(() => {
        clearToasts();
    }, []);

    return (
        <>
            {error ? <ErrorPage /> 
                : <div className="profile-picture-view">
                    <div className="profile-pic-header">
                        <Spinner animation="border" variant="dark" size="sm" className={profileBackLoader ? "profile-pic-back-spinner" : "hiding-img-loader "}/>
                        <div className={!profileBackLoader ? 'profile-pic-back showing-img-loader' : "hiding-img-loader "}  onClick={() => navigate(-1)}>
                            <img src={back} alt="" onLoad={() => setProfileBackLoader(false)}/>
                        </div>
                        <div className="profile-pic-title">
                            {data && !profileBackLoader ? data?.result[0]?.firstname + " " + data?.result[0]?.lastname 
                                : <Skeleton width={155} height={12} className="profile-pic-header-skeleton" baseColor="#242939"/>}
                        </div>
                    </div>
                    <div className="profile-picture-container">
                        <Spinner animation="border" variant="danger" size="md" 
                            className={profilePicLoader || loading ? "profile-pic-spinner" : "hiding-img-loader "}/>
                        <img src={data?.result[0]?.dpURL} alt="profile" onLoad={() => setProfilePicLoader(false)} 
                            className={profilePicLoader || loading ? "d-none" : "" } />
                    </div>        
                </div>
            }
        </>
    )
}

export default ViewProfilePicture;