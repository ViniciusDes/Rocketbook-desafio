import React, { Component } from "react";
import { render } from "react-dom";

import "./styles.css";

import Postagens from "./postagens-component/index";

export default class Body extends Component {
  render() {
    return (
      <div id="body">
        <Postagens />
        <Postagens />
        <Postagens />
        <Postagens />
        <Postagens />
        <Postagens />
        <Postagens />
        <Postagens />
        {/* <Postagens /> */}
      </div>
    );
  }
}
