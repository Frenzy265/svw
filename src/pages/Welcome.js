import React from "react";
import { Textbox } from "../components/Textbox";
import styled from "styled-components/macro";

const Background = styled.div`
  background-image: url("https://images.sportbuzzer.de/v1/photos/raw/04-05-2013-fussball-1-bundesliga-2012-2013-32-spieltag-sv-werder-bremen-ubersich/large-16-9");
  background-size: cover;
  height: 100vh;
  width: 100vw;
`;

export const Welcome = () => {
  return (
    <>
      <Background>
        <Textbox
          title={"Moin!"}
          subtitle={"Willkommen in deinem weserstadion."}
        />
      </Background>
    </>
  );
};
