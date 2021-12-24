import React from "react";
import { Row, Toast } from "react-bootstrap";
// import ToastContainer from 'react-bootstrap/ToastContainer';
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { MdErrorOutline } from "react-icons/md";

import { VscChromeClose } from "react-icons/vsc";
import { Redirect } from "react-router-dom";

const CustomToastContainer = ({
  showToast,
  setShowToast,
  type = "success",
  message
}) => {
  return (
    // <ToastContainer position="bottom-center">
    <>
      <Toast
        position="bottom-center"
        show={showToast}
        onClose={() => setShowToast(false)}
        delay={3000}
        autohide
        className={`${"text-uppercase text-white p-3"}`}
        bg={type === "success" ? "success" : "danger"}
        animation
      >
        <Toast.Body>
          <Row>
            {type === "success" ? (
              <IoCheckmarkCircleOutline />
            ) : (
              <MdErrorOutline />
            )}
            {message}
            <VscChromeClose
              onClick={() => setShowToast(false)}
              className="ml-auto"
            />
          </Row>
        </Toast.Body>
      </Toast>
    </>
    // </ToastContainer>
  );
};

export default CustomToastContainer;
