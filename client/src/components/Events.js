import React, { Component } from "react";
import Event from "./Event";
import axios from 'axios'

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    }
  }
//   componentDidMount() {
//     axios.get("http://localhost:3001/events")
//     .then(data => {
//       console.log("get event data from axios...")
//       console.log(data.data)
//       this.setState({events: data.data})
//       console.log("inside componentdidmount App, events is")
//       console.log(this.state.events)
//   })
// }

  render() {
    let passed = this.props.events

    console.log("events is")
    console.log(this.props.events)

    return (
      <div>
        <Event event={passed}/>
        {/* <Event event={this.state.events}/> */}
      </div>
    );
  }
}

export default Events;
