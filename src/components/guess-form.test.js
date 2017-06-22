import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {

	const guessHistory = [45, 68, 12, 99];
	const guess = 8;
	const answer = 22;

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
		wrapper.find('input[type="number"]').value = guess;
		wrapper.simulate('submit');
		expect(callback).toHaveBeenCalled();
	}); 
})