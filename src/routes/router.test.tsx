import { describe, test, expect } from 'vitest';
import { fireEvent, getByText, render } from '@testing-library/react';
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

    const buttons = wrapper.container.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;

    expect(buttons.length).toBeGreaterThan(0);

    expect(buttons[0]).toHaveTextContent('Home');
    expect(buttons[2]).toHaveTextContent('About');

    fireEvent(
      getByText(buttons[0], 'Home'),
      new MouseEvent('click', {
        bubbles: true,
      })
    );

    expect(buttons[0].childNodes[0]).toHaveClass('active');
    expect(buttons[1].childNodes[0]).not.toHaveClass('active');
    expect(buttons[1].childNodes[0]).toHaveClass('unselected');
    expect(buttons[0].childNodes[0]).not.toHaveClass('unselected');

    fireEvent(
      getByText(buttons[2], 'About'),
      new MouseEvent('click', {
        bubbles: true,
      })
    );

    expect(buttons[0].childNodes[0]).not.toHaveClass('active');
    expect(buttons[1].childNodes[0]).toHaveClass('active');

    expect(buttons[0].childNodes[0]).toHaveClass('unselected');
    expect(buttons[1].childNodes[0]).not.toHaveClass('unselected');
  });
});
