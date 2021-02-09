import { useState } from "react";
import styled from "styled-components/macro";

const Form = styled.form`
  width: 300px;
  height: 50px;
  background: var(--primary-color);
  border: none;
  padding-left: 15px;
  outline: none;
  margin-top: 100px;
`;

const Input = styled.input`
  width: 200px;
  height: 50px;
  background: var(--primary-color);
  color: var(--tertiary-color);
  border: none;
  padding-left: 15px;
  outline: none;

  ::placeholder {
    color: var(--tertiary-color);
  }
`;

const Button = styled.button`
  outline: none;
  border: none;
  background: none;
`;

export const Inputfield = () => {
  const [name, setName] = useState("");

  const handleSubmitName = (event) => {
    event.preventDefault();
    localStorage.setItem("Name", name);
  };

  return (
    <>
      <Form onSubmit={handleSubmitName}>
        <Input
          type="text"
          placeholder="Dein Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <Button type="submit">Los gehts!</Button>
      </Form>
    </>
  );
};
