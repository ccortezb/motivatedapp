// src/App.test.js

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import the library extension
import App from './App';

test('renders MotivatedApp header', () => {
  render(<App />);
  const headerElement = screen.getByText(/MotivatedApp/i);
  expect(headerElement).toBeInTheDocument();
});

test('displays the name input field', () => {
  render(<App />);
  const nameInput = screen.getByLabelText(/Name:/i);
  expect(nameInput).toBeInTheDocument();
});

test('displays the age input field', () => {
  render(<App />);
  const ageInput = screen.getByLabelText(/Age:/i);
  expect(ageInput).toBeInTheDocument();
});

test('renders the "Start My Day" button', () => {
  render(<App />);
  const startButton = screen.getByText(/Start My Day/i);
  expect(startButton).toBeInTheDocument();
});

test('displays a motivational message on button click', () => {
  render(<App />);
  
  // Simulate button click
  const startButton = screen.getByText(/Start My Day/i);
  fireEvent.click(startButton);

  // Check if the motivational message appears
  const messageElement = screen.getByTestId('motivational-message');
  expect(messageElement).toBeInTheDocument();
});

test('handles edge case for invalid input', () => {
  render(<App />);
  
  // Simulate invalid input (age less than 0 for example)
  const ageInput = screen.getByLabelText(/Age:/i);
  fireEvent.change(ageInput, { target: { value: '-5' } });

  // Simulate button click
  const startButton = screen.getByText(/Start My Day/i);
  fireEvent.click(startButton);

  // Check if the app handles the invalid input gracefully (you might check for an error message or any appropriate behavior)
  const errorMessageElement = screen.getByTestId('error-message');
  expect(errorMessageElement).toBeInTheDocument();
});
