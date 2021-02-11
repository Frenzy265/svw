import styled from "styled-components/macro";
import PlayCircle from "./Circle";
import PropTypes from "prop-types";
import PlayIcon from "../assets/icon-play.svg";
import PauseIcon from "../assets/icon-pause.svg";
import { useEffect, useState } from "react";
import { useRef } from "react";

const Button = styled.button`
  height: 60px;
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
    font-size: 14px;
    margin: 0 15px;
    font-weight: bold;
  }

  :active {
    background-color: var(--secondary-color);
    color: var(--primary-color);
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

export const ListButton = ({ title, audiofile }) => {
  const [playing, setPlaying] = useState(false);
  const audioElement = useRef(new Audio(audiofile));

  const toggle = () => {
    setPlaying(!playing);
  };

  useEffect(() => {
    playing ? audioElement.current.play() : audioElement.current.pause();
  }, [playing, audiofile]);

  audioElement.current.onended = () => {
    setPlaying(false);
  };

  return (
    <Button onClick={toggle}>
      <PlayCircle icon={playing ? PauseIcon : PlayIcon} />
      <p>{title}</p>
    </Button>
  );
};

ListButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  audiofile: PropTypes.any,
};
