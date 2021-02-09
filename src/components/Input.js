import { useState } from "react";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";

const Form = styled.form`
  width: 300px;
  height: 50px;
  background: var(--primary-color);
  border: none;
  padding-left: 10px;
  outline: none;
  margin-top: 70px;
`;

const Input = styled.input`
  width: 200px;
  height: 50px;
  background: var(--primary-color);
  color: var(--tertiary-color);
  font-weight: bold;
  border: none;
  padding-left: 15px;
  outline: none;

  ::placeholder {
    color: var(--tertiary-color);
    font-weight: lighter;
  }
`;

const Button = styled.button`
  outline: none;
  border: none;
  background: none;
`;

export const Inputfield = () => {
  const [name, setName] = useState("");
  const history = useHistory();

  const handleSubmitName = (event) => {
    event.preventDefault();
    localStorage.setItem("Name", name);
    history.push("/intro");
  };

  return (
    <>
      <Form onSubmit={handleSubmitName}>
        <Input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required={true}
        />
        <Button type="submit">💚 🤍 💚</Button>
      </Form>
    </>
  );
};
