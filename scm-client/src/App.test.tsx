import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import TruckContainer from './containers/TruckContainer';
import LocationContainer from './containers/LocationContainer';
import TruckDatagridComponent from './components/TruckDatagridComponent';

test('Check if Truck Container is Valid', () => {
  render(<TruckContainer />);
  const linkElement = screen.getByText(/Truck Collection/i);
  expect(linkElement).toBeInTheDocument();
});

test('Check if Location Container is Valid', () => {
  render(<LocationContainer />);
  const linkElement = screen.getByText(/Location Collection/i);
  expect(linkElement).toBeInTheDocument();
});