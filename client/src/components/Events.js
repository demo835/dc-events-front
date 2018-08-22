import React, { Component } from "react";
import Event from "./Event";

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }
  // componentDidMount() {
  //   axios.get("localhost:3001/events").then(res => {
  //     this.setState({ events: res.data });
  //     console.log(this.state.events);
  //   });
  // }
  render() {
    let passed = this.props.events
    return (
      <div>
        <Event event={passed}/>
      </div>
    );
  }
}

export default Events;
