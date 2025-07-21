import { render, screen, fireEvent } from '@testing-library/react';
import DarkModeToggle from './DarkModeToggle';

test('toggles dark mode class on body', () => {
  render(<DarkModeToggle />);
  const button = screen.getByRole('button');
  fireEvent.click(button);
  expect(document.body.classList.contains('dark-mode')).toBe(true);
  fireEvent.click(button);
  expect(document.body.classList.contains('dark-mode')).toBe(false);
});
