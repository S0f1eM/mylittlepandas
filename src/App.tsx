import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter as Router } from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/lib/integration/react";
import PandasListPage from "./containers/PandasListPage";
import PandaDetailsPage from "./containers/PandaDetailsPage";
import CreatePandaPage from "./containers/CreatePandaPage";
import history from "./redux/services/history";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router history={history}>
            <Switch>
              <Route exact path="/" component={PandasListPage} />
              <Route exact path="/pandas" component={PandasListPage} />
              <Route exact path="/pandas/:id" component={PandaDetailsPage} />
              <Route exact path="/createPanda" component={CreatePandaPage} />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
