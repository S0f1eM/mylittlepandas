import { History } from "history";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Card } from "reactstrap";
import CreatePandaForm, { dataFormValues } from "../components/CreatePandaForm";
import Header from "../components/Header";
import { createPandaRequest } from "../redux/pandas/pandasSlice";

const CreatePandaPage = () => {
  const dispatch = useDispatch();
  const history: History<any> = useHistory();

  const onCancel = () => {
    history.push("/");
  };

  const handleSubmit = useCallback(
    (values: dataFormValues) => {
      //const splitInterests = new RegExp(/,\s*/);
      const stringifyInterests = values.interests
        ? values.interests.split(",")
        : [""];
      const panda = {
        name: values.name,
        interests: stringifyInterests,
        image: values.image,
      };
      dispatch(createPandaRequest(panda));
    },
    [dispatch]
  );

  return (
    <>
      <Header />
      <Card style={{ margin: "2em 8em" }}>
        <h2 style={{ color: "#00C975", padding: "0.5em" }}>Add a panda</h2>
        <hr />
        <CreatePandaForm
          onSubmit={(values) => handleSubmit(values)}
          onCancel={onCancel}
        />
      </Card>
    </>
  );
};

export default CreatePandaPage;
