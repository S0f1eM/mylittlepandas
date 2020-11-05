import React from "react";
import { Panda } from "../types";
import { Media, Badge, ListGroupItemHeading } from "reactstrap";

const PandasItem: React.FC<Panda> = (props: Panda) => {
  return (
    <>
      <Media onClick={props.onClick}>
        <ListGroupItemHeading>{props.name}</ListGroupItemHeading>
        <p>
          Interests:
          {props.interests &&
            props.interests.map((interest: React.ReactNode) => (
              <Badge
                color="info"
                className="space-between"
                key={interest + props.key}
              >
                {interest}
              </Badge>
            ))}
        </p>
      </Media>
    </>
  );
};

export default PandasItem;
