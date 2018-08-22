import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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

  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.tagret.value;
    this.setState(state);
  };

  onSubmit = e => {
    e.prevent.default();
    const { name, img, description, food, date, cost, venue } = this.state;
    axios
      .post("/events/new", {
        name,
        img,
        description,
        food,
        date,
        cost,
        venue
      })
      .then(result => {
        this.props.history.push("/events/new");
      });
  };

  render() {
    const { name, img, description, food, date, cost, venue } = this.state;
    return (
      <div>
        <h1>Add Event</h1>
        <h3>
          <Link to="/">Back to Events</Link>
        </h3>
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
            <label for="img">Img Url</label>
            <input
              type="text"
              name="img"
              value={img}
              onChange={this.onChange}
              placeholder="https://i.imgur.com/example.png"
            />
          </div>
          <div>
            <label for="name">Description</label>
            <input
              type="text"
              name="description"
              value={description}
              onChange={this.onChange}
              placeholder="Description"
            />
          </div>
          <div>
            <label for="name">Food</label>
            <input
              type="text"
              name="food"
              value={food}
              onChange={this.onChange}
              placeholder="Food"
            />
          </div>
          <div>
            <label for="name">Date</label>
            <input
              type="text"
              name="date"
              value={date}
              onChange={this.onChange}
              placeholder="##/##/####"
            />
          </div>
          <div>
            <label for="name">Cost</label>
            <input
              type="text"
              name="cost"
              value={cost}
              onChange={this.onChange}
              placeholder="Cost"
            />
          </div>
          <div>
            <label for="name">Venue</label>
            <input
              type="text"
              name="venue"
              value={venue}
              onChange={this.onChange}
              placeholder="Venue"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddEvent;
