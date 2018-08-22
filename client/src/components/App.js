import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Events from "./Events";
import AddEvent from "./AddEvent";
import axios from "axios";
class App extends Component {
  constructor() {
    super();

    this.state = {
      events: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3001/events").then(data => {
      console.log("get event data is from axios...");
      console.log(data.data[0]);
      this.setState({ events: data.data[0] });
      console.log(this.state.events);
    });
  }
  render() {
    return (
      <div>
        <h1>DC Events Front End</h1>
        <Link to="/add-event">
          <p>+Events</p>
        </Link>
        <Link to="/add-venue">
          <p>+Venues</p>
        </Link>
        <main>
          <Switch>
            <Route
              path="/"
              render={props => {
                return <Events events={this.state.events} />;
              }}
            />
            <Route
              path="/events"
              render={props => {
                return <Events events={this.state.events} />;
              }}
            />
            <Route path="/add-event" component={AddEvent} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
