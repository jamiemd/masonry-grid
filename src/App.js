import React, { Component } from "react";
import "./App.css";
import Grid from "./Grid";

class App extends Component {
  constructor() {
    super();
    this.state = {
      imagesArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    };
  }

  componentDidMount() {
    // this.createImages();
  }

  // createImages = () => {
  //   console.log("create images");
  //   let width = 236;
  //   let height = 100;

  //   const newArray = this.state.imagesArray.push();
  //   this.setState({ imagesArray: newArray });
  // };

  render() {
    return (
      <div className="App">
        <Grid imagesArray={this.state.imagesArray} />
      </div>
    );
  }
}

export default App;
