import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class Event extends Component {

    onSubmit = e => {
        console.log("submit clicked");
        let data = JSON.stringify({
          _id: this.props.match.params.id
        });
        axios.delete(`http://localhost:3001/events/delete/${this.props.match.params.id}`, data, {
          headers: {
            "Content-Type": "application/json"
          }
        });
      };

    render () {

        const result = this.props.events.filter(eventId => eventId._id === this.props.match.params.id);

        let pathname = `/events/edit/${this.props.match.params.id}`;

      return (
        <div>
            {/* <h1>We are on the Event page</h1> */}
            {/* <p>ID is {this.props.match.params.id}</p> */}
                <div className="row">
                    <div className="col s12 m7">
                    <div className="card">
                        <div className="card-image">
                        <img src={result[0].img} alt={result[0].name}></img>
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
                            <a className="waves-effect waves-light btn-small"><button type="submit" onClick={this.onSubmit}>Delete</button></a>
                            <a className="waves-effect waves-light btn-small"><Link to={pathname}>Update</Link></a>
                        </div>
                    </div>
                    </div>
                </div>
        </div>
    );
  }
}

export default Event;


