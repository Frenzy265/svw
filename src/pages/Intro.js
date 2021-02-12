import React from "react";
import Header from "../components/Header";
import { SongList } from "../components/Songlist";
import { Menue } from "../components/Menue";

export const Intro = () => {
  const name = localStorage.getItem("Name");
  return (
    <>
      <Header>
        <div>
          <h1>weserstadion.</h1>
          <h2>für {name}´s zuhause.</h2>
        </div>
      </Header>
      <SongList />
      <Menue />
    </>
  );
};
