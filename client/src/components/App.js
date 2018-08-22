import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Events from "./Events";

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>DC Events Front End</h1>
        <p>+Events</p>
        <p>+Venues</p>
        <div className="body">
          <Switch>
            <Route
              path="/"
              render={props => {
                return <Events />;
              }}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
