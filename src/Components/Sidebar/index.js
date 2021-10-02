import React from "react";
import { NavLink } from "react-router-dom";
// import { Nav } from "react-bootstrap";
import { ReactComponent as Logo } from "../../Assets/Icons/logo.svg";
import navItems from "./items";
import { Container, Border, Icon, Group } from "./style";
import { Brand } from "../Header/style";

export default function SideBar({sideNav, setSideNav, ...props }) {
  return (
    <Container {...props}>
      <nav>
        <Brand
          className="d-flex flex-row align-items-center py-3 px-5"
          style={{ height: "12vh", cursor: "pointer" }}
          onClick={() => setSideNav(false)}
        >
          <span className="logo">
            <Logo className="logo_icon" />
          </span>
          <span className="name">HaggleX</span>
        </Brand>
        <ul>
          {navItems.map((item, id) => (
            <li className="" key={`item_${id+1}`}>
              <NavLink
                to={item.path}
                activeClassName="active"
                className="d-flex flex-row"
              >
                <Border></Border>
                  <Group className="d-flex justify-content-start align-items-center flex-row">
                     <Icon>
                      <item.Icon id={item.name} />
                    </Icon>
                    <span>{item.name}</span>
                  </Group>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
}
