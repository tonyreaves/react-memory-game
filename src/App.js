import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav.js";
import pugCard from "./components/Cards/pugCard";

class App extends Component {
  // this.state = {
  //   message: "Click an image to begin!",
  //   topScore: 0,
  //   score: 0
  //   // pugs: pugs,
  //   // pugsLeft: pugs
  // }

  render() {
    return (
      <div className="App">
        <header />
        <Nav />
        <pugCard />
      </div>
    );
  }
}

export default App;
