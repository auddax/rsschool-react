import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IReview } from '../../types/interfaces';

interface ReviewState {
  reviews: IReview[];
}

const initialState: ReviewState = {
  reviews: [],
};

export const formSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    addReview(state, action: PayloadAction<IReview>) {
      state.reviews = [...state.reviews, action.payload];
    },
  },
});

export default formSlice.reducer;
