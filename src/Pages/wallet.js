import React from "react";
import { Link } from "react-router-dom";

export default function Wallet() {
  return (
    <div>
      Wallet
      <p>
        <Link to="/">SignUp</Link>
        <Link to="/sign_in">Sign In</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/wallet">Wallet</Link>
      </p>
    </div>
  );
}
