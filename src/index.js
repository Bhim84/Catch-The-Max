import React, { Component } from "react";
import ReactDom from "react-dom";
import Item from "./item"

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardMap: this.getBoardMap()
    };
    this.getBoardMap = this.getBoardMap.bind(this);
  }

  getBoardMap() {
    const tempMap = [];
    for (var i = 1; i < 10; i++) {
      tempMap.push({ id: i, value: Math.floor(Math.random() * 100 + 1) });
    }
    return tempMap;
  }
  render() {
    return (
      <div>
        <ul class="flex-container wrap">
          {this.state.map((key,value)=> ())}
        </ul>
      </div>
    );
  }
}
