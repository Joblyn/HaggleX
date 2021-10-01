import styled from "styled-components/macro";
import { Button as BootstrapButton, Form } from "react-bootstrap";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled(Form)`
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
  border-radius: 11px;
  padding: 1.5rem;
  position: relative;
  z-index: 1;
  width: 90%;
  max-width: 400px;
  padding: 2.5rem;
`;
export const Header = styled.h3`
  font-size: 25px;
  letter-spacing: 0;
  color: #000;
  opacity: 1;
  font-weight: bold;
  text-align: left;
  margin-bottom: 2rem;
`;
export const Group = styled(Form.Group)`
  padding: 0;
  margin: 0.8rem 0;
`;
export const Label = styled(Form.Label)`
  font-size: 14px;
  letter-spacing: 0;
  text-align: left;
  color: #000;
  margin: 0;
`;
export const Input = styled(Form.Control)`
  font-size: 18px;
  color: #000;
  border: 0;
  border-radius: 0;
  border-bottom: 2px solid #383737;
  padding-left:0;
  padding-right: 0;
  &:focus {
    border: 0;
    border-radius: 0;
    border-bottom: 2px solid #383737;
    box-shadow: none;
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 18px;
    opacity: 0.4;
  }
`;
export const Error = styled.p``;
export const Dropdown = styled.div``;
export const Option = styled.option``;
export const Text = styled.p`
  font-size: 13px;
  letter-spacing: 0px;
  color: #797979;
  opacity: ${({ faded }) => (faded ? 0.94 : 1)};
  margin-bottom: 0;
`;
export const Link = styled(ReactRouterLink)`
  font-size: 14px;
  letter-spacing: 0px;
  color: #2e1963;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: #2e1963;
  }
`;
export const Button = styled(BootstrapButton)`
  width: 100%;
  height: 60px;
  background: transparent linear-gradient(90deg, #432b7b 0%, #6a4bbc 100%) 0% 0%
    no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 12px;
  letter-spacing: 0;
  color: #fff;
  text-transform: uppercase;
  margin-bottom: 1rem;
  border: 0;
`;
