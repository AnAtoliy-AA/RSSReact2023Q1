import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import CreateCardPage from './newCardPage';

describe('<CreateCardPage />', () => {
  test('CreateCardPage mounts properly', () => {
    const createCardPage = render(<CreateCardPage />);

    expect(createCardPage).toBeTruthy();

    const pageTitle = createCardPage.container.querySelector('h2');

    expect(pageTitle).toBeTruthy();

    expect(pageTitle?.innerHTML).toBe('Create new card');
  });
});
