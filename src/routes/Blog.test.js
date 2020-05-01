import React from 'react';
import { render } from '@testing-library/react';
import Blog from './Blog';

test('renders without clashes', () => {
  expect(() => render(<Blog />)).not.toThrow()
});
