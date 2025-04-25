import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello message', () => {
  const { getByText } = render(<App />);
  const heading = getByText(/This is a test/i);
  expect(heading).toBeInTheDocument();
});
