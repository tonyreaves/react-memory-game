import React from "react";
import "../App.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Nav = props => (
  <nav className="nav">
    <p>Memory Game</p>
    <p>{/* Score: {state.score} | Top Score: {state.topScore} */}</p>
  </nav>
);

// handleIncrement = () => {
//   // We always use the setState method to update a component's state
//   this.setState({ count: this.state.count + 1 });
// };

export default Nav;
