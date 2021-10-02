import React, { useState } from "react";
import {
  Container,
  Text,
  Price,
  ParentHeader,
  SubText,
  Section,
  Header,
  Body,
  Form,
  Group,
  Label,
  Amount,
  Wallet,
  Bottom,
  Interaction,
  Button,
  ButtonGroup
} from "./style";
import BtcIcon from "../../Assets/coins/btc.png";
import SwapIcon from "../../Assets/Icons/swap.png";
import AlertIcon from "../../Assets/Icons/alert.png";

export default function WalletBalance() {
  const [section, setSection] = useState("send");
  const [wallet, setWallet] = useState("external");

  return (
    <Container>
      <div className="p-3">
      <ParentHeader className="d-flex flex-row justify-content-start align-items-start">
        <div>
          <img src={BtcIcon} alt="" />
        </div>
        <div className="d-flex flex-column justify-content-start">
          <Text>Total Wallet Balance</Text>
          <Price>0.0000000 BTC</Price>
          <SubText className="text-center">Available Escrow wallet: 0.0000000BTC</SubText>
        </div>
      </ParentHeader>
      </div>
      <Section>
        <div className="d-flex flex-row header">
          <span
            className={` ${section === "send" ? "current_section" : ""}`}
            onClick={() => setSection("send")}
          >
            Send
          </span>
          <span
            className={` ${section === "deposit" ? "current_section" : ""}`}
            onClick={() => setSection("deposit")}
          >
            deposit
          </span>
          <span
            className={` ${section === "transfer" ? "current_section" : ""}`}
            onClick={() => setSection("transfer")}
          >
            transfer
          </span>
          <span
            className={` ${
              section === "trans.history" ? "current_section" : ""
            }`}
            onClick={() => setSection("trans.history")}
          >
            trans.history
          </span>
        </div>
        <div className="interaction_container">
          <Interaction>
            <Header>
              <span
                className={wallet === "external" ? "current_wallet" : ""}
                onClick={() => setWallet("external")}
              >
                External Wallet
              </span>
              <span
                className={wallet === "haggle" ? "current_wallet" : ""}
                onClick={() => setWallet("haggle")}
              >
                Hagglex wallet
              </span>
            </Header>
            <Body>
              <Form id="wallet">
                <Group className="">
                  <Label>Amount to send</Label>
                  <Amount className="d-flex flex-row">
                    <div className="first">
                      <div>
                        <span className="price">0.00</span>
                        <span className="currency">NGN</span>
                      </div>
                      <div className="">0.00000000BTC</div>
                    </div>
                    <div className="second">
                      <img src={SwapIcon} alt="" />
                    </div>
                  </Amount>
                </Group>
                <Group className="d-flex flex-column">
                  <Label>Send to</Label>
                  <Wallet
                    placeholder="Paste Wallet address"
                    type="text"
                    name="address"
                  />
                  <p className="d-flex justify-content-end">
                    Transaction Fees: 0.000000000BTC
                  </p>
                </Group>
                <ButtonGroup>
                  <Button form="wallet" type="submit" href="#">
                    send btc
                  </Button>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src={AlertIcon} alt="" />
                    <span>Send only BTC to this deposit address</span>
                  </div>
                </ButtonGroup>
              </Form>
              <Bottom className="d-flex justify-content-start py-3 flex-column">
                <div className="li d-flex justify-content-start align-items-center">
                  <span className="point">•</span> Paste a BTC address only
                  through this means.{" "}
                </div>

                <div className="li d-flex justify-content-start align-items-center">
                  <span className="point">•</span>
                  <span>
                    Sending coins or token other than BTC to this address may
                    result in the loss of your tokens
                  </span>
                </div>
              </Bottom>
            </Body>
          </Interaction>
        </div>
      </Section>
    </Container>
  );
}
