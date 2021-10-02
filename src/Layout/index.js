import React, { useState } from "react";
import Header from "../Components/Header";
import SideBar from "../Components/Sidebar";
import { Container } from "./style";
// import { useMediaQuery } from "react-responsive";

export default function Layout({ children, ...restProps }) {
  const [sideNav, setSideNav] = useState(false);

  return (
    <Container sideNav={sideNav}>
      <Header setSideNav={setSideNav} />
      <div className="layout">
        <div id="sidebar">
          <SideBar sideNav={sideNav} setSideNav={setSideNav} />
        </div>
        <main id="main" className="p-4">{children}</main>
      </div>
    </Container>
  );
}
