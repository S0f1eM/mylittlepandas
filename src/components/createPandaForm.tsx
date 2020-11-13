import React from "react";
import { Form, FormGroup, Input, Label, Button, Card } from "reactstrap";
import { useHistory } from "react-router-dom";
//
//declare le type des props ?
export interface FormData {
  name: string;
  interests: string;
  image: string;
}
//
const CreatePandaForm = () => {
  const history = useHistory();
  //
  const onCancel = () => {
    history.push("/");
  };
  const handleSubmit = () => {
    console.log("submit clic");
  };

  return (
    <>
      <Card style={{ margin: "2em 8em" }}>
        <h2 style={{ color: "#00C975", padding: "0.5em" }}>Add a panda</h2>
        <hr />
        <Form
          onSubmit={handleSubmit}
          style={{ padding: "1em 3em", textAlign: "left" }}
        >
          <FormGroup>
            <Label>Panda's name :</Label>
            <Input type="text" placeholder="Enter the panda's name" />
          </FormGroup>
          <FormGroup>
            <Label>Panda's Interests :</Label>
            <Input type="text" placeholder="Enter the panda's interests" />
          </FormGroup>
          <FormGroup>
            <label htmlFor="pictureFile">Panda's picture :</label>
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
            <Button color="success" onClick={handleSubmit}>
              Confirm
            </Button>
            <Button color="secondary" onClick={onCancel}>
              Cancel
            </Button>
          </FormGroup>
        </Form>
      </Card>
    </>
  );
};

export default CreatePandaForm;
