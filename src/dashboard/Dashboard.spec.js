import React from 'react';
import { render } from '@testing-library/react'
import Dashboard from './Dashboard.js'

test('Dashboard renders', () => {
  render(<Dashboard />)
});

test('Shows the controls and display', () => {
  const { getByText } = render(<Dashboard />)
  const controls = getByText(/close gate/i)
  const display = getByText(/open/i)
  expect(controls).toBeDefined()
  expect(display).toBeDefined()
})