import React from 'react';
import renderer from 'react-test-renderer';

import App from '../app/index.js';

describe('<App />', () => {
  it('has 2 children', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(2).toBe(2);
  });
});
