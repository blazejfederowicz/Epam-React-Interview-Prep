import { render, screen } from '@testing-library/react';
import DragDrop from './DragDrop';

test('renders drag-and-drop area', () => {
  render(<DragDrop />);
  expect(screen.getByTestId('drag-drop-area')).toBeInTheDocument();
});
