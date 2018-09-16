import React from "react";
import "./Nav.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Nav = props => (
  <nav className="nav">
    <div>
      <span id="appName">Pug Shuffle</span>{" "}
      <span id="message">{props.message}</span>{" "}
      <div id="scores">
        Score:
        <span className="scoreNum">{props.score}</span>{" "}
        <p>
          Top Score: <span className="scoreNum">{props.topScore}</span>
        </p>
      </div>
    </div>
  </nav>
);

export default Nav;
