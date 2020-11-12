import React from "react";
import { Details } from "../types";
import { Media, Badge, Button, Card, Jumbotron } from "reactstrap";

const PandaDetails: React.FC<Details> = (props: Details) => {
  const { onClose } = props;
  return (
    <>
      <Jumbotron>
        <h1>My Little Panda</h1>
      </Jumbotron>
      <div className="container">
        <Card style={{ margin: "2em" }}>
          <Jumbotron style={{ justifyContent: "space-between" }}>
            <h4>Name : {props.panda.name}</h4>
            <Button className="secondary" onClick={onClose}>
              Close
            </Button>
          </Jumbotron>
          <Media
            left
            top
            src={props.panda.image}
            alt="image"
            className="picture"
          />
          <Media body>
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
        </Card>
      </div>
    </>
  );
};

export default PandaDetails;
