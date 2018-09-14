import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav.js";
import pugCard from "./components/Cards/pugCard";
import pugs from "./pugs.json";

class App extends Component {
  // this.state = {
  //   message: "Click an image to begin!",
  //   topScore: 0,
  //   score: 0
  //   // pugs: pugs,
  //   // pugsLeft: pugs
  // }
  render() {
    return(
    <Nav />
    <Wrapper>
    {
      this.state.friends.map(friend => (
        <pugCard key={pugs.name} name={pugs.name} image={pugs.image} />
      ));
    }
    </Wrapper>
    )
  }
}

export default App;
