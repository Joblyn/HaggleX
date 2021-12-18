import React, { useState } from "react";
import Form from "../../Components/Form";
import "./style.css";
import CarouselContainer from "../../Components/Carousel";
import { gql, useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";

const SIGNIN_MUTATION = gql`
    mutation loginUser(
      $input: String!
      $password: String!
    ) {
      login(
        data: {
        input: $input
        password: $password
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
          emailVerified 
          phoneNumberVerified
          active: Boolean
          createdAt
        }
        token
      }
    }
  `;
export default function SignIn({ isAuthenticated, setIsAuthenticated }) {
  const [control, setControl] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleChange = ({ target }) =>
    setControl({
      ...control,
      [target.name]: target.value
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    register({
      variables: {
        input: control.email,
        password: control.password
      }
    });
  };

  const [register, user] = useMutation(SIGNIN_MUTATION);
  if (user.loading) {
    setLoading(user.loading);
  }
  if (user.error) {
    console.log("error", user.error);
    setError(user.error.message);
  }
  if (user.data) {
    setIsAuthenticated(true);
    localStorage.setItem("user", JSON.stringify(user.data));
    history.push("/");
  }

  return (
    <div id="signup" className="signup_container d-flex flex-row">
      <div className="left text-center d-flex flex-column justify-content-center align-items-center">
        <CarouselContainer />
      </div>
      <div className="form_container d-flex justify-content-center align-items-center">
        <div className="bg_top"></div>
        <Form id="sign_in" onSubmit={handleSubmit}>
          <Form.Header>Welcome Back</Form.Header>
          {error && <Form.Error>{error}</Form.Error>}
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
              placeholder="*************"
            />
          </Form.Group>

          <div className="py-3">
            <Form.Link>Forgot password?</Form.Link>
          </div>
          <div className="mt-2">
            <Form.Button type="submit" form="sign_in" disabled={loading}>
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
