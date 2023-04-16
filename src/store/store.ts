import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { unsplashAPI } from '../api/api';
import formReducer from './reducers/FormSlice';
import photoReducer from './reducers/PhotoSlice';

const rootReducer = combineReducers({
  formReducer,
  photoReducer,
  [unsplashAPI.reducerPath]: unsplashAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(unsplashAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
