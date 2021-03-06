import React from "react";
import routes from "./routes";
import { BrowserRouter as Router, Route } from "react-router-dom";
import withTracker from "./withTracker";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/shards-dashboards.1.1.0.css";

function App() {
  return (
    <Router basename={process.env.REACT_APP_BASENAME || ""}>
      <div>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={withTracker(props => {
                return (
                  <route.layout {...props}>
                    <route.component {...props} />
                  </route.layout>
                );
              })}
            />
          );
        })}
      </div>
    </Router>
  );
}

export default App;
