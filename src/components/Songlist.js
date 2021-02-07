import styled from "styled-components/macro";
import { ListButton } from "./Button";

const Container = styled.div`
  display: grid;
  grid-gap: 15px;
  place-items: center;
`;

export const SongList = () => {
  return (
    <>
      <Container>
        <ListButton title={"grün-weisse liebe"} />
        <ListButton title={"Nebelhorn"} />
        <ListButton title={"Torjubel"} />
        <ListButton title={"grün-weisse liebe"} />
        <ListButton title={"grün-weisse liebe"} />
      </Container>
    </>
  );
};
