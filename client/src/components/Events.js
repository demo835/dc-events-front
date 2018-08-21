import React, { Component } from "react";
import Event from "./Event";

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }
  render() {
    return (
      <div>
        <Event />
      </div>
    );
  }
}

export default Events;
