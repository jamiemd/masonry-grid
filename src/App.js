import React, { Component } from "react";
import "./App.css";
import Grid from "./Grid";

class App extends Component {
  constructor() {
    super();
    this.state = {
      imagesArray: [
        {
          height: 100
        },
        {
          height: 200
        },
        {
          height: 250
        },
        {
          height: 300
        },
        {
          height: 200
        },
        {
          height: 500
        },
        {
          height: 200
        },
        {
          height: 200
        },
        {
          height: 250
        },
        {
          height: 700
        },
        {
          height: 200
        },
        {
          height: 150
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <Grid imagesArray={this.state.imagesArray} />
      </div>
    );
  }
}

export default App;
