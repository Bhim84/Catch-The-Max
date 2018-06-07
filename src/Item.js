import React from "react";

export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.catch = this.catch.bind(this);
  }

  catch() {
    this.props.onClick(this.props.value);
  }

  render() {
    return (
      <li className="item" onClick={this.catch}>
        {this.props.value}
      </li>
    );
  }
}
