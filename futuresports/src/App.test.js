import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import App from './App';

describe('App', () => {
  test('renders App component', () => {
    render(<App />);
    const msg = screen.getByText(/imaginary/)
    expect(msg).toBeInTheDocument();
  });
});