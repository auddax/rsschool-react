import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IReview } from '../../types/interfaces';

interface UserState {
  reviews: IReview[];
}

const initialState: UserState = {
  reviews: [],
};

export const formSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addReview(state, action: PayloadAction<IReview>) {
      state.reviews = [...state.reviews, action.payload];
    },
  },
});

export default formSlice.reducer;
