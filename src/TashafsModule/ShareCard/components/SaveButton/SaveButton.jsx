import React, { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import './savebutton.scss'
import { isIOS, isEdge } from 'react-device-detect';
import toast from "react-simple-toasts";
const SaveButton = ({ userDetail, cardButton, secondButtonAction, privateContact, setPrivateContactToast }) => {
  const linkRef = useRef(null);
  const [toaster, setToaster] = useState(true);
  const cardSaved = () => {
    linkRef.current.click();
    const userAgent = navigator.userAgent;
  
    if (isIOS && isEdge) {
      const isEdgeOniPhone = userAgent.includes('iPhone');
      if (isEdgeOniPhone) {
        if (toaster === true) {
          toast("Your vCard will be downloaded in sometime. Please check your Downloads folder to save the Contact.", 3000);
          setToaster(false);
          setTimeout(() => {
            setToaster(true);
          }, 3000);
        }
      }
    }
  }

  return (
    <div className={cardButton === 'miniCard' ? "save_button_mini" : "save_button no-cursor"}>
      <Button variant="outline" onClick={privateContact ? () => setPrivateContactToast(true) : cardSaved}>Save card</Button>
      <a ref={linkRef} href={userDetail?.vCard} style={{ display: 'none' }}></a>

      <Button variant="outline" onClick={secondButtonAction} className="card-view-profile-btn">
        View profile
      </Button>
    </div>
  );
};

export default SaveButton;
