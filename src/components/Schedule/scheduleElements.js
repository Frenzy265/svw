import styled from "styled-components/macro";
import PropTypes from "prop-types";

export const MatchesContainer = styled.ul`
  list-style: none;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  color: var(--tertiary-color);
`;

export const MatchContainer = styled.li`
  display: grid;
  grid-template-columns: 45% 10% 45%;
  height: 40px;
  width: 100vw;
  background-color: ${(props) =>
    props.highlight ? "var(--secondary-color)" : ""};
`;

export const TeamContainer = styled.div`
  display: flex;
  justify-self: start;
  align-items: center;
  padding: 0 20px;

  :nth-child(1) {
    justify-self: end;
  }

  img {
    width: 30px;
    height: 30px;
    object-fit: contain;
  }

  p {
    color: var(--tertiary-color);
    margin: 0 10px;
  }
`;

export const MatchResult = styled.div`
  justify-self: center;

  p {
    color: var(--secondary-color);
  }
`;

MatchContainer.propTypes = {
  highlight: PropTypes.bool,
};
