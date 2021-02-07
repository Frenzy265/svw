import styled from "styled-components/macro";
import { ListButton } from "./Button";
import GWLiebe from "../assets/gw-liebe.mp3";
import LGW from "../assets/lebenslang-gw-2019.mp3";
import Nebelhorn from "../assets/Nebelhorn.mp3";
import Torhymne from "../assets/Torhymne.mp3";

const Container = styled.div`
  display: grid;
  grid-gap: 15px;
  place-items: center;
`;

export const SongList = () => {
  return (
    <>
      <Container>
        <ListButton title={"grün-weisse liebe"} audiofile={GWLiebe} />
        <ListButton title={"Nebelhorn"} audiofile={Nebelhorn} />
        <ListButton title={"Torjubel"} audiofile={Torhymne} />
        <ListButton title={"Einlaufmusik"} audiofile={LGW} />
      </Container>
    </>
  );
};
