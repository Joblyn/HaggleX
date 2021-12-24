import React from "react";
import ReactCodeInput from "react-verification-code-input";
import Header from "../../Components/Header";
import "./style.css";
import { Button } from "react-bootstrap";

export default function Verify(props) {
  const user_email = props.location.state?.email;
  const handleChange = () => {};

  const verifyCode = () => {};

  return (
    <div>
      <Header />
      <div className="verify_main">
        <div className="verify_input_container">
          <h1>Verify your email</h1>
          <p>
            A code has been to {user_email}. Kindly input the six-digit code to
            complete your registration.
          </p>
          <div className="code_input">
            <ReactCodeInput
              autoFocus
              fields={6}
              // disabled={loading}
              type="text"
              onChange={handleChange}
              className="m-auto input-group"
            />
          </div>

          <Button className="verify_submit" type="submit" onClick={verifyCode}>Verify</Button>

        </div>

      </div>
    </div>
  );
}
