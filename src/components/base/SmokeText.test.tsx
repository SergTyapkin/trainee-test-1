import * as React from "react";
import SmokeText from './SmokeText'
import { expect, create, describe, test } from "react-test-renderer";

const response = require(`../../../.storybook/responses/teaser-2.json`);
const items = response.result.body.direct.ads;

describe('Test SmokeText', function () {
    test.each(items)('SmokeText correctly rendering', ({warning, domain, region}, index) => {
        [warning, domain, region].forEach(text => {
            const smoked = create(<SmokeText uid={index} children={text}/>).toJSON();
            expect(smoked).toMatchSnapshot();
        });
    });
});
