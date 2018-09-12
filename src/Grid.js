import React, { Component } from "react";

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        [1, 4, 6],
        [2, 3, 5, 6, 5],
        [3, 4, 5, 5],
        [4, 4, 4],
        [5, 67, 3],
        [6, 3, 2]
      ],
      imagesArray: props.imagesArray
    };
  }

  componentDidMount() {
    this.sumLengths();
  }

  sumLengths = () => {
    const imagesArray = this.state.imagesArray;
    let shortestColumnLength = Infinity;
    let shortestColumnLengthIndex = 0;
    let columnSums = [0, 0, 0, 0, 0, 0];

    // sum column items
    for (let i = 0; i < this.state.columns.length; i++) {
      // console.log("this.state.columns[i]", this.state.columns[i]);
      for (let j = 0; j < this.state.columns[i].length; j++) {
        // console.log("this.state.columns[i][j]", this.state.columns[i][j]);
        if (i === 0) {
          columnSums[0] += this.state.columns[i][j];
        } else if (i === 1) {
          columnSums[1] += this.state.columns[i][j];
        } else if (i === 2) {
          columnSums[2] += this.state.columns[i][j];
        } else if (i === 3) {
          columnSums[3] += this.state.columns[i][j];
        } else if (i === 4) {
          columnSums[4] += this.state.columns[i][j];
        } else {
          columnSums[5] += this.state.columns[i][j];
        }
      }
    }
    console.log("columnSums", columnSums);

    // find first shortest column
    for (let i = 0; i < columnSums.length; i++) {
      if (columnSums[i] < shortestColumnLength) {
        shortestColumnLength = columnSums[i];
        shortestColumnLengthIndex = [i];
      }
    }
    console.log("shortestColumnLength", shortestColumnLength);
    console.log("shortestColumnLengthIndex", shortestColumnLengthIndex);

    // insert new numbers into columns;
    let assignedColumn = this.state.columns;
    for (let i = 0; i < imagesArray.length; i++) {
      assignedColumn[shortestColumnLengthIndex].push(imagesArray[i]);
    }
    console.log("assignedColumn", assignedColumn);
  };

  render() {
    // console.log("this.state.imagesArray", this.state.imagesArray);

    return (
      <div style={container}>
        <div style={columnMain}>
          {this.state.columns.map((image, i) => (
            <div style={{ height: image.height, ...column }} key={i}>
              hi
            </div>
          ))}
        </div>
        {/* <div style={columnMain}>
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
        </div> */}
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
