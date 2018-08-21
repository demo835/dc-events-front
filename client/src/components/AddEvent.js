import React, { Component } from "react";
class AddEvent extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      img: "",
      description: "",
      food: "",
      date: "",
      cost: "",
      venue: ""
    };
  }

  render() {
    return (
      <div>
        <h1>Page to Add Events</h1>
      </div>
    );
  }
}

export default AddEvent;
