import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import PugCard from "./components/Cards/PugCard";
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

  render() {
    return (
      <div>
        <Nav message={message} score={score} topScore={topScore} />
        <Wrapper>
          <Body>
            {this.state.pugs.map(pug => (
              <PugCard key={pug.name} image={pug.image} />
            ))}
          </Body>
        </Wrapper>
      </div>
    );
  }

  setClicked() {
    {
      this.state.pugs.clicked = true;
    }
  }
}

export default App;
