import React from "react";
import { FormGroup, Input, Label, Button, FormText } from "reactstrap";
import { useState } from "react";

export interface dataFormValues {
  name: string;
  interests: string;
  image: string;
}

export interface formProps {
  onCancel(): void;
  onSubmit(values: any): void;
}

//render error messages
export const RenderError = (errors: Error) => {
  return (
    <div className="invalid-feedback">
      <h5>{errors.name}</h5>
      <p>{errors.message}</p>
    </div>
  );
};

const CreatePandaForm = (props: formProps) => {
  const [name, setName] = useState("");
  const [interests, setInterests] = useState("");
  const [image, setImage] = useState("");
  const { onCancel, onSubmit } = props;
  //button disabled
  const isEnabled = name && interests && image;

  //validation name
  const nameIsValid = (value: string) => {
    const isValidName: any = new RegExp(/^[A-Za-z]+$/);
    return isValidName.test(value) ? "is-valid" : "is-invalid";
  };
  //validation interest list
  const interestsIsValid = (value: string) => {
    //words less than 20 letters separated by space or comma
    const isValidList: any = new RegExp(/(\b\w{1,20}\b)(,\s*([a-zA-Z]))*/);
    return isValidList.test(value) ? "is-valid" : "is-invalid";
  };
  //validation image url
  const imageIsValid = (value: string) => {
    const isValidURL: any = new RegExp(
      /(https?)|(http):(\/\/.*\)|(gph.is).(?:png|jpg|gif))/i
    );
    return isValidURL.test(value) ? "is-valid" : "is-invalid";
  };

  return (
    <>
      {Error && <div className="invalid-feedback">{Error}</div>}
      <form
        onSubmit={onSubmit}
        style={{ padding: "1em 3em", textAlign: "left" }}
      >
        <FormGroup>
          <Label htmlFor="name">Panda's name :</Label>
          <Input
            type="text"
            name="name"
            onChange={(e: any) => setName(e.target.value)}
            value={name}
            className={nameIsValid(name)}
            placeholder="..."
            required
          />
          <FormText color="muted">
            Only letters are allowed for the Panda's name.
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label>Panda's Interests :</Label>
          <Input
            type="text"
            name="interests"
            onChange={(e: any) => setInterests(e.target.value)}
            values={interests}
            className={interestsIsValid(interests)}
            placeholder="..."
            required
          />
          <FormText color="muted">
            If multiple interests, you must separate them with comma.
          </FormText>
        </FormGroup>
        <FormGroup>
          <label htmlFor="pictureFile">Panda's picture :</label>
          <Input
            type="url"
            name="image"
            onChange={(e: any) => setImage(e.target.value)}
            value={image}
            className={imageIsValid(image)}
            placeholder="Enter image link/url..."
            required
          />
          <FormText color="muted">
            You can use gif, jpg or png link/url.
          </FormText>
        </FormGroup>
        <hr />
        <FormGroup style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Button color="primary" type="submit" disabled={!isEnabled}>
            Confirm
          </Button>
          <Button color="secondary" onClick={onCancel}>
            Cancel
          </Button>
        </FormGroup>
      </form>
    </>
  );
};

export default CreatePandaForm;
