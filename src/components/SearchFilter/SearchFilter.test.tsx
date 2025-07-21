import { render, screen, fireEvent } from '@testing-library/react';
import SearchFilter from './SearchFilter';

test('filters list based on search input', () => {
  const items = ['apple', 'banana', 'cherry'];
  render(<SearchFilter items={items} />);
  fireEvent.change(screen.getByRole('textbox'), { target: { value: 'ban' } });
  expect(screen.queryByText('apple')).not.toBeInTheDocument();
  expect(screen.getByText('banana')).toBeInTheDocument();
});
