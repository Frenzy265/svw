import styled from "styled-components/macro";
import { PlayPauseCircle } from "./Circle";
import PropTypes from "prop-types";
import PlayIcon from "../assets/icon-play.svg";
import PauseIcon from "../assets/icon-pause.svg";
import { useEffect, useState } from "react";
import { useRef } from "react";
import IconReload from "../assets/icon-reload.svg";

const Button = styled.div`
  height: 60px;
  width: 300px;
  border: none;
  box-shadow: var(--default-box-shadow);
  background: var(--primary-color);
  display: grid;
  grid-template-columns: 1fr 180px 1fr;
  align-items: center;
  border-radius: 40px;
  outline: none;

  p {
    color: var(--secondary-color);
    text-transform: uppercase;
    font-size: 14px;
    margin: 0 15px;
    font-weight: bold;
    text-align: left;
  }

  :active {
    background-color: var(--secondary-color);
    color: var(--primary-color);
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

const ReloadButton = styled.button`
  background: none;
  border: none;
  outline: none;
`;

export const MusicButton = ({ title, audiofile }) => {
  const [playing, setPlaying] = useState(false);
  const audioElement = useRef(new Audio(audiofile));

  const toggle = () => {
    setPlaying(!playing);
  };

  const reload = () => {
    audioElement.current.pause();
    audioElement.current.currentTime = 0;
    setPlaying(false);
  };

  useEffect(() => {
    playing ? audioElement.current.play() : audioElement.current.pause();
  }, [playing, audiofile]);

  audioElement.current.onended = () => {
    setPlaying(false);
  };

  return (
    <>
      <Button>
        <PlayPauseCircle
          onClick={toggle}
          icon={playing ? PauseIcon : PlayIcon}
        />
        <p>{title}</p>
        <ReloadButton onClick={reload}>
          <img src={IconReload} alt="Icon reload" />
        </ReloadButton>
      </Button>
    </>
  );
};

MusicButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  audiofile: PropTypes.any,
};
