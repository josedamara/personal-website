import { render, screen } from '@testing-library/react';
import App from './App';

test('renders greeting and projects', () => {
  render(<App />);
  expect(screen.getByText(/Hi! I'm Jose/i)).toBeInTheDocument();
  expect(screen.getByText(/My Work/i)).toBeInTheDocument();
  expect(screen.getByText('MoneyTrackerApp')).toBeInTheDocument();
});
