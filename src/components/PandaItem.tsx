import React from "react";
import { Item } from "../types";
import { Media, Badge, ListGroupItemHeading } from "reactstrap";

const PandaItem: React.FC<Item> = (props: Item) => {
  return (
    <>
      <Media
        className="panda-item"
        onClick={props.onPress}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1em 0",
        }}
      >
        <ListGroupItemHeading style={{ color: "green" }}>
          {props.name}
        </ListGroupItemHeading>
        <div>
          interests :
          {props.interests &&
            props.interests.map((interest: string) => (
              <Badge
                color="info"
                className="space-between"
                key={interest}
                style={{ fontSize: "1em" }}
              >
                {interest}
              </Badge>
            ))}
        </div>
      </Media>
    </>
  );
};

export default PandaItem;
