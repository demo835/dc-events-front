import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import Events from "./Events";
import Event from "./Event"
import NavBar from "./NavBar";
import AddEvent from "./AddEvent";
import AddVenue from "./AddVenue";
import Venue from "./Venue";

class App extends Component {
  constructor() {
    super();

    this.state = {
      events: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3001/events").then(data => {
      console.log("get event data from axios...");
      console.log(data.data);
      this.setState({ events: data.data });
      console.log("inside componentdidmount App, events is");
      console.log(this.state.events);
    });
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="body">
          <Switch>
            <Route
              exact
              path="/"
              render={props => {
                return (
                  <Events events={this.state.events} />
                  // <Events />
                );
              }}
            />
            <Route
              exact
              path="/events"
              render={props => {
                return <Events events={this.state.events} />;
              }}
            />
            <Route path="/add-event" component={AddEvent} />
            {/* <Route exact path='/add-event'
                render={() => {
                  return (
                    <AddEvent />
                  )
                }}
                /> */}
            <Route exact path="/venue/new" component={AddVenue} />
            <Route exact path="/events/:id"
                render={props => {
                    return <Event {...props} events={this.state.events}/>
                }}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
