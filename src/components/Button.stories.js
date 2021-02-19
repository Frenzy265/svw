import React from "react";
import { MusicButton } from "./Button";

export default {
  title: "Example/MusicButton",
  parameters: { layout: "centered" },
  component: MusicButton,
};

const Template = (args) => <MusicButton {...args} />;

export const Song = Template.bind({});
Song.args = {
  title: "grün-weisse liebe",
};
