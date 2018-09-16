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
    pugs,
    clickedPugs: []
  };

  render() {
    return (
      <div>
        <Nav message={message} score={score} topScore={topScore} />
        <Wrapper>
          <Body>
            {this.state.pugs.map(pug => (
              <PugCard
                key={pug.name}
                image={pug.image}
                clicked={this.clicked}
                id={pug.id}
              />
            ))}
          </Body>
        </Wrapper>
      </div>
    );
  }

  clicked = id => {
    console.log({ id });
    const { clickedPugs } = this.state;
    const indexOfFoundPug = clickedPugs.findIndex(
      clickedPugIndex => clickedPugIndex === id
    );

    // if it has not found a pug
    if (-1 === indexOfFoundPug) {
      const updatedClickedPugs = [id, ...clickedPugs];
      this.setState({ clickedPugs: updatedClickedPugs }, () => {
        // this.state.pugs.sort(() => Math.random() - 0.5);
        this.setState(prevState => ({
          ...prevState,
          pugs: prevState.pugs.sort(() => Math.random() - 0.5)
        }));
        this.setState({ score: this.state.score + 1 });
        console.log(this.state.score);
      });

      return;
    }

    this.gameEnd();
    // this.state.pugs.find((o, i) => {
    //   if (o.id === id) {
    //     alert("you have a match!");
    //     // if (pugs[i].pugs === 0) {
    //     //   pugs[i].pugs = pugs[i].count + 1;
    //     //   this.setState({ score: this.state.score + 1 }, function() {
    //     //     console.log(this.state.score);
    //     //   });
    //     //   this.state.pugs.sort(() => Math.random() - 0.5);
    //     //   return;
    //     // }
    //     // this.gameEnd();
    //   } else {
    //     alert(`you clicked ${id}`);
    //   }
    // });
  };

  gameEnd = () => {
    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score }, function() {
        console.log(this.state.topScore);
        alert(`New high score! ${this.state.score}`);
      });
      this.state.pugs.forEach(pug => {});
      this.setState({ clickedPugs: [] });
    } else {
      this.setState.PugCard = { animation: "shake 0.5s" };
      alert(`Game Over  \nscore: ${this.state.score}`);
    }
    return this.setState({ score: 0 });
  };
}
export default App;
