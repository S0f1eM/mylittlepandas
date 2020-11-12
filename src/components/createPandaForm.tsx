import React from "react";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Jumbotron,
  Card,
} from "reactstrap";

const createPandaForm = () => {
  return (
    <>
      <Jumbotron
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#00c975",
          color: "#fff",
          padding: "3em 4.5em",
        }}
      >
        <h1>My Little Pandas</h1>
      </Jumbotron>

      <Card style={{ margin: "2em 8em" }}>
        <Form style={{ padding: "1em 8em", textAlign: "left" }}>
          <h2 style={{ color: "green", padding: "0.5em" }}>Add a panda</h2>
          <hr />
          <FormGroup>
            <Label>Panda's name :</Label>
            <Input type="name" placeholder="Enter the panda's name" />
          </FormGroup>
          <FormGroup>
            <Label>Panda's Interests :</Label>
            <Input type="interests" placeholder="Enter the panda's interests" />
          </FormGroup>
          <FormGroup>
            <label for="pictureFile">Panda's picture :</label>
            <Input
              style={{ width: "auto" }}
              type="file"
              id="custom-file"
              label="Download the image"
              data-browse="Browse"
              custom
            />
          </FormGroup>
          <hr />
          <FormGroup
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <Button color="primary">Confirm</Button>
            <Button color="secondary">Reset</Button>
          </FormGroup>
        </Form>
      </Card>
    </>
  );
};

export default createPandaForm;
