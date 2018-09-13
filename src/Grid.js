import React, { Component } from "react";

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [[], [], [], [], [], []],
      imagesArray: props.imagesArray
    };
  }

  componentDidMount() {
    let index = 0;
    let columns = this.state.columns;
    this.props.imagesArray.forEach(image => {
      index = this.getShortestColumn(columns);
      columns[index].push(image);
    });
    this.setState({ columns: columns });
  }

  getShortestColumn = columns => {
    let columnTotals = [0, 0, 0, 0, 0, 0];

    for (let i = 0; i < columns.length; i++) {
      for (let j = 0; j < columns[i].length; j++) {
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

    return (
      <div style={container}>
        {columns.map((column, i) => (
          <div style={columnMain} key={i}>
            {column.map((image, i) => {
              return (
                <div style={{ height: image.height, ...singleColumn }} key={i}>
                  hi
                </div>
              );
            })}
          </div>
        ))}
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

const singleColumn = {
  width: "236px",
  marginBottom: "20px",
  backgroundColor: "gray"
};

export default Grid;
