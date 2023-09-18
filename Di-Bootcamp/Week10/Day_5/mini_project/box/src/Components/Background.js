import React from "react";
import BackgroundCss from "./BackgroundCss.css";
import quotes from "../data/quotes.js";

class Background extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "",
      currentIndex: this.generateNewIndex(),
      passedIndex: [],
    };
  }
  componentDidMount() {
    const randomQuote = quotes[this.state.currentIndex];
    this.setState({ quote: randomQuote.quote, author: randomQuote.author });
  }
  generateNewIndex = () => {
    return Math.floor(Math.random() * quotes.length);
  };
  handleclick = () => {
    this.setState((state) => {
      // const newInsex =
      //   state.currentIndex === quotes.length - 1 ? 0 : state.currentIndex + 1;
      let newInsex = this.generateNewIndex();
      while (
        state.passedIndex.length !== quotes.length &&
        state.passedIndex.includes(newInsex)
      ) {
        newInsex = this.generateNewIndex();
      }
      const randomQuote = quotes[newInsex];
      return {
        currentIndex: state.currentIndex + 1,
        quote: randomQuote.quote,
        author: randomQuote.author,
        passedIndex: [...state.passedIndex, newInsex],
      };
    });
    this.changeBackgroundColor();
  };
  changeBackgroundColor = () => {
    const root = document.querySelector(":root");
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    root.style.setProperty("--prymary-color", "#" + randomColor);
  };
  render() {
    return (
      <body>
        <div className="box">
          <div>
            <h1>{this.state.quote}</h1>
            <h2>{this.state.author}</h2>
          </div>
          <div className="button-container">
            <button onClick={this.handleclick}>Blalal</button>
          </div>
        </div>
      </body>
    );
  }
}

export default Background;
