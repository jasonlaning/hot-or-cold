import React from 'react';
import './guess-history.css';

export default function GuessHistory(props) {
  
  const guessHistory = props.guessHistory;
  let guesses = '';
  if (guessHistory.length > 0) {
    guesses = 'Numbers guessed: ';
    for (let i=0; i<guessHistory.length; i++) {
      guesses += ' ' + guessHistory[i];
      if (i!==(guessHistory.length-1)) {
        guesses += ',';
      };
    }
  }
  
  return (
    <div className="history-box">
      <p>{guesses}</p>
    </div>
  )
}