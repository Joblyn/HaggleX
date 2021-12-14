import React, { useState } from "react";
import Form from "../../Components/Form";
import "./style.css";
import CarouselContainer from "../../Components/Carousel";
import { gql, useMutation } from "@apollo/client";

const SIGNUP_MUTATION = gql`
    mutation register( 
      $email: String!
      $username: String!
      $password: String!
      $phonenumber: String!
      $phoneNumberDetails: PhoneNumberDetailsInput  
      
        $phonenumber: String!
        $callingCode: String!
        $flag: String!
      
      $country: String!
      $currency: String! 
     ) {
      register(
        email: $email
        username: $username
        password: $password
        phonenumber: $phonenumber
        phoneNumberDetails: $phoneNumberDetails
        country: $country
        currency: $currency
        ) { 
          user
          token
        }}
  `;
export default function SignUp() {
  const [control, setControl] = useState({
    phoneNumberDetails: "+234",
    country: "Nigeria",
    currency: "NGN"
  });

  const handleChange = ({ target }) =>
    setControl({
      ...control,
      [target.name]: target.value
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(control);
    register({
      variables: {
        email: control.email,
        username: control.username,
        password: control.password,
        phonenumber: control.phonenumber,
        phoneNumberDetails: control.phoneNumberDetails,
        country: control.country,
        currency: control.currency
      }
    });
  };

  const [register, newUser] = useMutation(SIGNUP_MUTATION);
  if (newUser.loading) {
    console.log("loading", newUser.loading);
  }
  if (newUser.error) {
    console.log("error", newUser.error);
  }
  if (newUser.data) {
    console.log("data", newUser.data);
  }

  return (
    <div id="signup" className="signup_container d-flex flex-row">
      <div className="left text-center d-flex flex-column justify-content-center align-items-center">
        <CarouselContainer />
      </div>
      <div className="form_container d-flex justify-content-center align-items-center">
        <div className="bg_top"></div>
        <Form id="sign_up" onSubmit={handleSubmit}>
          <Form.Header>Create new account</Form.Header>
          <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Input
              onChange={handleChange}
              type="email"
              name="email"
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
          <Form.Group>
            <Form.Label>Create username</Form.Label>
            <Form.Input
              onChange={handleChange}
              type="text"
              name="username"
              placeholder="Chrissteve"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Enter your phone number</Form.Label>
            <Form.Dropdown handleChange={handleChange} />
          </Form.Group>

          <div className="py-3">
            <Form.Link>Got referral code?</Form.Link>
          </div>
          <div className="mt-2">
            <Form.Button type="submit" form="sign_up">
              Sign Up
            </Form.Button>
            <Form.Text className="text-center mb-5">
              Have an account?
              <Form.Link to="/sign_in" className="mx-1">
                Sign in to explore
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
