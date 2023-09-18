import React from "react";
import "./herousecss.css";
import heroes from "../data/heroes.json";
class Herouse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: heroes.superheroes,
      clickHeroes: [],
      score: 0,
      topScore: 0,
    };
  }
  handleclick = (heroName) => {
    this.setState((state) => {
      const newScore = state.clickHeroes.includes(heroName)
        ? 0
        : state.score + 1;
      const clickHeroes = state.clickHeroes.includes(heroName)
        ? []
        : [...this.state.clickHeroes, heroName];
      return {
        heroes: [...this.state.heroes].sort((a, b) =>
          Math.random() > 0.5 ? -1 : 1
        ),
        clickHeroes: clickHeroes,
        score: newScore,
        topScore: Math.max(newScore, state.topScore),
      };
    });
  };
  render() {
    return (
      <div className="container">
        <nav className="navbar">
          <h1>Superheroes: Mamory Game</h1>
          <div>Score: {this.state.score}</div>
          <div>TOP Score: {this.state.topScore}</div>
        </nav>

        <div className="rules">
          <h2>
            Get points by clicking on an image but do not click the same one
            twice
          </h2>
        </div>
        <div className="heroes-container">
          {this.state.heroes.map((el, i) => (
            <div
              key={i}
              className="hero-card"
              onClick={() => this.handleclick(el.name)}
            >
              <img src={el.image} />
              <p>
                <span className="bold">Name: {el.name}</span>
              </p>
              <p>
                <span className="bold">Occupation: {el.occupation}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Herouse;
