import React from "react";
import PandaDetails from "./PandaDetails";
import { Meta } from "@storybook/react/";
import { action } from "@storybook/addon-actions";
import { Panda } from "../types";

export default {
  title: "PandaDetails",
  Component: PandaDetails,
} as Meta;

export const detailsCardNoInterest = () => {
  const panda: Panda = {
    key: "13",
    name: "Pam pam",
    image: "https://media.giphy.com/media/EatwJZRUIv41G/giphy-downsized.gif",
    interests: [],
  };
  return (
    <div>
      <PandaDetails panda={panda} onClose={action("on close")} />
    </div>
  );
};

detailsCardNoInterest.storyName = "carte du panda sans intérêt";

export const detailsCardWithInterest = () => {
  const panda: Panda = {
    key: "11",
    name: "Yummy",
    image: "https://media.giphy.com/media/EatwJZRUIv41G/giphy-downsized.gif",
    interests: ["chest", "ping pong"],
  };
  return (
    <div>
      <PandaDetails panda={panda} onClose={action("on close")} />
    </div>
  );
};

detailsCardWithInterest.storyName = "carte du panda avec intérêts";
