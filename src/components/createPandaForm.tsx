import React from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { validateLocaleAndSetLanguage } from "typescript";
//
export interface dataFormValues {
  name: string;
  interests: string;
  image: string;
}

export interface formProps {
  initialValues: dataFormValues;
}

const CreatePandaForm = () => {
  const [name, setName] = useState("");
  const [interests, setInterests] = useState("");
  const [image, setImage] = useState("");
  const errors: Error = { name: "", message: "" };
  const isEnabled = name && interests && image;

  //back to home page with cancel button
  const history = useHistory();
  const onCancel = () => {
    history.push("/");
  };

  function renderError(error: any) {
    if (error) {
      return (
        <>
          <div>{error.name}</div>
          <div>{error.message}</div>
        </>
      );
    }
  }
  const isValid = (value: string) => {
    if (value) {
      return "is-valid";
    } else {
      return "is-invalid";
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>): void => {
    console.log(`
    Name: ${name}
    Interests: ${interests}
    image: ${image}
  `);
    e.preventDefault();
  };

  /*function renderPreview(e : any) {
    let imgPreview;
    if (image) {
      imgPreview = <img src={URL.createObjectURL(e.target.files[0])} alt="" />;
    }
    return imgPreview;
  }*/

  return (
    <>
      <Form style={{ padding: "1em 3em", textAlign: "left" }}>
        <div className="invalid-feedback">{renderError}</div>
        <FormGroup>
          <Label htmlFor="name">Panda's name :</Label>
          <Input
            type="text"
            name="name"
            onChange={(e: any) => setName(e.target.value)}
            value={name}
            className={isValid(name)}
            placeholder="..."
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Panda's Interests :</Label>
          <Input
            type="text"
            name="interests"
            onChange={(e: any) => setInterests(e.target.value)}
            values={interests}
            className={isValid(interests)}
            placeholder="..."
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="pictureFile">Panda's picture :</label>
          <Input
            type="text"
            name="image"
            onChange={(e: any) => setImage(e.target.value)}
            value={image}
            className={isValid(image)}
            placeholder="Enter image link/url..."
            required
          />
        </FormGroup>
        <hr />
        <FormGroup style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Button
            color="primary"
            type="submit"
            disabled={!isEnabled}
            onClick={handleSubmit}
          >
            Confirm
          </Button>
          <Button color="secondary" onClick={onCancel}>
            Cancel
          </Button>
        </FormGroup>
      </Form>
    </>
  );
};

export default CreatePandaForm;
