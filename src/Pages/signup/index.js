import React, { useEffect, useState } from "react";
import Form from "../../Components/Form";
import "./style.css";
import CarouselContainer from "../../Components/Carousel";
import { gql, useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import CustomToastContainer from "../../Components/Toast";

const SIGNUP_MUTATION = gql`
  mutation registerUser(
    $email: String!
    $username: String!
    $password: String!
    $phonenumber: String!
    $referralCode: String
    $country: String!
    $currency: String!
  ) {
    register(
      data: {
        email: $email
        username: $username
        password: $password
        phonenumber: $phonenumber
        country: $country
        currency: $currency
        referralCode: $referralCode
      }
    ) {
      user {
        _id
        username
        profile {
          displayName
          dateOfBirth
        }
        email
        phonenumber
        phoneNumberDetails {
          phoneNumber
          callingCode
          flag
        }
        referralCode
        createdAt
      }
      token
    }
  }
`;
export default function SignUp() {
  const [control, setControl] = useState({
    country: "Nigeria",
    currency: "NGN"
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState();
  const [invalidPassword, setInvalidPassword] = useState();
  const [invalidPhone, setInvalidPhone] = useState();
  const [emptyEmailField, setEmptyEmailField] = useState();
  const [emptyPasswordField, setEmptyPasswordField] = useState();
  const [emptyPhoneField, setEmptyPhoneField] = useState();

  const handleChange = ({ target }) => {
    setControl({
      ...control,
      [target.name]: target.value
    });
    const emailRegex = RegExp(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
    const passwordRegex = RegExp(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/
    );
    const phonenumberRegex = RegExp(/@"^\d{10}$"/);
a
    if (target.name === "email") {
      target.value !== ""
        ? target.value.match(emailRegex)
          ? setInvalidEmail(false)
          : setInvalidEmail(true)
        : setInvalidEmail(false);
      setEmptyEmailField(true);
    }
    if (target.name === "password") {
      target.value !== ""
        ? target.value.match(passwordRegex)
          ? setInvalidPassword(false)
          : setInvalidPassword(true)
        : setEmptyPasswordField(true);
      setInvalidPassword(false);
    }
    if (target.name === "phonenumber") {
      target.value !== ""
        ? target.value.match(phonenumberRegex)
          ? setInvalidPhone(false)
          : setInvalidPhone(true)
        : setEmptyPhoneField(true);
      setInvalidPhone(false);
    }
  };

  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    register({
      variables: {
        email: control.email,
        username: control.username,
        password: control.password,
        phonenumber: control.phonenumber,
        country: control.country,
        currency: control.currency
      }
    });
  };

  const [register, newUser] = useMutation(SIGNUP_MUTATION);
  if (newUser.loading) {
    setLoading(newUser.loading);
  } else {
    setLoading(false);
  }
  if (newUser.error) {
    console.log("error", newUser.error);
    setError(newUser.error.message);
  }
  if (newUser.data) {
    setShowToast(true);
    history.push("/verify");
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
            {/* {(invalidEmail || emptyEmailField) && (
              <Form.Error>
                {(invalidEmail && "Invalid email") ||
                  (emptyEmailField && "Field cannot be empty")}
              </Form.Error>
            )} */}
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="*************"
            />
            {/* {(invalidPassword || emptyPasswordField) && (
              <Form.Error>
                {(invalidPassword &&
                  "Password must be at least 8 characters long, must contain uppercase, must contain symbol.") ||
                  (emptyPasswordField && "Field cannot be empty")}
              </Form.Error>
            )} */}
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
            {(invalidPhone || emptyPhoneField) && (
              <Form.Error>
                {(invalidPhone && "Invalid phonenumber") ||
                  (emptyPhoneField && "Field cannot be empty")}
              </Form.Error>
            )}
          </Form.Group>

          <div className="py-3">
            <Form.Link>Got referral code?</Form.Link>
          </div>
          <div className="mt-2">
            <Form.Button type="submit" form="sign_up" disabled={loading}>
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
      <CustomToastContainer
        showToast={showToast}
        type={error ? "error" : "success"}
        message={error ? error : "Registered Successfully!"}
      />
    </div>
  );
}
