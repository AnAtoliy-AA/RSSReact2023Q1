import { describe, test, expect } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import SearchBar from './searchBar';

describe('<SearchBar />', () => {
  test('SearchBar mounts properly', () => {
    const searchBar = render(<SearchBar onInputSubmit={(): void => {}} />);

    expect(searchBar).toBeTruthy();

    const input = searchBar.container.querySelector('input') as HTMLInputElement;

    expect(input).toBeTruthy();

    expect(input).not.toBe(null);

    expect(input?.value).toBe('');

    fireEvent.change(input, { target: { value: 'test' } });

    expect(input?.value).toBe('');
  });
});
