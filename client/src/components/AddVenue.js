import React, { Component } from "react";
import axios from "axios";

class AddVenue extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      location: "",
      capacity: ""
    };
  }

  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = e => {
    console.log("submit clicked");
    let data = JSON.stringify({
      name: this.state.name,
      location: this.state.location,
      capacity: this.state.capacity
    });
    axios.post("http://localhost:3001/venues/new", data, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  };

  render() {
    const { name, location, capacity } = this.state;
    return (
      <div>
        <h1>Add Venue</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label for="name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.onChange}
              placeholder="Name"
            />
          </div>
          <div>
            <label for="location">Location</label>
            <input
              type="text"
              name="location"
              value={location}
              onChange={this.onChange}
              placeholder="Locaion"
            />
          </div>
          <div>
            <label for="name">Capacity</label>
            <input
              type="text"
              name="capacity"
              value={capacity}
              onChange={this.onChange}
              placeholder="Capacity"
            />
          </div>
          <button type="submit">Submit</button>
        </form>{" "}
        */}
      </div>
    );
  }
}

export default AddVenue;
