import React from "react";
import { Form, FormGroup, Input, Label, Button, Jumbotron } from "reactstrap";
import { useHistory, withRouter } from "react-router-dom";

const createPandaForm = () => {
  return (
    <>
      <Jumbotron>
        <h1>My Little Pandas</h1>
      </Jumbotron>
      <div className="container">
        <Form>
          <FormGroup controlId="formBasicEmail">
            <Label>Name</Label>
            <Input value="name" placeholder="Enter the name" />
            <Label>Interests</Label>
            <Input value="interests" placeholder="Enter the interest" />
            <Label>Image</Label>
            <Input
              id="custom-file"
              label="Download the image"
              data-browse="Browse"
              custom
            />
            <Button className="primary">Valider</Button>
            <Button className="secondary">Annuler</Button>
          </FormGroup>
        </Form>
      </div>
    </>
  );
};

export default withRouter(createPandaForm);
