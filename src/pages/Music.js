import React from "react";
import Header from "../components/Header";
import { SongList } from "../components/List";
import { Menue } from "../components/Menue";

export const Music = () => {
  const name = localStorage.getItem("Name");
  return (
    <>
      <Header>
        <div>
          <h1>der sound</h1>
          <h2>für {name}´s zuhause.</h2>
        </div>
      </Header>
      <SongList />
      <Menue path="/matchday" />
    </>
  );
};
