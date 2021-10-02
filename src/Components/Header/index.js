import React, { useState } from "react";
import {
  Container,
  Brand,
  Group,
  Icon,
  Profile,
  Photo,
  Name,
  DropdownIcon,
  Nav,
  NavItem,
  Ul
} from "./style";
import { useHistory } from 'react-router-dom';
import { ReactComponent as Dropdown } from "../../Assets/Icons/Polygon18.svg";
import { ReactComponent as Logo } from "../../Assets/Icons/logo.svg";
import { ReactComponent as Notification } from "../../Assets/Icons/notification.svg";

export default function Header({ sideNav, setSideNav, ...props }) {
  const [showNav, setShowNav] = useState(false);
  const history = useHistory();
  return (
    <Container className="d-flex flex-row justify-content-between align-items-center py-2 px-4 px-md-5" {...props}>
      <Brand className="d-flex flex-row justify-content-center align-items-center" onClick={() => setSideNav(true)}>
        <span className="logo">
          <Logo className="logo_icon" />
        </span>
        <span className="name">HaggleX</span>
      </Brand>
      <Group className="d-flex flex-row align-items-center px-md-5 px-sm-3">
        <Icon className="px-md-5 px-3">
          <Notification className="notif_icon" />
        </Icon>
        <Profile
          className="d-flex flex-row justify-content-center align-items-center"
          onClick={() => setShowNav(!showNav)}
        >
          <Photo className="">WO</Photo>
          <Name className="mb-0 px-2">Wills Omaer</Name>
          <DropdownIcon>
            <Dropdown />
          </DropdownIcon>
          <Nav className="" showNav={showNav}>
            <Ul className="p-0">
              <NavItem>
                <div></div>Settings
              </NavItem>
              <NavItem onClick={() => history.push("/")}>
                <div></div> Sign Out
              </NavItem>
            </Ul>
          </Nav>
        </Profile>
      </Group>
    </Container>
  );
}
