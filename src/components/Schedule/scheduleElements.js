import styled from "styled-components/macro";

export const MatchesContainer = styled.ul`
  list-style: none;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
`;

export const MatchContainer = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: none;
  height: 60px;
  width: 100vw;
  background: none;
`;

export const TeamContainer = styled.div`
  border: none;
  height: 60px;
  width: 50vw;
  background: none;
  display: flex;
  justify-content: space-around;
  align-items: center;

  img {
    width: 25px;
    height: 25px;
    content: fit;
  }

  p {
    color: var(--tertiary-color);
  }
`;
