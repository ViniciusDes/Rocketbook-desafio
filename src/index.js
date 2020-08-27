import React, { Component } from "react";
import { render } from "react-dom";

import Header from "./header/index";
import Body from "./body/index";

import "./styles.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
