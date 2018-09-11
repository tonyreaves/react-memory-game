import React from "react";
import "../App.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Nav = props => (
  <nav className="nav">
    <p>Memory Game</p>
    <p>Click an image to begin!</p> <p>Score: 0 | Top Score: 0</p>
  </nav>
);

export default Nav;
