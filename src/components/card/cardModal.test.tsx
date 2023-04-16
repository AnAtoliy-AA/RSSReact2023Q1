/* eslint-disable react/jsx-props-no-spreading */
import { render, fireEvent } from '@testing-library/react';
import CardModal from './cardModal';

describe('CardModal component', () => {
  const onCloseMock = ((...args: unknown[]) => {
    onCloseMock.calls.push(args);
  }) as VoidFunction & { calls: unknown[][] };
  onCloseMock.calls = [];
  const props = {
    title: 'Test Title',
    channelTitle: 'Test Channel',
    imageUrl: 'https://example.com/image.jpg',
    description: 'Test description',
    publishedAt: '2022-04-16T00:00:00.000Z',
    viewCount: 100,
    likeCount: 50,
    favoriteCount: 10,
    commentCount: 20,
    tags: ['test', 'tags'],
    onClose: onCloseMock,
  };

  it('renders the component with correct props', () => {
    const { getByText, getAllByText, getByAltText } = render(<CardModal {...props} />);
    expect(getByText(props.title)).toBeInTheDocument();
    expect(getByText(props.channelTitle)).toBeInTheDocument();
    expect(getByAltText(props.title)).toBeInTheDocument();
    expect(getByText(props.description)).toBeInTheDocument();
    expect(getByText(props.publishedAt)).toBeInTheDocument();
    expect(getAllByText(/test/i).length).toEqual(4);
    expect(getAllByText(/#\w+/i).length).toEqual(2);
  });

  it('calls the onClose function when the close button is clicked', () => {
    const { getByText } = render(<CardModal {...props} />);
    const closeButton = getByText('X');
    fireEvent.click(closeButton);
    expect(onCloseMock.calls.length).toBe(1);
  });
});
