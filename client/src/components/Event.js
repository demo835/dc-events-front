import React, { Component } from "react";
import { Link } from "react-router-dom";

class Event extends Component {
  render() {
    console.log("events is from Event.js Component page");
    console.log(this.props.events);

    const result = this.props.events.filter(
      eventId => eventId._id === this.props.match.params.id
    );

    console.log("result is");
    console.log(result);
    let pathname = `/events/edit/${this.props.match.params.id}`;
    return (
      <div>
        {/* <h1>We are on the Event page</h1> */}
        {/* <p>ID is {this.props.match.params.id}</p> */}
        <div className="row">
          <div className="col s12 m7">
            <div className="card">
              <div className="card-image">
                <img src={result[0].img} alt={result[0].name} />
                <span className="card-title">{result[0].name}</span>
              </div>
              <div className="card-content">
                <p>{result[0].description}.</p>
                <p>Food: {result[0].food}</p>
                <p>Cost: {result[0].cost}</p>
                <p>Date: {result[0].date}</p>
                <p>Venue: {result[0].venue}</p>
              </div>
              <div className="card-action">
                {/* <Link to={pathname}>View Event</Link> */}
                <p>Delete</p>
                <Link to={pathname}>Update</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Event;
