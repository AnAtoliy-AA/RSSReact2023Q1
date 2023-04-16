import { describe, test, expect } from 'vitest';
import { fireEvent, getByText, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import APP_PATHS from '@constants/appPath/appPath';
import { Provider } from 'react-redux';
import { store } from '@store/store';
import Router from './router';

enum Buttons {
  HOME,
  CREATE_CARD,
  ABOUT,
}

enum ChildNodes {
  FIRST,
}

describe('<Router />', () => {
  test('Router mounts properly', () => {
    const wrapper = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[APP_PATHS.HOME]}>
          <Router />
        </MemoryRouter>
      </Provider>
    );

    expect(wrapper).toBeTruthy();

    const buttons = wrapper.container.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;

    expect(buttons.length).toBeGreaterThan(0);

    expect(buttons[Buttons.HOME]).toHaveTextContent('Home');
    expect(buttons[Buttons.CREATE_CARD]).toHaveTextContent('New card');
    expect(buttons[Buttons.ABOUT]).toHaveTextContent('About');

    fireEvent(
      getByText(buttons[Buttons.HOME], 'Home'),
      new MouseEvent('click', {
        bubbles: true,
      })
    );

    expect(buttons[Buttons.HOME].childNodes[ChildNodes.FIRST]).toHaveClass('active');
    expect(buttons[Buttons.HOME].childNodes[ChildNodes.FIRST]).not.toHaveClass('unselected');
    expect(buttons[Buttons.CREATE_CARD].childNodes[ChildNodes.FIRST]).not.toHaveClass('active');
    expect(buttons[Buttons.CREATE_CARD].childNodes[ChildNodes.FIRST]).toHaveClass('unselected');

    fireEvent(
      getByText(buttons[Buttons.ABOUT], 'About'),
      new MouseEvent('click', {
        bubbles: true,
      })
    );

    expect(buttons[Buttons.HOME].childNodes[ChildNodes.FIRST]).not.toHaveClass('active');
    expect(buttons[Buttons.CREATE_CARD].childNodes[ChildNodes.FIRST]).not.toHaveClass('active');
    expect(buttons[Buttons.ABOUT].childNodes[ChildNodes.FIRST]).toHaveClass('active');

    expect(buttons[Buttons.HOME].childNodes[ChildNodes.FIRST]).toHaveClass('unselected');
    expect(buttons[Buttons.CREATE_CARD].childNodes[ChildNodes.FIRST]).toHaveClass('unselected');
    expect(buttons[Buttons.ABOUT].childNodes[ChildNodes.FIRST]).not.toHaveClass('unselected');
  });
});
