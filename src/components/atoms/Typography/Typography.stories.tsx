import { ComponentMeta, ComponentStory } from "@storybook/react"; 
import React from "react";
import Typography from "./Typography";

export default {
  title: "Atoms/Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args}></Typography>
)

export const Default = Template.bind({});
Default.args = {
  fontWeight: 700,
}
const { args: defaultArgs} = Default;
export const Title = Template.bind({});
Title.args = {
  ...defaultArgs,
  children: "Title h1"
}
