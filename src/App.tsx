import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { store } from "./redux/store";
//import { store, persistor } from "./redux/store";
//import { PersistGate } from "redux-persist/lib/integration/react";
import PandasListPage from "./containers/PandasListPage";
import PandasDetailsPage from "./containers/PandaDetailsPage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={PandasListPage} />
            <Route exact path="/pandas/:id" component={PandasDetailsPage} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

/*      <PersistGate loading={null} persistor={persistor}></Persisgate>
 */
