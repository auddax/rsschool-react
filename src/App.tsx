import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { unsplashAPI } from './api/api';
import { useAppDispatch } from './hooks/redux';
import { photoSlice } from './store/reducers/PhotoSlice';
import Header from './components/Header';
import Layout from './components/Layout';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import ReviewsPage from './pages/ReviewsPage';
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
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<ReviewsPage />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
