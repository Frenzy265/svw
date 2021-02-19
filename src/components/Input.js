import { useState } from "react";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";
import IconArrow from "../assets/icon-arrow-circle.svg";

const Form = styled.form`
  width: 270px;
  height: 70px;
  background: var(--primary-color);
  border: none;
  padding-left: 10px;
  outline: none;
  margin-top: 90px;
  display: flex;
`;

const Input = styled.input`
  width: 200px;
  height: 70px;
  background: var(--primary-color);
  color: var(--tertiary-color);
  font-weight: bold;
  border: none;
  padding-left: 15px;
  outline: none;
  text-transform: uppercase;
  align-items: center;

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
  const history = useHistory();

  const handleSubmitName = (event) => {
    event.preventDefault();
    localStorage.setItem("Name", name);
    history.push("/music");
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
        <Button type="submit">
          <img src={IconArrow} alt="Icon arrow" />
        </Button>
      </Form>
    </>
  );
};
