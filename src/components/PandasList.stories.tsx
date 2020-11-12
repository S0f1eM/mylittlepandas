import React from "react";
import { Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import PandasList from "./PandasList";
import pandas from "../pandas";

export default {
  title: "PandasList",
  Component: PandasList,
} as Meta;

export const withPandas = () => {
  return (
    <div>
      <PandasList pandas={pandas} onSelect={action("on press")} />
    </div>
  );
};
