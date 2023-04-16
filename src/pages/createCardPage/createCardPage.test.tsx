import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '@store/store';
import CreateCardPage from './newCardPage';

describe('<CreateCardPage />', () => {
  test('CreateCardPage mounts properly', () => {
    const createCardPage = render(
      <Provider store={store}>
        <CreateCardPage />
      </Provider>
    );

    expect(createCardPage).toBeTruthy();

    const pageTitle = createCardPage.container.querySelector('h2');

    expect(pageTitle).toBeTruthy();

    expect(pageTitle?.innerHTML).toBe('Create new card');
  });
});
