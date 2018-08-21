import React, { Component } from "react";
import Events from "./Events";
import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }
  componentDidMount() {
    axios.get("localhost:3001/events").then(data => {
      console.log(data);
    });
  }
  render() {
    return (
      <div>
        <h1>DC Events Front End</h1>
        <p>+Events</p>
        <p>+Venues</p>
        <Events />
      </div>
    );
  }
}

export default App;
