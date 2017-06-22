import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessHistory from './guess-history';

describe('<GuessHistory />', () => {

	const guessHistory = [3, 23, 11, 66, 88];

	it('Renders without crashing', () => {
		shallow(<GuessHistory guessHistory={guessHistory} />);
	});

	it('Renders the guess history', () => {
		const guessMessage = 'Numbers guessed:  3, 23, 11, 66, 88';
		const wrapper = shallow(<GuessHistory guessHistory={guessHistory} />);
		expect (wrapper.text()).toEqual(guessMessage);

	})

})
