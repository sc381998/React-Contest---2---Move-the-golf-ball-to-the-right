import React, { Component, useCallback, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false, //variable needed to be changed
      posi: 0,
      ballPosition: { left: "0px" }
    };
    this.renderChoice = this.renderChoice.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.callback = this.callback.bind(this);
  }

  //call back function
  buttonClickHandler() {
    this.setState({
      renderBall: !this.state.renderBall
    });
  }
  renderChoice() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else
      return (
        <button onClick={this.buttonClickHandler}>Click For One Ball</button>
      );
  }

  callback() {
    this.setState({
      ballPosition: { left: this.state.posi + "px" }
    });
  }

  handleKeyDown(event) {
    if (event.keyCode === 39) {
      this.setState({
        posi: this.state.posi + 5
      });
      this.callback();
    }
  }
  //bind ArrowRight keydown event
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  render() {
    return <div className="playground">{this.renderChoice()}</div>;
  }
}

export default App;
