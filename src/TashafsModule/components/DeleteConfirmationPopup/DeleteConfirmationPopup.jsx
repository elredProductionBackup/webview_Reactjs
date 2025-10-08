import React from "react";
import "./DeleteConfirmationPopup.scss";
import { Offcanvas } from "react-bootstrap";
import { cancelDelete } from "../../../globalFunctions";

const DeleteConfirmationPopup = ({deletePopup, setDeletePopup, deleteMessageFinalProps, respId,setTopOverLay, deleteMessageFunction,deleteCancelProps}) => {
 
  return (
    <Offcanvas
      show={deletePopup}
      placement="bottom"
      onHide={()=>cancelDelete(deleteCancelProps,setTopOverLay,setDeletePopup)}
      className='deletePopup'
      style={{height:"226px"}}
    >
      <div className="deletepopup_content">
        <div className="text_content">
            <div className="handle_hr"></div>
            <div className="message_delete">
            Are you sure you want to delete this message?
            </div>
        </div>
        <div className="action_btns">
            <div className="cncl" onClick={()=>cancelDelete(deleteCancelProps,setTopOverLay,setDeletePopup)}>Cancel</div>
            <div className="cnfrm" onClick={()=>{
                setDeletePopup(false)
                deleteMessageFunction(deleteMessageFinalProps, respId,setTopOverLay)
            }}>Delete</div>
        </div>
      </div>
    </Offcanvas>
  );
};

export default DeleteConfirmationPopup;
