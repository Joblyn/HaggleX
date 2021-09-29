import React from "react";

export default function Layout({ children, ...restProps }) {
  return (
    <div>
      <div>....Header....</div>
      <div>{children}</div>
    </div>
  );
}
