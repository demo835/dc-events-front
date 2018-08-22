import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import Events from "./Events";
import NavBar from "./NavBar";
import AddEvent from "./AddEvent";
class App extends Component {
  constructor() {
    super();

    this.state = {
      events: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3001/events").then(data => {
      console.log("get event data from axios...");
      console.log(data.data);
      this.setState({ events: data.data });
      console.log("inside componentdidmount App, events is");
      console.log(this.state.events);
    });
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="body">
          <Switch>
            <AddEvent />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
