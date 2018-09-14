import React from "react";
import "./Nav.css";
import App from "../../App";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Nav = props => (
  <nav className="nav">
    <p>
      Memory Game {props.message} Score: {props.score} | Top Score:{" "}
      {props.topScore}
    </p>
  </nav>
);

export default Nav;
