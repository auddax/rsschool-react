import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IPhoto } from '../../types/interfaces';

interface PhotoState {
  photos: IPhoto[];
  isLoading: boolean;
  error: string;
}

const initialState: PhotoState = {
  photos: [],
  isLoading: false,
  error: '',
};

export const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {
    setPhotosList(state, action: PayloadAction<IPhoto>) {
      state.photos = [action.payload];
    },
  },
});

export default photoSlice.reducer;
