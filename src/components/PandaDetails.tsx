import React from "react";
import { Details } from "../types";
import { Media, Badge } from "reactstrap";

const PandaDetails: React.FC<Details> = (props: Details) => {
  return (
    <>
      <div className="container">
        <Media
          left
          top
          src={props.panda.image}
          alt="image"
          className="picture"
        />
        <Media body className="space-left">
          <h4>Name : {props.panda.name}</h4>
          <p>
            Interests:
            {props.panda.interests &&
              props.panda.interests.map((interest) => (
                <Badge
                  color="info"
                  className="space-between"
                  key={interest + props.panda.key}
                >
                  {interest}
                </Badge>
              ))}
          </p>
        </Media>
        <button className="secondary" onClick={() => props.onClose} />
      </div>
    </>
  );
};

export default PandaDetails;
