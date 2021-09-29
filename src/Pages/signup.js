import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div>
      Sign Up
      <p>
        <Link to="/">SignUp</Link>
        <Link to="/sign_in">Sign In</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/wallet">Wallet</Link>
      </p>
    </div>
  );
}
