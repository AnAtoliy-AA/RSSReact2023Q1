import { describe, test, expect } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import Card from './card';

describe('<Card />', () => {
  test('Card mounts properly', () => {
    const card = render(<Card title="title" />);

    expect(card).toBeTruthy();

    const wrapper = card.container.querySelector('div') as HTMLDivElement;

    expect(wrapper).toBeTruthy();

    expect(wrapper).not.toBe(null);

    const titleFront = wrapper.querySelectorAll('h2')[0] as HTMLHeadingElement;
    const titleBack = wrapper.querySelectorAll('h2')[1] as HTMLHeadingElement;

    expect(titleFront).toBeTruthy();
    expect(titleBack).toBeTruthy();

    expect(titleFront).not.toBe(null);
    expect(titleBack).not.toBe(null);

    fireEvent.click(wrapper);

    expect(titleFront).not.toBe(null);
    expect(titleBack).not.toBe(null);
  });
});
