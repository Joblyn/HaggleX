import React from "react";
import { Row, Toast } from "react-bootstrap";
// import ToastContainer from "react-bootstrap/ToastContainer";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
// import { MdOutlineErrorOutline } from "react-icons/md";

import { VscChromeClose } from "react-icons/vsc";

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
            {type === "success" ? <IoCheckmarkCircleOutline /> : ""}
            {message}
            <VscChromeClose
              onClick={() => setShowToast(false)}
              className="ml-auto"
            />
          </Row>
        </Toast.Body>
      </Toast>
    </>
    // {/* </ToastContainer> */}
  );
};

export default CustomToastContainer;
