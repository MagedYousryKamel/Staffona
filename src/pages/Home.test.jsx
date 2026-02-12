import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import Home from './Home';
import { ThemeProvider } from '../context/ThemeContext';

describe('Home Page', () => {
  it('renders hero title', () => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </ThemeProvider>
    );
    expect(screen.getByText(/Empowering Businesses with/i)).toBeInTheDocument();
  });
});
