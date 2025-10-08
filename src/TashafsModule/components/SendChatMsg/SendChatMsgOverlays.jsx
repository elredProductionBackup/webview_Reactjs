import React from "react";
import { Spinner } from "react-bootstrap";

const SendChatMsgOverlays = ({
  deleting,
  overlay,
  closePopup,
  setOverLay,
  setEnable,
  topOverlay,
  setTopOverLay,
  selectedChat,
}) => {
  return (
    <>
      {deleting && (
        <div className="deleteOverlay">
          <div className="spinner_delete">
            <Spinner animation="border" variant="danger" size="sm" />{" "}
            <div className="txt deleting_text">Deleting...</div>
          </div>
        </div>
      )}

      {overlay && (
        <div
          className="over_lay"
          onClick={() => {
            closePopup(setOverLay, setEnable);
            setTopOverLay(false);
            selectedChat("");
          }}
        ></div>
      )}
    </>
  );
};

export default SendChatMsgOverlays;
