import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './DesignationPopup.scss'
import closeBtn from '../../../../../assets/images/close_dark.svg'
import { calcTextLength } from '../../UserDetails/ImportsUserDetail';
import Feedback from '../../../../../components/Feedback/Feedback';
import UserFeedbackPopup from '../../../../components/UserFeedbackPopup/UserFeedbackPopup';
import { calcTextLength2, capitalizeEachWord } from '../../../../../globalFunctions';

function DesignationPopup({ open, setOpen, designations, productionUrl, isLive }) {
    const handleClose = () => setOpen(false);
    const handleShow = () => setOpen(true);
    const [showUserFeedbackPopup, setShowUserFeedbackPopup] = useState(false);

    return (
        <>
            <Offcanvas show={open} onHide={handleClose} placement='bottom' className='designation_popup'>
                <Offcanvas.Header className='popup_header_offcanvas_wrapper'>
                    <div className='popup_header'>
                        <div className='keywords_title'>I can offer</div>
                        <div className='d-flex ' style={{ gap: 14 }}>
                            <div className='d-flex'><Feedback setOpen={setShowUserFeedbackPopup} /></div>
                            <img src={closeBtn} alt="" onClick={handleClose} />
                        </div>
                    </div>
                </Offcanvas.Header>

                <Offcanvas.Body className='designation_popup_body'>
                    <div className="keywords_body">
                        {designations?.map((item, id) => (
                            <span className="popup_chip_designation" key={id} >
                                {capitalizeEachWord(calcTextLength2(45, item))}
                            </span>
                        ))}
                    </div>

                </Offcanvas.Body>
                <UserFeedbackPopup showUserFeedbackPopup={showUserFeedbackPopup} setShowUserFeedbackPopup={setShowUserFeedbackPopup}
                    productionUrl={productionUrl} isLive={isLive} screen={"Profile Keywords - Bottom Popup - Webview"} 
                    headerText="I can offer Popup" />
            </Offcanvas>
        </>
    );
}

export default DesignationPopup;