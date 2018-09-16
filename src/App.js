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

class App extends Component {
  state = {
    message,
    topScore,
    score,
    pugs
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

  clicked = id => {
    this.state.pugs.find((o, i) => {
      if (o.id === id) {
        if (pugs[i].pugs === 0) {
          pugs[i].pugs = pugs[i].count + 1;
          this.setState({ score: this.state.score + 1 }, function() {
            console.log(this.state.score);
          });
          this.state.pugs.sort(() => Math.random() - 0.5);
          return true;
        } else {
          this.gameEnd();
        }
      }
    });
  };
  gameEnd = () => {
    if (this.state.score > this.state.topScore) {
      this.setState({ highscore: this.state.score }, function() {
        console.log(this.state.topScore);
      });
    }
    this.state.pugs.forEach(pug => {
      pug.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({ score: 0 });
    return true;
  };
}
export default App;
