import { describe, test, expect } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '@store/store';
import SearchBar from './searchBar';

describe('<SearchBar />', () => {
  test('SearchBar mounts properly', () => {
    const searchBar = render(
      <Provider store={store}>
        <SearchBar onInputSubmit={(): void => {}} />
      </Provider>
    );

    expect(searchBar).toBeTruthy();

    const input = searchBar.container.querySelector('input') as HTMLInputElement;

    expect(input).toBeTruthy();

    expect(input).not.toBe(null);

    expect(input?.value).toBe('');

    fireEvent.change(input, { target: { value: 'test' } });

    expect(input?.value).toBe('test');
  });
});
