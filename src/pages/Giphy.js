import React from "react";
import Header from "../components/Header";
import { GifList } from "../components/List";
import { Menue } from "../components/Menue";

export const Giphy = () => {
  const name = localStorage.getItem("Name");
  return (
    <>
      <Header>
        <div>
          <h1>emotionen</h1>
          <h2>für {name}´s zuhause.</h2>
        </div>
      </Header>
      <GifList />
      <Menue path="/music" />
    </>
  );
};
