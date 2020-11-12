import React from "react";
import PandaDetails from "../components/PandaDetails";
import { withRouter } from "react-router";
import { useHistory, useParams } from "react-router-dom";
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { Panda } from "../types";
import { Jumbotron } from "reactstrap";

const usePanda = (id: string): Panda | undefined => {
  const findPanda = createSelector(
    (state: RootState) => state.pandas.data,
    (pandas) => pandas.find((panda) => panda.key === id)
  );
  const panda: Panda | undefined = useSelector(findPanda);

  return panda;
};

const PandaDetailsPage = () => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();

  const panda = usePanda(id);

  function handleClick() {
    history.push("/");
  }
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
        <h1>My Little Panda</h1>
      </Jumbotron>
      <PandaDetails panda={panda} onClose={handleClick} />
    </>
  );
};

export default withRouter(PandaDetailsPage);
