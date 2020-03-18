import React, { Suspense } from "react";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Pages/Home/Home";
import {
  OPEN_HOME,
  OPEN_CREATE_INCIDENT,
  OPEN_LIST_INCIDENT
} from "./Utils/Constants";
import "./App.scss";
import { Router, Switch, Route } from "react-router-dom";
import history from "./Utils/History";
import "./Utils/FirebaseConnect";
import LoadingOverlay from "./Utils/LoadingOverlay";
import "./App.scss";

const CreateIncident = React.lazy(() =>
  import("./Pages/CreateIncident/CreateIncident")
);
const ListIncident = React.lazy(() =>
  import("./Pages/ListIncident/ListIncident")
);

const App: React.FC = () => {
  const Menu = () => {
    return (
      <div>
        <header className="App-header">
          <Navigation />
        </header>
      </div>
    );
  };

  return (
    <div className="App">
      <Router history={history}>
        <Menu />
        <Suspense fallback={<LoadingOverlay />}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path={OPEN_HOME}>
              <Home />
            </Route>

            <Route path={OPEN_CREATE_INCIDENT}>
              <CreateIncident />
            </Route>

            <Route path={OPEN_LIST_INCIDENT}>
              <ListIncident />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
