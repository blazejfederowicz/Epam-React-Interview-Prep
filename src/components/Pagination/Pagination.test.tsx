import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from './Pagination';

test('navigates pages on button click', () => {
  const onPageChange = jest.fn();
  render(<Pagination currentPage={1} totalPages={3} onPageChange={onPageChange} />);
  fireEvent.click(screen.getByText(/next/i));
  expect(onPageChange).toHaveBeenCalledWith(2);
});
