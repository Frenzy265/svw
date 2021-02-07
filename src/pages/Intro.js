import React from "react";
import Header from "../components/Header";
import { SongList } from "../components/Songlist";
import { Menue } from "../components/Menue";

export const Intro = () => {
  return (
    <>
      <Header>
        <h1>weserstadion.</h1>
        <h2>für dein zuhause.</h2>
      </Header>
      <SongList />
      <Menue />
    </>
  );
};
