import React, { useState } from "react";
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
  Link,
  Select
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
Form.Dropdown = function FormDropdown({ handleChange, children, ...restProps }) {
  const options = Array.from(new Array(3));
  const [dropdown, setDropdown] = useState(false);
  return (
    <Dropdown {...restProps}>
      <Select
        dropdown={dropdown}
        onClick={() => setDropdown(!dropdown)}
      >
        <div className="d-flex logo">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <span style={{ color: "#2e1963", fontSize: "12px" }}>(+234)</span>
        <div className="options_container">
          <ul className="p-0 m-0">
            {options.map((item, id) => (
              <li key={`country-${id+1}`} className="d-flex">
                <div className="d-flex flex-row logo">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <span style={{ color: "#2e1963", fontSize: "12px" }}>
                  (+234)
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Select>
      <Form.Input type="text" name="phonenumber" placeholder="813 000 0000" onChange={handleChange}/>
    </Dropdown>
  );
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
