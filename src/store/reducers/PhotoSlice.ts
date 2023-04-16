import { PayloadAction, SerializedError, createSlice } from '@reduxjs/toolkit';
import { IPhoto } from '../../types/interfaces';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

interface PhotoState {
  photos: IPhoto[];
  isLoading: boolean;
  isSuccess: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
  searchValue?: string;
}

const initialState: PhotoState = {
  photos: [],
  isLoading: false,
  isSuccess: false,
  error: undefined,
};

export const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {
    setPhotosList(state, action: PayloadAction<PhotoState>) {
      state.photos = action.payload.photos;
      state.isLoading = action.payload.isLoading;
      state.isSuccess = action.payload.isSuccess;
      state.error = action.payload.error;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export default photoSlice.reducer;
