import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import Navbar from './navbar';

describe('Navbar', () => {
  test('renders Navbar component', () => {
    render(<Navbar />);
    const msg = screen.getByText(/About/)
    expect(msg).toBeInTheDocument();
  });
});