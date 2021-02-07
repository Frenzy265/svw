import React from "react";
import { ListButton } from "./Button";

export default {
  title: "Example/ListButton",
  parameters: { layout: "centered" },
  component: ListButton,
};

const Template = (args) => <ListButton {...args} />;

export const Song = Template.bind({});
Song.args = {
  title: "grün-weisse liebe",
};
