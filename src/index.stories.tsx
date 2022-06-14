import * as React from 'react';

import {storiesOf} from '@storybook/react';

import RenderComponent from '../.storybook/components/RenderComponent';
import {withTests} from "@storybook/addon-jest";


const smokeTextResults = require('../SmokeText.jest-test-results.json');

const stories = storiesOf('components', module);
stories
	.addDecorator(withTests({
		results: smokeTextResults
	}))
	.add('left', () => (
		<RenderComponent/>
	));
