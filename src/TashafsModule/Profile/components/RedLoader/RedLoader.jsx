import React from "react";
import { Spinner } from "react-bootstrap";

const RedLoader = () => {
  return (
    <div style={{display:"flex",justifyContent:"center",margin:"2px"}}>
      <Spinner size="sm" animation="border" variant="danger" />
    </div>
  );
};

export default RedLoader;
