import React from "react";
import SignUp from "../../Pages/signup";
import {
  Container,
  Header,
  Group,
  Label,
  Input,
  Error,
  Dropdown,
  Text,
  Button,
  Link
} from "./style";

export default function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
Form.Header = function FormHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

Form.Group = function FormGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Form.Label = function FormLabel({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>;
};
Form.Input = function FormInput({ ...restProps }) {
  return <Input {...restProps} />;
};
Form.Error = function FormError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
};
Form.Dropdown = function FormDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>
    <select>
      <option>
        
      </option>
    </select>
  </Dropdown>;
};
Form.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Form.Button = function FormButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
Form.Link = function FormLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};
