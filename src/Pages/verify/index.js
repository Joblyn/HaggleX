import React from "react";
import ReactCodeInput from "react-verification-code-input";

export default function Verify() {
  const handleChange = () => {

  }

  return (
    <div>
      <ReactCodeInput
        autoFocus
        fields={6}
        disabled={loading}
        type="text"
        onChange={handleChange}
        className="m-auto input-group"
      />
    </div>
  );
}
