import React from "react";
import createPandaForm from "./CreatePandaForm";
import { Meta } from "@storybook/react";

export default {
  title: "createPandaForm",
  Component: createPandaForm,
} as Meta;

export const createPanda = () => {
  return <div></div>;
};
createPanda.storyName = "create form";
