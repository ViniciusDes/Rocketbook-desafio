import React, { Component } from "react";
import { render } from "react-dom";

import "./styles.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header-content">
        <h2>RocketBook</h2>
      </div>
    );
  }
}
