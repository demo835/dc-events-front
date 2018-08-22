import React, { Component } from "react";
import { Link } from 'react-router-dom'
import Event from "./Event";
import axios from 'axios'

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    let passed = this.props.events

        let test = this.props.events.map((event, i) => {
            let pathname = `/events/${event._id}`
            return (
                    <div className="row" key={i}>
                    <div className="col s12 m7">
                    <div className="card">
                        <div className="card-image">
                        <img src={event.img} alt={event.name}></img>
                        <span className="card-title">{event.name}</span>
                        </div>
                            <div className="card-content">
                                <p>{event.description}.</p>
                                <p>Food: {event.food}</p>
                                <p>Cost: {event.cost}</p>
                                <p>Date: {event.date}</p>
                                <p>Venue: {event.venue}</p>
                            </div>
                        <div className="card-action">
                            <Link to={pathname}>View Event</Link>
                        </div>
                    </div>
                    </div>
                </div>
            )
          })
        
          console.log("test is")
          console.log(test)

    return (
      <div>
        {test}
        {/* <Event event={this.state.events}/> */}
      </div>
    );
  }
}

export default Events;
