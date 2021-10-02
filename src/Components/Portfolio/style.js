import styled from "styled-components";
import BgImg from "../../Assets/Images/yellowheader.png";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  background: url(${BgImg});
  border-radius: 10px;
  padding: 15px 30px;
`;
export const Text = styled.span`
  font-size: 16px;
  font-weight: bold;
`;
export const Group = styled.div`
  color: #562121;
  width: fit-content;
  > div {
    position: relative;
    span.currency {
      font-weight: 400;
      font-size: 15px;
      text-transform: uppercase;
      position: absolute;
      top: 0;
      right: -20px;
    }
  }
`;
export const Amount = styled.div`
  font-weight: bold;
  font-size: 55px;
  letter-spacing: 4px;
`;
export const Button = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #ffffff;
  border-radius: 38px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2px 12px; 

  > span {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 17px;
    letter-spacing: 0px;
    color: #575757;
    opacity: 1;
    width: 100px;
    height: 50px;
    background: #ffffff;
    border-radius: 32px;
    cursor: pointer;
  }
  > span.current {
    text-align: left;
    font-weight: bold;
    font-size: 17px;
    letter-spacing: 0px;
    color: #000000;
    background: #ffc175 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border: 1px solid #ffffff;
  }
`;
