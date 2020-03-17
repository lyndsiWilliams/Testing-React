// React
import React from 'react';
import { render, getByText, getByTestId, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
//API
import { getData as mockData } from '../api';
// Component
import StarWarsCharacters from './StarWarsCharacters';

// Mock setup
jest.mock('../api');

const initialData = {
  next: "https://swapi.co/api/people/?page=2",
  previous: null,
  results: [{name: 'Luke Skywalker'}]
};


// TESTS BEGIN

// Test: StarWarsCharacters component renders
test("StarWarsCharacters renders properly", () => {
  mockData.mockResolvedValueOnce(initialData);
  render(<StarWarsCharacters />);
});

// Test: Previous and Next buttons render
test("Previous and Next buttons render", () => {
  mockData.mockResolvedValueOnce(initialData);
  const { getByText } = render(<StarWarsCharacters />);
  
  getByText(/previous/i);
  getByText(/next/i);
});

// Test: Page 1 of character name list renders first
test("Page 1 of character name list renders first", async() => {
  mockData.mockResolvedValueOnce(initialData);
  const { getByText } = render(<StarWarsCharacters />);
  const name = getByText(/luke/i);

  await(() => expect(name).toBeInDocument());
});

// // Test: You are unable to press the Previous button while on page 1
// test("You are unable to press the Previous button while on page 1", () => {
//   mockData.mockResolvedValueOnce(initialData);
//   const goToPrevious = jest.fn();
//   const { getByTestId } = render(<StarWarsCharacters goToPrevious={goToPrevious} />);
//   const prevBtn = getByTestId('prev-btn'); 

//   fireEvent.click(prevBtn);

//   expect(goToPrevious).not.toHaveBeenCalled();
// });

// // Test: If you press the Next button 1x it renders page 2
// test("If you press the Next button 1x it renders page 2", () => {

// })

// Test: You can use the Next button to navigate through all pages
// test("You can use the Next button to navigate through all pages", () => {
//   const goToNext = jest.fn();
//   const { getByText } = render(<StarWarsCharacters goToNext={goToNext} />);
//   const nextBtn = getByText(/next/i); 

//   fireEvent.click(nextBtn);
//   // fireEvent.click(nextBtn);
//   // fireEvent.click(nextBtn);
//   // fireEvent.click(nextBtn);
//   // fireEvent.click(nextBtn);
//   // fireEvent.click(nextBtn);
//   // fireEvent.click(nextBtn);
//   // fireEvent.click(nextBtn);

//   expect(goToNext).toHaveBeenCalledTimes(1);
// });

// // Test: If you press the Next button 8x you should not be able to press it again
// test("If you press the Next button 8x you should not be able to press it again", async() => {
//   mockData.mockResolvedValueOnce(initialData);
//   const goToNext = jest.fn();
//   const { getByTestId } = render(<StarWarsCharacters goToNext={goToNext} />);
//   const nextBtn = getByTestId('next-btn');

//   fireEvent.click(nextBtn);
//   fireEvent.click(nextBtn);
//   fireEvent.click(nextBtn);
//   fireEvent.click(nextBtn);
//   fireEvent.click(nextBtn);
//   fireEvent.click(nextBtn);
//   fireEvent.click(nextBtn);
//   fireEvent.click(nextBtn);
//   fireEvent.click(nextBtn);

//   await(() => expect((goToNext).toHaveBeenCalledTimes(9)))
// });

// await(() => expect(getByText(/Luke/i).toBeInDocument()))