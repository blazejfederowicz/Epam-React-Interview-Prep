import { render, screen } from '@testing-library/react';
import FetchData from './FetchData';
import { vi } from 'vitest';

beforeEach(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve([{ id: 2, title: 'qui est esse' }]),
    } as Response)
  );
});

test('fetches and displays data', async () => {
  render(<FetchData />);
  expect(await screen.findByText(/qui est esse/i)).toBeInTheDocument();
});
