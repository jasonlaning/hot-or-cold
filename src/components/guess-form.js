import React from 'react';
import './guess-form.css';

export default function GuessForm (props) {
  
  const guess = props.guessHistory[props.guessHistory.length - 1]
  
  if (props.answer === guess) {
    return (
      <button className="new-game" onClick={() => props.onClick()} >Play Again?</button>
    )
  }
  
  return (
    <form onSubmit={e => {
      e.preventDefault(); 
      props.onSubmit(e.target.guess.value * 1);
      e.target.guess.value = '';
    }}>
      <label>Guess a number</label>
      <input type="number" id="guess" name="guess" min="1" max="100" 
        placeholder="?" required />
      <button>Submit<br />Guess #{props.guessHistory.length + 1}</button>
    </form>
  )
}