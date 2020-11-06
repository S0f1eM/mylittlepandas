import React from "react";
import PandasDetails from "../components/PandasDetails";
import { RouteComponentProps, withRouter } from "react-router";

//To use a component injected with withRouter props, import and use RouteComponentProps
type PandasDetailsProps = RouteComponentProps;

const PandasDetailsPage: React.FC<PandasDetailsProps> = ({ history }) => {
  const goBack = () => history.goBack();

  return (
    <>
      <PandasDetails panda={Panda} onClose={goBack} />
    </>
  );
};

export default withRouter(PandasDetailsPage);
