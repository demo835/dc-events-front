import React, { Component } from "react";
import axios from "axios";
import "./AddEvent.css"

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
      venue: "",
      venues: []
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
      img: this.state.img,
      description: this.state.description,
      food: this.state.food,
      date: this.state.date,
      cost: this.state.cost,
      venue: this.state.venue
    });
    axios.post("https://dc-events-back.herokuapp.com/events/new", data, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  };

  componentDidMount() {
    axios.get("https://dc-events-back.herokuapp.com/venues").then(data => {
      this.setState({ venues: data.data });
      console.log(this.state.venues);
    });
  }

  render() {
    const { name, img, description, food, date, cost, venue } = this.state;
    let options = this.state.venues.map((event, i) => {
      return <option>{event.name}</option>;
    });
    return (
      <div className="form">
        <h1>Add Event</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.onChange}
              placeholder="Name"
            />
          </div>
          <div>
            <label htmlFor="img">Img Url</label>
            <input
              type="text"
              name="img"
              value={img}
              onChange={this.onChange}
              placeholder="https://i.imgur.com/example.png"
            />
          </div>
          <div>
            <label htmlFor="name">Description</label>
            <input
              type="text"
              name="description"
              value={description}
              onChange={this.onChange}
              placeholder="Description"
            />
          </div>
          <div>
            <label htmlFor="name">Food</label>
            <input
              type="text"
              name="food"
              value={food}
              onChange={this.onChange}
              placeholder="Food"
            />
          </div>
          <div>
            <label htmlFor="name">Date</label>
            <input
              type="text"
              name="date"
              value={date}
              onChange={this.onChange}
              placeholder="##/##/####"
            />
          </div>
          <div>
            <label htmlFor="name">Cost</label>
            <input
              type="text"
              name="cost"
              value={cost}
              onChange={this.onChange}
              placeholder="Cost"
            />
          </div>
          <label htmlFor="name">Choose a Venue</label>
          <select
            name="venue"
            value={venue}
            onChange={this.onChange}
            className="browser-default"
          >
            {options}
          </select>
          <br/>
          <button className="waves-effect waves-light btn-large #d32f2f red darken-2" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddEvent;
