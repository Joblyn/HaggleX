import React, { useState } from "react";
import { Container, Group, Text, Amount, Button } from "./style";

export default function Portfolio() {
  const [currency, setCurrency] = useState("ngn");
  return (
    <Container className="d-flex flex-row justify-content-between align-items-center">
      <Group>
        <Text>My Asset Portfolio</Text>
        <div>
          <Amount>{currency === "ngn" ? "N" : "$"}0.00</Amount>
          <span className="currency">{currency}</span>
        </div>
      </Group>
      <Button>
        <span
          onClick={() => setCurrency("usd")}
          className={currency === "usd" ? "current" : ""}
        >
          USD
        </span>
        <span
          onClick={() => setCurrency("ngn")}
          className={currency === "ngn" ? "current" : ""}
        >
          NGN
        </span>
      </Button>
    </Container>
  );
}
