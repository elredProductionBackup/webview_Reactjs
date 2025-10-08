import { Spinner } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import exclaimIcon from "../../../../assets/images/yellowExclaimRound.png";
import "./show-private-contact-toast.scss";

export const showPrivateContactToast = (toast) => {
    const resolveWithSomeData = new Promise((resolve) => setTimeout(() => resolve("promise"), 1000));
    
        toast.promise(
            resolveWithSomeData,
            {
                pending: {
                    render() {
                        return (
                            <div className="private-contact-toast-container">
                                <div className="private-contact-toast-text-container">
                                    <span className="private-contact-main-text private-contact-submitted-main-text-color">
                                       <Skeleton width={72} height={12} baseColor={"#242939"} />
                                    </span>
                                    <span className="private-contact-sub-text">
                                      <Skeleton width={160} height={8} baseColor={"#242939"} />
                                      <Skeleton width={160} height={8} baseColor={"#242939"} />
                                      <Skeleton width={50} height={8} baseColor={"#242939"} />
                                    </span>
                                </div>
                            </div>
                        )
                    },
                    icon: <div className='private-toast-load'><Skeleton circle height={34} width={34} baseColor={"#242939"}
                    /> <Spinner variant="danger" size="sm" className="private-contact-cross-load" />
                    </div>,
    
                },
                success: {
                    render() {
                        return (
                            <div className="private-contact-toast-container">
                                <div className="private-contact-toast-text-container">
                                    <span className="private-contact-main-text private-contact-submitted-main-text-color">
                                        Attention!
                                    </span>
                                    <span className="private-contact-sub-text">
                                        The contact has chosen to keep their phone number and email private. You can't save the contact.
                                    </span>
                                </div>
                            </div>
                        )
                    },
                    icon: <img src={exclaimIcon} 
                        alt="" className="private-contact-toast-icon" />
                },
            }
        )
       }