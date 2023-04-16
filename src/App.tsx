import React, { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { unsplashAPI } from './api/api';
import { useAppDispatch } from './hooks/redux';
import { photoSlice } from './store/reducers/PhotoSlice';
import Main from './pages/MainPage';
import About from './pages/AboutPage';
import Reviews from './pages/ReviewsPage';
import NotFound from './pages/NotFoundPage';
import './App.css';

const App = () => {
  const { setPhotosList } = photoSlice.actions;
  const dispatch = useAppDispatch();
  const { data, error, isLoading, isSuccess } = unsplashAPI.useGetPhotosListQuery(10);

  useEffect(() => {
    dispatch(
      setPhotosList({
        photos: data,
        isLoading,
        isSuccess,
        error,
      })
    );
  }, [data, dispatch, error, isLoading, isSuccess, setPhotosList]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/main" />} />
      <Route path="/main" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};

export default App;
