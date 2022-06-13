import * as React from "react";
import SmokeText from './SmokeText'
import { expect, create, describe, test } from "react-test-renderer";  // я не смог установить этот пакет,
// ведь сейчас стоит старый react, версию которого я решил не трогать (16.8.23),
// а react-test-renderer требует react одной из версий ^16.0.0 || ^17.0.0 || ^18.0.0.

const response = require(`../../../.storybook/responses/teaser-2.json`);
const items = response.result.body.direct.ads;

describe('Test SmokeText', function () {
    test.each(items)('SmokeText correctly rendering', ({warning, domain, region}) => {
        [warning, domain, region].forEach(text => {
            const smoked = create(<SmokeText children={text}/>).toJSON();
            expect(smoked).toMatchSnapshot();
        });
    });
});
