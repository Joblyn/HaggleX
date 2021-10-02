import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Portfolio from "../../Components/Portfolio";
import Wallet from "../../Components/Wallet";
import WalletBalance from "../../Components/WalletBalance";
import './style.css';

export default function Dashboard() {
  return (
    <Container id="dashboard" fluid>
      <Portfolio />
      <Row className="py-4 m-0">
        <Col sm="12" md="6" className="p-0 m-0 one mb-5">
          <Wallet />
        </Col>
        <Col sm="12" md="6" className="p-0 m-0 mb-3 two">
          <WalletBalance />
        </Col>
      </Row>
    </Container>
  );
}
