import React from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";

const Circle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--tertiary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  box-shadow: var(--defaul-box-shadow);

  img {
    height: 30px;
  }
`;

const PlayerCircle = ({ icon }) => {
  return (
    <Circle>
      <img src={icon} alt="Icon" />
    </Circle>
  );
};

export default PlayerCircle;

PlayerCircle.propTypes = {
  icon: PropTypes.any.isRequired,
};
