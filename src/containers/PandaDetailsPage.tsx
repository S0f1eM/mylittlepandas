import React from "react";
import PandaDetails from "../components/PandaDetails";
import { withRouter } from "react-router";
import { useHistory, useParams } from "react-router-dom";
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { Panda } from "../types";
import Header from "../components/Header";

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
      <Header />
      <PandaDetails panda={panda} onClose={handleClick} />
    </>
  );
};

export default withRouter(PandaDetailsPage);
