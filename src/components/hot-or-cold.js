import React from 'react';
import './hot-or-cold.css';
import GuessForm from './guess-form';
import Feedback from './feedback';
import GuessHistory from './guess-history';

export default class HotOrCold extends React.Component {
    constructor(props) {
        super(props);      
        this.state = {
          answer: this.newAnswer(),
          guessHistory: []
        }
    }
  
    handleSubmit(guess) {
      const guessHistory = this.state.guessHistory;
      guessHistory.push(guess);
      this.setState({  
        guessHistory
        });
    }
  
    newAnswer() {
      return (Math.floor(Math.random() * 100) + 1);
    }
  
    newGame() {
      this.setState({
        answer: this.newAnswer(),
        guessHistory: []
      });
    }
  
    render() { 
      return(
        <div className="content-wrap">
          <h1>{this.props.title}</h1>
          <div className="game-box">
            <p>Guess a Number between 1 and 100</p>
            <Feedback guessHistory={this.state.guessHistory} answer={this.state.answer} />
            <GuessForm onSubmit={(guess) => this.handleSubmit(guess)} guessHistory={this.state.guessHistory} 
              answer={this.state.answer} onClick={() => this.newGame()} />
            <GuessHistory guessHistory={this.state.guessHistory} />
          </div>
        </div>
      )
    }
}
