import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ICardValues } from '@services/card/card.service';

export interface SearchState {
  formattedCards: Array<ICardValues>;
}

const initialState: SearchState = {
  formattedCards: [],
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<ICardValues>) => {
      state.formattedCards.push(action.payload);
    },
  },
});

export const { addCard } = formSlice.actions;

export default formSlice.reducer;
