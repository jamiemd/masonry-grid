import React, { Component } from "react";

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column1: [1, 2],
      column2: [2],
      column3: [3, 5, 6],
      column4: [4, 5, 8, 10, 34],
      column5: [5, 4, 6, 7],
      column6: [6],
      imagesArray: props.imagesArray
    };
  }

  assignImages = () => {};

  render() {
    const imagesArray = this.state.imagesArray;
    console.log("this.state.column1", this.state.column1);

    return (
      <div style={container}>
        <div style={columnMain}>
          {this.state.column1.map(image => (
            <div style={column}>{image}</div>
          ))}
        </div>
        <div style={columnMain}>
          {this.state.column2.map(image => (
            <div style={column}>{image}</div>
          ))}
        </div>
        <div style={columnMain}>
          {this.state.column3.map(image => (
            <div style={column}>{image}</div>
          ))}
        </div>
        <div style={columnMain}>
          {this.state.column4.map(image => (
            <div style={column}>{image}</div>
          ))}
        </div>
        <div style={columnMain}>
          {this.state.column5.map(image => (
            <div style={column}>{image}</div>
          ))}
        </div>
        <div style={columnMain}>
          {this.state.column6.map(image => (
            <div style={column}>{image}</div>
          ))}
        </div>
      </div>
    );
  }
}

const container = {
  display: "flex",
  justifyContent: "center"
};

const columnMain = {
  width: "236px",
  height: "236px",
  backgroundColor: "gray",
  margin: "10px"
};

const column = {
  width: "236px",
  height: "236px",
  backgroundColor: "gray",
  marginBottom: "20px"
};

export default Grid;
