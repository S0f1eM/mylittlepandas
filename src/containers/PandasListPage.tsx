import React, { useState, useEffect } from "react";
//import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";
import { History } from "history";
import usePandas from "../hooks/usePandas";
import PandasList from "../components/PandasList";
import { Spinner } from "reactstrap";

const PandasListPage = () => {
  const { pandas, fetching, error } = usePandas();
  const [loading, setLoading] = useState(true);
  const history: History = useHistory();

  useEffect(() => {
    setLoading(false);
  }, [pandas]);

  return (
    <>
      <div className="container">
        <h1 className="header-title">My Little Pandas</h1>
        {loading ? (
          <Spinner />
        ) : (
          <PandasList
            pandas={pandas}
            onClick={(key: string) => history.push(`/pandas/${key}`)}
          />
        )}
      </div>
    </>
  );
};

export default PandasListPage;
