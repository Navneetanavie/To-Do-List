import { render, screen } from '@testing-library/react';
import App from './App';

test('renders todo list and form', () => {
  render(<App />);
  const listHeader = screen.getByText(/List of TODOs/i);
  const formHeader = screen.getByText(/Create a ToDo/i);
  expect(listHeader).toBeInTheDocument();
  expect(formHeader).toBeInTheDocument();
});
