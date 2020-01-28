// React
import React from 'react';
import { render, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// Components
import App from './App';
import StarWarsCharacters from './App';


// TESTS BEGIN

// Test: App component renders
test("App renders properly", () => {
  render(<App />);
});

// Test: StarWarsCharacters component is rendered within App
test("StarWarsCharacters renders properly within App", () => {
  render(<StarWarsCharacters />);
});

// Test: Star Wars header image renders
test("Star Wars header image renders", () => {
  const { getByTestId } = render(<App />);

  getByTestId(/sw-header-img/i);
})