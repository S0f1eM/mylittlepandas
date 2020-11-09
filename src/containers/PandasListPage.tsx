import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import usePandas from "../hooks/usePandas";
import PandasList from "../components/PandasList";
import { Alert, Button, Spinner, Jumbotron } from "reactstrap";
import { loadPandasRequest } from "../redux/pandas/pandasSlice";
import { errorMessageProps } from "../types";
import { findPanda } from "../redux/pandas/selectors";

//display error on page
const ErrorMessage = ({ error, onRetry }: errorMessageProps) => {
  return (
    <>
      <Alert color="danger">{error.message}</Alert>
      <p>
        Un problème est survenu lors du chargement des données: {error.message}
      </p>
      <Button color="secondary" onClick={onRetry}>
        Retry
      </Button>
    </>
  );
};

const PandasListPage = () => {
  const { pandas, fetching, error } = usePandas();
  const dispatch = useDispatch();
  const history = useHistory();

  //call api again
  const retry = () => {
    dispatch(loadPandasRequest());
  };

  return (
    <>
      <Jumbotron>
        <h1>My Little Pandas</h1>
        <Button onClick={retry}>Retry</Button>
      </Jumbotron>
      <div className="pandas-list">
        {fetching && fetching ? <Spinner color="info" /> : ""}
        {error && error ? <ErrorMessage error={error} onRetry={retry} /> : ""}
        <PandasList
          pandas={pandas}
          onSelect={(key: string) => history.push("/pandas/" + key)}
        />
      </div>
    </>
  );
};

export default PandasListPage;
