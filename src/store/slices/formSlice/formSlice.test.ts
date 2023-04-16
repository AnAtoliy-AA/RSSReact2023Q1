import { addCard, formSlice, SearchState } from './formSlice';

describe('formSlice', () => {
  let state: SearchState;

  beforeEach(() => {
    state = formSlice.reducer(undefined, { type: '' });
  });

  it('should add a card', () => {
    const newCard = {
      id: '1',
      title: 'Test Card',
      description: 'This is a test card',
    };

    const action = addCard(newCard);
    const newState = formSlice.reducer(state, action);

    expect(newState.formattedCards).toHaveLength(1);
    expect(newState.formattedCards[0]).toEqual(newCard);
  });
});
