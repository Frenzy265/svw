import React from "react";
import Header from "./Header";

export default {
  title: "Example/Header",
  parameters: { layout: "centered" },
  component: Header,
};

export const header = () => (
  <Header>
    <h1>weserstadion</h1>
    <h2>für dein zuhause</h2>
  </Header>
);
