import React, { Component } from "react";
import { render } from "react-dom";

const Button = (props) => (
  <button onClick={props.onClick}>{props.children}</button>
);

export default Button;
