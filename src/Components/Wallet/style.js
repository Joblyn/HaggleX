import styled from "styled-components";

export const Container = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 10px;
`;
export const Header = styled.div`
  > .title {
    font-weight: bold;
    font-size: 20px;
    letter-spacing: 0px;
    color: #000000;
  }
`;
export const Button = styled.div`
  background: #f9f9f9 0% 0% no-repeat padding-box;
  border-radius: 5px;
  padding: 1px;

  span {
    width: 75px;
    height: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    letter-spacing: 0px;
    color: #000000;
    opacity: 0.5;
    cursor: pointer;
  }
  .active {
    background: #f9f9f9 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 5px;
    font-weight: bold;
    font-size: 20px;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
  }
`;
export const CoinsContainer = styled.div`
  .header {
    border-bottom: 1px solid #f4f5f9;
    text-transform: uppercase;
    > span {
      width: 81px;
      height: 34px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      letter-spacing: 0px;
      color: #000000;
      opacity: 0.5;
      cursor: pointer;
      margin: 0 15px;
    }
    > span.current {
      font-weight: bold;
      font-size: 16px;
      letter-spacing: 0px;
      color: #000000;
      border-bottom: 3px solid #ffc31a;
      opacity: 1;
    }
  }
`;
export const Coin = styled.div`
  width: 100%;
  background: #ffffff;
  cursor: pointer;
  &.current_coin {
    background: #f4f5f9 0% 0% no-repeat padding-box;
  }
  &:hover {
    background: #f4f5f9 0% 0% no-repeat padding-box;
  }
  > .group {
    width: fit-content;
    img {
      width: 50px;
      height: auto;
      margin-right: 10px;
    }
  }
`;
export const Name = styled.span`
  font-size: 22px;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
`;
export const Symbol = styled.span`
  font-size: 14px;
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.5;
  text-transform: uppercase;
`;
export const Amount = styled.span`
  text-align: right;
  font-size: 20px;
  letter-spacing: 0px;
  color: #2e1963;

  > span {
    text-transform: uppercase;
  }
`;
export const Price = styled.span`
  text-align: right;
  font-size: 16px;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
`;
