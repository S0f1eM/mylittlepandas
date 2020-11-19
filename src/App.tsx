import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/lib/integration/react";
import PandasListPage from "./containers/PandasListPage";
import PandaDetailsPage from "./containers/PandaDetailsPage";
import CreatePandaPage from "./containers/CreatePandaPage";
import history from "./redux/services/history";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ConnectedRouter history={history}>
            <Switch>
              <Route exact path="/" component={PandasListPage} />
              <Route exact path="/pandas" component={PandasListPage} />
              <Route exact path="/pandas/:id" component={PandaDetailsPage} />
              <Route exact path="/createPanda" component={CreatePandaPage} />
            </Switch>
          </ConnectedRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
