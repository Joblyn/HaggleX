import React from "react";
import { Form } from "react-bootstrap";
import "./style.css";
import CarouselContainer from "../../Components/Carousel";

export default function SignUp() {
  return (
    <div id="signup" className="signup_container d-flex flex-row">
      <div className="left text-center d-flex flex-column justify-content-center align-items-center">
        <CarouselContainer />
      </div>
      <div className="form_container">
        <img src="" alt="" />
        <Form id="signup"></Form>
        <img src="" alt="" />
      </div>
    </div>
  );
}
