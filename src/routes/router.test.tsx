import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import APP_PATHS from '@constants/appPath/appPath';
import Router from './router';

describe('<Router />', () => {
  test('Router mounts properly', () => {
    const wrapper = render(
      <MemoryRouter initialEntries={[APP_PATHS.HOME]}>
        <Router />
      </MemoryRouter>
    );

    expect(wrapper).toBeTruthy();
  });
});
