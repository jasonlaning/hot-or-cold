import React from 'react';
import {shallow, mount} from 'enzyme';

import Feedback from './feedback';

describe('<Feedback />', () => {

	const guessHistory = [3, 23, 11, 66, 88];
	const answer = 52;
	const hotGuess = 54;
	const coldGuess = 7;

	it('Renders without crashing', () => {
		shallow(<Feedback guessHistory={guessHistory} 
			answer={answer} />);
	});

	it('Renders the feedback box', () => {
		const wrapper = shallow(<Feedback guessHistory={guessHistory} 
			answer={answer} />);
		expect(wrapper.hasClass('feedback-box')).toEqual(true);
	});

	it('Renders the correct feedback', () => {
		const coldFeedback = 'Cold';
		const hotFeedback = 'Hot';
		const correctFeedback = 'is Correct!';
		
		guessHistory.push(coldGuess);
		const coldWrapper = shallow(<Feedback guessHistory={guessHistory} 
			answer={answer} />);
		expect(coldWrapper.text()).toEqual(coldFeedback);

		guessHistory.push(hotGuess);
		const hotWrapper = shallow(<Feedback guessHistory={guessHistory} 
			answer={answer} />);
		expect(hotWrapper.text()).toEqual(hotFeedback);

		guessHistory.push(answer);
		const correctWrapper = shallow(<Feedback guessHistory={guessHistory} 
			answer={answer} />);
		expect(correctWrapper.text()).toEqual(`${answer} ${correctFeedback}`);
	});
	
})
