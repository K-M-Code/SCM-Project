import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import TruckContainer from './containers/TruckContainer';
import LocationContainer from './containers/LocationContainer';
import LocationAdd from './components/LocationAdd';
import TruckAdd from './components/TruckAdd';
import TruckDatagridComponent from './components/TruckDatagridComponent';
import LocationDatagridComponent from './components/LocationDatagridComponent';


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

test('Check if Truck Add Container is Valid', () => {
  render(<TruckAdd />);
  const linkElement = screen.getByLabelText('Licence Plate');
  expect(linkElement).toBeInTheDocument();
});

test('Check if Location Add Container is Valid', () => {
  render(<LocationAdd />);
  const linkElement = screen.getByLabelText('Max HR Cap');
  expect(linkElement).toBeInTheDocument();
});

test('Check if Truck Datagrid is Valid', () => {
  render(<TruckDatagridComponent />);
  const linkElement = screen.getByText('License Plate');
  expect(linkElement).toBeInTheDocument();
});

test('Check if Location Datagrid is Valid', () => {
  render(<LocationDatagridComponent />);
  const linkElement = screen.getByText('Name');
  expect(linkElement).toBeInTheDocument();
});