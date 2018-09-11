import React from "react";
import "./App.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Nav = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    Memory Game! Click on an image to earn points, but don't click on any more
    than once! Click an image to begin! Score: 0 | Top Score: 0
  </nav>
);

export default Nav;
