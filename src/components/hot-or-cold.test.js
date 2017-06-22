import React from 'react';
import {shallow, mount} from 'enzyme';

import HotOrCold from './hot-or-cold';

describe('<HotOrCold />', () => {

	const guess = 23;

	it('Renders without crashing', () => {
		shallow(<HotOrCold />);
	});

	it('Renders the title', () => {
		const title='The Title';
		const wrapper = shallow(<HotOrCold title={title} />);
		expect(wrapper.contains(title)).toEqual(true);

	})

	it('Can add a guess to the state', () => {
		const wrapper = shallow(<HotOrCold />);
		wrapper.instance().handleSubmit(guess);
		expect(wrapper.state('guessHistory')).toEqual([guess]);
	});

	it('Can reset the state to start a new game', () => {
		const wrapper = shallow(<HotOrCold />);
		wrapper.instance().handleSubmit(guess);
		wrapper.instance().newGame();
		expect(wrapper.state('guessHistory')).toEqual([]);
	})

})
