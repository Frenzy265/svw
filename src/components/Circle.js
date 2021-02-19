import React from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";

const Circle = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--tertiary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  box-shadow: var(--defaul-box-shadow);
  outline: none;

  img {
    height: 30px;
  }
`;

export const PlayPauseCircle = ({ icon, onClick }) => {
  return (
    <Circle onClick={onClick}>
      <img src={icon} alt="Icon" />
    </Circle>
  );
};

PlayPauseCircle.propTypes = {
  icon: PropTypes.any.isRequired,
  onClick: PropTypes.func,
};
