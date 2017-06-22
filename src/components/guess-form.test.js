import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {

	const guessHistory = [45, 68, 12, 99];
	const guess = 8;
	const answer = 22;
	const correctGuess = 22;

	it('Renders without crashing', () => {
		shallow(<GuessForm guessHistory={guessHistory} 
             		answer={answer} />);
	});

	it('Renders the guess form', () => {
		const text = 'Guess a number';
		const wrapper = shallow(<GuessForm guessHistory={guessHistory} 
             answer={answer} />);
		expect(wrapper.contains(text)).toEqual(true);
	});

	it('Should fire the onSubmit callback when the form is submitted', () => {
		const callback = jest.fn();
		const wrapper = mount(<GuessForm onSubmit={callback} guessHistory={guessHistory} 
             answer={answer} />);
		wrapper.simulate('submit', {target: {guess: {value: guess}}});
		expect(callback).toHaveBeenCalledWith(guess);
	}); 

	it('Should render a button for new game if answer guessed', () => {
		guessHistory.push(correctGuess);
		const wrapper = mount(<GuessForm guessHistory={guessHistory}
			answer={answer} />);
		expect(wrapper.hasClass('new-game')).toEqual(true);
		expect(wrapper.text()).toEqual('Play Again?');
	});
})