import React from "react";
import { Details } from "../types";
import { Media, Badge, Button, Card, CardTitle, CardText } from "reactstrap";

const PandaDetails: React.FC<Details> = (props: Details) => {
  const { onClose } = props;
  return (
    <>
      <div className="container">
        <Card
          style={{
            margin: "2em",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: "1em",
          }}
        >
          <Media
            center
            src={props.panda.image}
            alt="image"
            className="picture"
            style={{ width: "300px", height: "auto", padding: "0.2em" }}
          />
          <Media body style={{ textAlign: "center", padding: "0 5em" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button
                close
                aria-label="Cancel"
                onClick={onClose}
                style={{ marginTop: "-4em", marginRight: "-3em" }}
              >
                x
              </Button>
            </div>
            <CardTitle tag="h4" style={{ color: "green" }}>
              {props.panda.name}
            </CardTitle>
            <hr />
            <CardText>
              {props.panda.interests &&
                props.panda.interests.map((interest) => (
                  <Badge
                    style={{ fontSize: "1em", margin: "0 0.5em 1em" }}
                    color="info"
                    className="space-between"
                    key={interest + props.panda.key}
                  >
                    {interest}
                  </Badge>
                ))}
            </CardText>
          </Media>
          <hr />
        </Card>
      </div>
    </>
  );
};

export default PandaDetails;
