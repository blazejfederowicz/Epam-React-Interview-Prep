import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form';

test('shows validation error on empty submit', () => {
  render(<Form />);
  fireEvent.click(screen.getByText(/submit/i));
  expect(screen.getByText(/field is required/i)).toBeInTheDocument();
});
