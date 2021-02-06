import styled from "styled-components/macro";
import PlayCircle from "./Circle";
import PropTypes from "prop-types";

const Button = styled.button`
  height: 70px;
  width: 300px;
  border: none;
  box-shadow: var(--default-box-shadow);
  background: var(--primary-color);
  display: flex;
  align-items: center;
  border-radius: 40px;
  outline: none;

  p {
    color: var(--secondary-color);
    text-transform: uppercase;
    font-size: 16px;
    margin: 0 15px;
    font-weight: bold;
  }
`;

export const ListButton = ({ title, onClick }) => {
  return (
    <Button onClick={onClick}>
      <PlayCircle />
      <p>{title}</p>
    </Button>
  );
};

ListButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
