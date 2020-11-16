import React from "react";
import { connect } from "react-redux";
import { Card } from "reactstrap";
import CreatePandaForm from "../components/CreatePandaForm";
import Header from "../components/Header";

const CreatePandaPage = () => {
  //TO DO : onsubmit & intialvalues au comp createpandaform

  return (
    <>
      <Header />
      <Card style={{ margin: "2em 8em" }}>
        <h2 style={{ color: "#00C975", padding: "0.5em" }}>Add a panda</h2>
        <hr />
        <CreatePandaForm />
      </Card>
    </>
  );
};

export default connect(null)(CreatePandaPage);
