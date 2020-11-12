import React from "react";
import PandaItem from "./PandaItem";
import { Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

export default {
  title: "PandaItem",
  Component: PandaItem,
} as Meta;

export const noInterests = () => {
  return (
    <div>
      <PandaItem name="Le panda test" onPress={action("on press")} />
    </div>
  );
};
noInterests.storyName = "Without interests";

export const withInterests = () => {
  return (
    <div>
      <PandaItem
        name="Le panda test"
        interests={["storybook", "testing apps", "drink coffee"]}
        onPress={action("on press")}
      />
    </div>
  );
};

withInterests.storyName = "With interests";
