import React from "react";
import "../../App.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Body = props => (
  <div>
    <main className="flex-container">{props.children}</main>
  </div>
);

export default Body;
