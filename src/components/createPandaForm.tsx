import React, { useCallback } from "react";
import { FormGroup, Input, Label, Button, FormText } from "reactstrap";
import { useState } from "react";
import { formProps } from "../types";

const CreatePandaForm = (props: formProps) => {
  const [name, setName] = useState<string>("");
  const [interests, setInterests] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [errors, setErrors] = useState<string[]>([]);

  //button disabled
  const isEnabled = name && interests && image;

  //extra : input validation
  const nameIsValid = (value: string) => {
    const isValidName: any = new RegExp(/^[A-Za-z]+$/);
    return isValidName.test(value) ? "is-valid" : "is-invalid";
    // TO DO : is-invalid ? renderError
  };
  const interestsIsValid = (value: string) => {
    //words less than 20 letters separated by space or comma
    const isValidList: any = new RegExp(/(\b\w{1,20}\b)(,\s*([a-zA-Z]))*/);
    return isValidList.test(value) ? "is-valid" : "is-invalid";
  };
  const imageIsValid = (value: string) => {
    const isValidURL: any = new RegExp(
      /(https?)|(http):(\/\/.*\)|(gph.is).(?:png|jpg|gif))/i
    );
    return isValidURL.test(value) ? "is-valid" : "is-invalid";
  };

  //error to handle : TO DO => validate
  const handleChangeName = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    },
    []
  );

  const handleChangeInterests = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInterests(event.target.value);
    },
    []
  );

  const handleChangeImage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setImage(event.target.value);
    },
    []
  );

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      if (name === "") {
        errors.push("Veuillez saisir un nom");
      }
      if (interests === "") {
        errors.push("Veuillez saisir des centres d'intérêt");
      }
      if (image === "") {
        errors.push("Veuillez saisir une image");
      }
      if (errors.length > 0) {
        setErrors(errors);
      } else {
        setErrors([]);
        props.onSubmit({
          name,
          interests,
          image,
        });
      }
      event.preventDefault();
    },
    [name, interests, image]
  );

  return (
    <>
      <form
        noValidate
        onSubmit={handleSubmit}
        style={{ padding: "1em 3em", textAlign: "left" }}
      >
        {errors && (
          <ul>
            {errors.map((error) => (
              <li style={{ color: "red" }}>{error}</li>
            ))}
          </ul>
        )}
        <FormGroup>
          <Label htmlFor="name">Panda's name :</Label>
          <Input
            type="text"
            name="name"
            onChange={handleChangeName}
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
            onChange={handleChangeInterests}
            value={interests}
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
            onChange={handleChangeImage}
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
          <Button color="secondary" onClick={props.onCancel}>
            Cancel
          </Button>
        </FormGroup>
      </form>
    </>
  );
};

export default CreatePandaForm;
