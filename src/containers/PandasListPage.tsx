import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { withRouter } from "react-router";

import usePandas from "../hooks/usePandas";
import { Alert, Button, Spinner } from "reactstrap";
import { loadPandasRequest } from "../redux/pandas/pandasSlice";
import { errorMessageProps } from "../types";
import PandasList from "../components/PandasList";
import Header from "../components/Header";

//display error on page
const ErrorMessage = ({ error, onRetry }: errorMessageProps) => {
  return (
    <>
      <Alert color="danger">
        <p>Un problème est survenu lors du chargement des données :</p>
        {error}
      </Alert>
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

  const onSelect = (key: string) => history.push("/pandas/" + key);

  return (
    <>
      <Header />
      <div className="container">
        <div className="pandas-list">
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <Button
              style={{ color: "#fff", margin: "0 2em" }}
              color="warning"
              onClick={retry}
            >
              List Request
            </Button>
          </div>
          {fetching && fetching ? <Spinner color="info" /> : ""}
          {error && error ? <ErrorMessage error={error} onRetry={retry} /> : ""}
          <PandasList pandas={pandas} onSelect={onSelect} />
          <Button
            style={{ margin: "2em 0 5em" }}
            color="primary"
            onClick={() => history.push("/createPanda")}
          >
            Add a Panda
          </Button>
        </div>
      </div>
    </>
  );
};

export default withRouter(PandasListPage);
