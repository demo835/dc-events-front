import React, { Component } from 'react'
import {
    Link
  } from 'react-router-dom'

class Event extends Component {
    render () {
        let passed = this.props.event
        console.log("passed is")
        console.log(passed)

        let test = this.props.event.map((event, i) => {
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
            {/* <div className="row">
                <div className="col s12 m7">
                <div className="card">
                    <div className="card-image">
                    <img src="../images/hamilton-1.jpg" alt="Hamilton"></img>
                    <span className="card-title">{passed.name}</span>
                    </div>
                        <div className="card-content">
                            <p>{passed.description}.</p>
                            <p>Food: {passed.food}</p>
                            <p>Cost: {passed.cost}</p>
                            <p>Date: {passed.date}</p>
                            <p>Venue: {passed.venue}</p>
                            {test}
                        </div>
                    <div className="card-action">
                        <a href="#">This is a link</a>
                    </div>
                </div>
                </div>
            </div> */}
        </div>
      )
    }
  }

  export default Event