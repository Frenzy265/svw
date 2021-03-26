import styled from "styled-components/macro";
import { GifButton, MusicButton } from "./Button";
import GWLiebe from "../assets/gw-liebe.mp3";
import LGW from "../assets/lebenslang-gw-2019.mp3";
import Nebelhorn from "../assets/Nebelhorn.mp3";
import Torhymne from "../assets/Torhymne.mp3";

const Container = styled.div`
  display: grid;
  grid-gap: 15px;
  place-items: center;
  margin-top: 50px;
`;

export const SongList = () => {
  return (
    <>
      <Container>
        <MusicButton title={"Einlaufmusik"} audiofile={LGW} />
        <MusicButton title={"Nebelhorn"} audiofile={Nebelhorn} />
        <MusicButton title={"Torhymne"} audiofile={Torhymne} />
        <MusicButton title={"grün-weisse liebe"} audiofile={GWLiebe} />
      </Container>
    </>
  );
};

export const GifList = () => {
  return (
    <>
      <Container>
        <GifButton
          title={"TOOOOOR"}
          gifsrc={"https://media.giphy.com/media/5T05xjT4VgkYGpVmOE/giphy.gif"}
        />
        <GifButton
          title={"Hilflos"}
          gifsrc={"https://media.giphy.com/media/2voFDiVpIYhWWS0Pbe/giphy.gif"}
        />
        <GifButton
          title={"Die Krake"}
          gifsrc={"https://media.giphy.com/media/3ohhwAisko1nU3NHa0/giphy.gif"}
        />
        <GifButton
          title={"Aufreger"}
          gifsrc={"https://media.giphy.com/media/mDBOdP8a0ZLmPp2g6B/giphy.gif"}
        />
      </Container>
    </>
  );
};
