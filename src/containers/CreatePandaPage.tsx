import { History } from "history";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useHistory, withRouter } from "react-router-dom";
import { Card } from "reactstrap";
import CreatePandaForm, { dataFormValues } from "../components/CreatePandaForm";
import Header from "../components/Header";
import { createPandaRequest } from "../redux/pandas/pandasSlice";

const CreatePandaPage = () => {
  const dispatch = useDispatch();
  const history: History<any> = useHistory();

  const onCancel = useCallback(() => {
    history.replace("/");
  }, [history]);

  //render error messages
  /* function renderError(errors: Error) {
    if (Error()) {
      return (
        <div className="invalid-feedback">
          <h5>{errors.name}</h5>
          <p>{errors.message}</p>
        </div>
      );
    }
  }*/

  const handleSubmit = useCallback(
    (values: dataFormValues) => {
      console.log(`name : ${name} ... interests : ${interests}`);
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
        <CreatePandaForm
          onSubmit={(values: dataFormValues) => handleSubmit(values)}
          onCancel={onCancel}
        />
      </Card>
    </>
  );
};

export default withRouter(CreatePandaPage);
