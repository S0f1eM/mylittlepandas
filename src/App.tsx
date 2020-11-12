import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/lib/integration/react";
import PandasListPage from "./containers/PandasListPage";
import PandaDetailsPage from "./containers/PandaDetailsPage";
import createPandaForm from "./components/createPandaForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Switch>
              <Route exact path="/" component={PandasListPage} />
              <Route exact path="/pandas" component={PandasListPage} />
              <Route exact path="/pandas/:id" component={PandaDetailsPage} />
              <Route exact path="/create" component={createPandaForm} />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
