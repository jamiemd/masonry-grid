import React, { Component } from "react";

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // columns: [[30, 4], [8, 4], [2, 5, 7], [9], [90, 34], [9]],
      columns: [[], [], [], [], [], []],
      imagesArray: props.imagesArray
    };
  }

  componentDidMount() {
    // console.log("this.state.imagesArray", this.state.imagesArray);
    let index = 0;
    let columns = this.state.columns;
    this.props.imagesArray.forEach(image => {
      // console.log("image", image);
      index = this.getShortestColumn(columns);
      columns[index].push(image);
      // console.log("this.state.columns", this.state.columns);
    });
    this.setState({ columns: columns });
  }

  getShortestColumn = columns => {
    let columnTotals = [0, 0, 0, 0, 0, 0];

    for (let i = 0; i < columns.length; i++) {
      for (let j = 0; j < columns[i].length; j++) {
        // console.log("columns[i][j].height", columns[i][j].height);
        columnTotals[i] += columns[i][j].height;
      }
    }

    let shortest = Infinity;
    let index = 0;

    for (let i = 0; i < columnTotals.length; i++) {
      if (columnTotals[i] < shortest) {
        shortest = columnTotals[i];
        index = i;
      }
    }

    return index;
  };

  render() {
    let columns = this.state.columns;
    console.log("columns", columns);

    return (
      <div style={container}>
        <div style={columnMain}>
          {columns[0].map((image, i) => (
            <div style={{ height: image.height, ...column }} key={i}>
              hi
            </div>
          ))}
        </div>
        <div style={columnMain}>
          {columns[1].map((image, i) => (
            <div style={{ height: image.height, ...column }} key={i}>
              hi
            </div>
          ))}
        </div>
        <div style={columnMain}>
          {columns[2].map((image, i) => (
            <div style={{ height: image.height, ...column }} key={i}>
              hi
            </div>
          ))}
        </div>
        <div style={columnMain}>
          {columns[3].map((image, i) => (
            <div style={{ height: image.height, ...column }} key={i}>
              hi
            </div>
          ))}
        </div>
        <div style={columnMain}>
          {columns[4].map((image, i) => (
            <div style={{ height: image.height, ...column }} key={i}>
              hi
            </div>
          ))}
        </div>
        <div style={columnMain}>
          {columns[5].map((image, i) => (
            <div style={{ height: image.height, ...column }} key={i}>
              hi
            </div>
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
  margin: "10px"
};

const column = {
  width: "236px",
  marginBottom: "20px",
  backgroundColor: "gray"
};

export default Grid;
