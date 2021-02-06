import React from "react";
import styled from "styled-components/macro";
import PlayIcon from "../assets/icon-triangle.svg";

const Circle = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: var(--tertiary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  box-shadow: var(--defaul-box-shadow);

  img {
    width: 25px;
    position: relative;
    left: 7%;
  }
`;

const PlayCircle = () => {
  return (
    <Circle>
      <img src={PlayIcon} alt="Icon play" />
    </Circle>
  );
};

export default PlayCircle;
