import React from "react";
import "./Nav.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Nav = props => (
  <nav className="nav">
    <p>
      <span id="appName">Memory Game</span> {props.message} Score: {props.score}
      | Top Score: {props.topScore}
    </p>
  </nav>
);

export default Nav;
