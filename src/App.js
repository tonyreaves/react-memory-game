import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import pugCard from "./components/Cards/pugCard";
import pugs from "./pugs.json";
import Body from "./components/Body/body";
import Wrapper from "./components/Wrapper/Wrapper";

let message = "Click an image to begin!";
let topScore = 0;
let score = 0;
let pugsLeft = 12;

class App extends Component {
  state = {
    message,
    topScore,
    score,
    pugs,
    pugsLeft
  };

  state = {
    pugs
  };

  render() {
    return (
      <div>
        <Nav />
        <Wrapper>
          <Body>
            {this.state.pugs.map(pugs => (
              <pugCard key={pugs.name} name={pugs.name} image={pugs.image} />
            ))}
          </Body>
        </Wrapper>
      </div>
    );
  }
}

export default App;
