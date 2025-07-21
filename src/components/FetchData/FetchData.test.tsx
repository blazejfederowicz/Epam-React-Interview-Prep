import { render, screen, waitFor } from '@testing-library/react';
import FetchData from './FetchData';

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve([{ id: 1, name: 'Item 1' }]),
    } as Response)
  );
});

test('fetches and displays data', async () => {
  render(<FetchData />);
  await waitFor(() => expect(screen.getByText('Item 1')).toBeInTheDocument());
});
