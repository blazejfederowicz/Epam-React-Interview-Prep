import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './Modal';

test('opens and closes modal dialog', () => {
  render(<Modal />);
  fireEvent.click(screen.getByText(/open modal/i));
  expect(screen.getByRole('dialog')).toBeInTheDocument();
  fireEvent.click(screen.getByText(/close/i));
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
});
