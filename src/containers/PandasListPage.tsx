import React from "react";
import usePandas from "../hooks/usePandas";
import PandasList from "../components/PandasList";
import { Spinner } from "reactstrap";
import { loadPandasRequest } from "../redux/pandas/pandasSlice";
import { useDispatch } from "react-redux";
import { errorMessageProps } from "../types";

//display error on page
const ErrorMessage = ({ error, onRetry }: errorMessageProps) => {
  return (
    <>
      <p>{error.message}</p>
      <button color="secondary" onClick={onRetry}>
        Retry
      </button>
    </>
  );
};

const PandasListPage = () => {
  const { pandas, fetching, error } = usePandas();
  const dispatch = useDispatch();

  //call api again
  const retry = () => {
    dispatch(loadPandasRequest());
  };
  return (
    <>
      <div className="container">
        <h1 className="header-title">My Little Pandas</h1>
        <button onClick={retry}>Retry</button>
        {fetching && <Spinner />}
        {error && <ErrorMessage error={error} onRetry={retry} />}
        {pandas && (
          <>
            <PandasList pandas={pandas} />
          </>
        )}
      </div>
    </>
  );
};

export default PandasListPage;
