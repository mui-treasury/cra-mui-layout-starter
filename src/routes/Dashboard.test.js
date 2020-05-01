
import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';

test('renders without clashes', () => {
  expect(() => render(<Dashboard />)).not.toThrow()
});
