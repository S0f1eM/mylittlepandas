import { History } from "history";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Card } from "reactstrap";
import CreatePandaForm from "../components/CreatePandaForm";
import Header from "../components/Header";
import { createPandaRequest } from "../redux/pandas/pandasSlice";
import { dataFormValues } from "../types";

const CreatePandaPage = () => {
  const dispatch = useDispatch();
  const history: History<any> = useHistory();

  const onCancel = useCallback(() => {
    history.replace("/");
  }, [history]);

  const handleSubmit = useCallback(
    (values: dataFormValues) => {
      //debug
      console.log(`name : ${values.name} ... interests : ${values.interests}`);
      //
      const panda = {
        name: values.name,
        interests: values.interests.split(","),
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
        <CreatePandaForm onSubmit={handleSubmit} onCancel={onCancel} />
      </Card>
    </>
  );
};

export default CreatePandaPage;
