import React from "react";
import PandaDetails from "../components/PandaDetails";
import { withRouter } from "react-router";
import { RouteComponentProps } from "react-router-dom";
import { RootState } from "../redux/store";
import { connect } from "react-redux";
import { Panda } from "../types";
import Header from "../components/Header";
import { findPanda } from "../redux/pandas/selectors";

/*const usePanda = (id: string): Panda | undefined => {
  const findPanda = createSelector(
    (state: RootState) => state.pandas.data,
    (pandas) => pandas.find((panda) => panda.key === id)
  );
  const panda: Panda | undefined = useSelector(findPanda);

  return panda;
};*/

interface PropsFromState {
  panda: Panda | undefined;
}

interface PathParamsType {
  id: string;
}

type Props = RouteComponentProps<PathParamsType> & PropsFromState;

class PandaDetailsPage extends React.Component<Props> {
  /*const history = useHistory();
  const { id } = useParams<{ id: string }>();

  const panda = usePanda(id);
*/
  handleClick = () => {
    this.props.history.push("/");
  };
  render() {
    const { panda } = this.props;
    return (
      <>
        <Header />
        {panda ? (
          <PandaDetails panda={panda} onClose={this.handleClick} />
        ) : null}
      </>
    );
  }
}

const mapStateToProps = (state: RootState, props: Props): PropsFromState => {
  return {
    panda: findPanda(state, props.match!.params.id),
  };
};

export default connect(mapStateToProps)(withRouter(PandaDetailsPage));
