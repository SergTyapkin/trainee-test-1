import * as React from "react";
import SmokeText from './SmokeText'
import { it, expect, create } from "react-test-renderer";

it('SmokeText correctly rendering', () => {
    const text = create(<SmokeText children={{__html: "some text"}} />).toJSON();
    expect(text).toMatchSnapshot();
});

