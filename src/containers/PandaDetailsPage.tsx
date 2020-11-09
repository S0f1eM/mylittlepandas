import React from "react";
import PandaDetails from "../components/PandaDetails";
import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";

import { pandasSlice } from "../redux/pandas/pandasSlice";
import { findPanda } from "../redux/pandas/selectors";

//To use a component injected with withRouter props, import and use RouteComponentProps

const PandaDetailsPage = () => {
  const history = useHistory();
  const goBack = () => history.goBack();

  return (
    <div className="container">
      <PandaDetails panda={panda} onClose={goBack} />
    </div>
  );
};

export default withRouter(PandaDetailsPage);
