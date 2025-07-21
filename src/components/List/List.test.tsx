import { render, screen } from '@testing-library/react';
import List from './List'; // your component

test('renders list of items', () => {
  const items = ['Apple', 'Banana', 'Cherry'];
  render(<List items={items} />);
  items.forEach(item => {
    expect(screen.getByText(item)).toBeInTheDocument();
  });
});
