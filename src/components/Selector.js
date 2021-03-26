import styled from "styled-components/macro";

export const Selector = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;

  button {
    border: none;
    background: none;
    color: var(--secondary-color);
    font-size: 3rem;
  }

  p {
    color: var(--tertiary-color);
    font-weight: bold;
  }
`;
