import React from "react";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import App from "./App"
import FeatureList from "./FeatureList"
import Auth from "./auth"


class Routes extends React.PureComponent {

  render() {
    return (
      <div>
        {Auth.isAuthenticated() ? (
          <Switch>
            <Route path="/main" component={App}/>

            <Route>
              <Redirect to="/main"/>
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path="/login" component={FeatureList}/>

            <Route>
              <Redirect to="/login"/>
            </Route>
          </Switch>
        )}
      </div>
    );
  }
}

export default withRouter(Routes);
