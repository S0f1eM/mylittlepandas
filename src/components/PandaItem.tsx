import React from "react";
import { Item } from "../types";
import { Media, Badge, ListGroupItemHeading } from "reactstrap";

const PandaItem: React.FC<Item> = (props: Item) => {
  return (
    <>
      <Media className="panda-item" onClick={props.onPress}>
        <ListGroupItemHeading>{props.name}</ListGroupItemHeading>
        <p>
          Interests:
          {props.interests &&
            props.interests.map((interest: string) => (
              <Badge color="info" className="space-between" key={interest}>
                {interest}
              </Badge>
            ))}
        </p>
      </Media>
    </>
  );
};

export default PandaItem;
