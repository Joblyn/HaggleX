import styled from "styled-components";
import BgImg from "../../Assets/Images/yellowheader.png";
import {
  Form as ReactBootstrapForm,
  Button as BootstrapButton
} from "react-bootstrap";

export const Container = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 13px;
  width: 100%;
`;
export const ParentHeader = styled.div`
  background: url(${BgImg}) no-repeat;
  padding: 1.2rem;
  border-radius: 13px;
  img {
    width: 30px;
    margin-right: 40px;
  }
`;
export const Text = styled.span`
  font-weight: bold;
  font-size: 10px;
  letter-spacing: 0px;
  color: #562121;
`;
export const Price = styled.div`
  font-weight: bold;
  font-size: 30px;
  letter-spacing: 0px;
  color: #562121;
`;
export const SubText = styled.span`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 19px;
  opacity: 0.7;
  padding: 4px;
  font-weight: bold;
  font-size: 9px;
  letter-spacing: 0px;
  color: #562121;
`;
export const Section = styled.div`
  margin-top: 1rem;
  > .header {
    background: #f2f2f2 0% 0% no-repeat padding-box;
    padding: 1rem 1rem 0;
    width: 100%;
    span {
      width: 25%;
      font-size: 14px;
      color: #000000;
      opacity: 0.5;
      text-transform: uppercase;
      text-align: center;
      cursor: pointer;
      &.current_section {
        font-weight: bold;
        opacity: 1;
        border-bottom: 4px solid #ffc175;
      }
    }
  }
  .interaction_container {
    padding: 2rem;
  }
`;
export const Interaction = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 50px #00000021;
  border-radius: 12px;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  > span {
  border-radius: 12px 12px 0px 0px;
    width: 50%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 15px;
    letter-spacing: 0px;
    color: #000000;
    opacity: 0.5;
    text-transform: uppercase;
    border-bottom: 2px solid #f0ebff;
    cursor: pointer;
    &.current_wallet {
      background: #f0ebff 0% 0% no-repeat padding-box;
      opacity: 1;
      font-weight: bold;
      font-size: 15px;
      letter-spacing: 0px;
      color: #2e1963;
      opacity: 1;
    }
  }
`;
export const Body = styled.div`
  padding: 0 2rem;
`;
export const Form = styled(ReactBootstrapForm)`
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #f4f5f9;
`;
export const Group = styled.div`
  margin: 1.2rem 0;
  p {
    text-align: right;
    font-size: 12px;
    letter-spacing: 0px;
    color: #000000;
    opacity: 0.6;
  }
`;
export const Label = styled(Form.Label)`
  text-align: left;
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
`;
export const Amount = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  .first {
     width: 87%;
    > div:nth-of-type(1) {
      border-bottom: 1px solid #f4f5f9;
      padding: 0.5rem 0.2rem;
      > .price {
        font-size: 36px;
        font-weight: bold;
      }
      > .currency {
        font-weight: bold;
        font-size: 12px;
        letter-spacing: 0px;
        color: #000000;
      }
    }
    > div:nth-of-type(2) {
      font-weight: bold;
      font-size: 10px;
      letter-spacing: 0px;
      color: #000000;
      opacity: 0.4;
    }
  }
  .second {
    width: 10%;
    ${'' /* position: relative; */}
    img {
      position: relative;
      width: 100%;
      height: auto;
      bottom: -50px;
    }
  }
`;
export const Wallet = styled(Form.Control)`
  width: 100%;
  height: 83px;
  border: 1px solid #000000 40%;
  border-radius: 10px;
  opacity: 1;
  padding: 1.2rem;
  &:focus,
  :target {
    box-shadow: none;
  }
  ::placeholder {
    font-size: 10px;
    color: #000000;
    opacity: 0.3;
  }
`;
export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  ${'' /* justify-content: center; */}
  align-items: center;
  > div {
    width: fit-content;
    background: #b395ff28 0% 0% no-repeat padding-box;
    border-radius: 20px;
    opacity: 1;
    padding: 3px 12px;
    > img {
      width: 15px;
      height: auto;
    }
    > span {
      font-weight: bold;
      font-size: 10px;
      letter-spacing: 0px;
      color: #2e1963;
      opacity: 1;
    }
  }
`;
export const Bottom = styled.div`
  .li {
    font-size: 10px;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
    .point {
      margin-right: 5px;
    }
  }
`;
export const Button = styled(BootstrapButton)`
  height: 60px;
  background: transparent linear-gradient(90deg, #432b7b 0%, #6a4bbc 100%) 0% 0%
    no-repeat padding-box;
  border-radius: 6px;
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 0px;
  color: #ffffff;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
  border: 0;
`;
