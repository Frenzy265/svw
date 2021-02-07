import React from "react";
import { SongList } from "./Songlist";

export default {
  title: "Example/SongList",
  parameters: { layout: "centered" },
  component: SongList,
};

export const songlist = () => <SongList />;
