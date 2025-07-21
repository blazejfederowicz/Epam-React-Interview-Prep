import { render, screen, fireEvent } from '@testing-library/react';
import ToggleButton from './ToggleButton';

test('toggles button state on click', () => {
  render(<ToggleButton />);
  const button = screen.getByRole('button');
  fireEvent.click(button);
  expect(button).toHaveTextContent(/on/i);
  fireEvent.click(button);
  expect(button).toHaveTextContent(/off/i);
});
