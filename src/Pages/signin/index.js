import React, { useState } from "react";
import Form from "../../Components/Form";
import "./style.css";
import CarouselContainer from "../../Components/Carousel";

export default function SignIn() {
  const [control, setControl] = useState({});

  const handleChange = ({ target }) =>
    setControl({
      ...control,
      [target.name]: target.value
    });

  return (
    <div id="signup" className="signup_container d-flex flex-row">
      <div className="left text-center d-flex flex-column justify-content-center align-items-center">
        <CarouselContainer />
      </div>
      <div className="form_container d-flex justify-content-center align-items-center">
        <div className="bg_top"></div>
        <Form id="sign_in">
          <Form.Header>Welcome Back</Form.Header>
          <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Input
              onChange={handleChange}
              type="email"
              name="email_address"
              placeholder="example@gmail.com"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="*****************"
            />
          </Form.Group>

          <div className="py-3">
            <Form.Link>Forgot password?</Form.Link>
          </div>
         <div className="mt-2">
            <Form.Button type="submit" form="sign_in" href="/dashboard">
              Sign In
            </Form.Button>
            <Form.Text className="text-center mb-5">
              Have an account?
              <Form.Link to="/" className="mx-1">
                Sign up to get started
              </Form.Link>
            </Form.Text>
          </div>
          <div className="d-flex flex-row justify-content-between align-items-center">
            <Form.Link to="#">Need Help?</Form.Link>
            <div className="d-flex align-items-center">
              <Form.Text className="mx-2" faded>
                Privacy
              </Form.Text>
              <Form.Text className="ml-2" faded>
                Terms & Policy
              </Form.Text>
            </div>
          </div>
        </Form>
        <div className="bg_bottom"></div>
      </div>
    </div>
  );
}
