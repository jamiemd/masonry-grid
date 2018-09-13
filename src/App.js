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
          height: 420
        },
        {
          height: 200
        },
        {
          height: 500
        },
        {
          height: 360
        },
        {
          height: 200
        },
        {
          height: 250
        },
        {
          height: 200
        },
        {
          height: 200
        },
        {
          height: 150
        },
        {
          height: 300
        },
        {
          height: 290
        },
        {
          height: 650
        },
        {
          height: 350
        },
        {
          height: 550
        },
        {
          height: 450
        },
        {
          height: 250
        },
        {
          height: 650
        },
        {
          height: 430
        },
        {
          height: 650
        },
        {
          height: 180
        },
        {
          height: 350
        },
        {
          height: 130
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
