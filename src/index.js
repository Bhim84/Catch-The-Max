import React, { Component } from "react";
import ReactDom from "react-dom";
import Item from "./item";
import "./index.css";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardMap: this.getBoardMap()
    };
    this.getBoardMap = this.getBoardMap.bind(this);
    this.catch = this.catch.bind(this);
  }

  componentWillMount() {
    this.style = {
      position: "relative",
      left: window.innerWidth / 2 - this.state.boxSize * 3 / 2 + "px",
      top: window.innerHeight / 2 - this.state.boxSize * 3 / 2 + "px",
      width: "310px",
      margin: "1px 1px 0px 0px"
    };
  }

  getBoardMap() {
    const tempMap = [];
    for (var i = 1; i <= 25; i++) {
      tempMap.push({ id: i, value: Math.floor(Math.random() * 1000 + 1) });
    }
    return tempMap;
  }

  catch(max) {
    alert(max);
  }

  render() {
    return (
      <div className="board">
        <ul className="flex-container wrap fix">
          {this.state.boardMap.map(key => (
            <Item value={key.value} onClick={this.catch} />
          ))}
        </ul>
      </div>
    );
  }
}

ReactDom.render(<Board />, document.getElementById("root"));
