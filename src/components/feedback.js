import React from 'react';
import './feedback.css';

export default function Feedback(props) {
  
  const answer = props.answer;
  const guess = props.guessHistory[props.guessHistory.length - 1];
  let message = '';
  let type = '';
  
  if (guess === answer) {
    message = `${guess} is Correct!`;
    type = 'correct';
  } else if (props.guessHistory.findIndex((num) => num === guess) !== (props.guessHistory.length - 1)){
    message = `You already guessed ${guess}!`;
    type = 'guessed-already';
  } else if (Math.abs(guess - answer) <= 10) {
    message = 'Hot';
    type = 'hot';
  } else if (!guess) {
    message = '';
    type = '';    
  } else {
    message = 'Cold';
    type = 'cold';    
  }

  return (
    <div className="feedback-box">
      <h2 className={type}>{message}</h2>
    </div>
  )
}