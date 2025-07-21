import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest'; 
import Form from './Form';

test('shows validation error on empty submit', async () => {
  render(<Form />);
  fireEvent.click(screen.getByText(/submit/i));
  const errors = await screen.findAllByText(/field is required/i);
  expect(errors.length).toBe(2);
});

test('submits form successfully when valid', () => {
  window.alert = vi.fn();
  render(<Form />);
  fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'John' } });
  fireEvent.change(screen.getByLabelText('Password'), { target: { value: '1234' } });
  fireEvent.click(screen.getByText(/submit/i));
  expect(window.alert).toHaveBeenCalledWith('Form has been submited');
});
