import { describe } from '@asdgf/core';
import { fixture, fixtureCleanup } from '@asdgf/testing-helpers/open-wc/index.js';
import { assert } from '@asdgf/testing-helpers/uvu/assert/index.js';
import '../src/my-element.js';

describe('my-element', ({it, afterEach}) => {
  afterEach(fixtureCleanup);

  it('renders', async () => {
    const el = await fixture('<my-element></my-element>');
    assert.is(el.textContent, 'hello world');
  });
});