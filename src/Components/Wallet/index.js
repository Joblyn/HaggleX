import React, { useState } from "react";
import coins from './data';
import {
  Container,
  Header, 
  Button,
  Coin,
  Name,
  Symbol,
  Amount, Price,
  CoinsContainer
} from './style';

export default function Wallet({ ...restProps }) {
  const [listStat, setListStat] = useState("list");
  const [coinsType, setCoinsType] = useState("flex");
  const [currentCoin, setCurrentCoin] = useState("btc");  

  return (
    <Container {...restProps}>
      <Header className="d-flex justify-content-between align-items-start p-4">
        <span className="title">Wallet</span>
        <Button className="d-flex justify-content-center align-items-center">
          <span className={listStat === "list" ? "active" : ""} onClick={() => setListStat("list")}>List</span>
          <span className={listStat === "stats" ? "active" : ""} onClick={() => setListStat("stats")}>Stats</span>
        </Button>
      </Header>
      <CoinsContainer className="">
        <div className="d-flex flex-row align-items-end header px-3">
          <span className={coinsType === "flex" ? "current" : "" } onClick={() => setCoinsType("flex")}>Flex</span>
          <span className={coinsType === "vault" ? "current" : "" } onClick={() => setCoinsType("vault")}>Vault</span>
        </div>
        <div className="coins d-flex flex-column">
          {coins.map((coin, id) => (
            (
              <Coin key={`coin${id+1}`} className={`d-flex flex-row align-items-center justify-content-between py-2 px-4 ${currentCoin === coin.symbol ? 'current_coin': ''}`} onClick={() => setCurrentCoin(coin.symbol)}>
                <div className="d-flex flex-row group align-items-center">
                  <img src={coin.Icon} alt={`_${coin.name}_`}/>
                  <div className="d-flex flex-column justify-content-start align-items-start">
                    <Name>{coin.name}</Name>
                    <Symbol>{coin.symbol}</Symbol>
                  </div>
                </div>
                <div className="d-flex flex-column group justify-content-end align-items-end">
                  <Amount>0.00 <span>{coin.symbol}</span></Amount>
                  <Price>NGN 0.00</Price>
                </div>
              </Coin>
            )
          ))}
        </div>
      </CoinsContainer>
    </Container>
  );
}
