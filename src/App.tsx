import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { getPhotosList } from '../src/api/api';
import SearchContext from '../src/context/SearchContext';
import Main from './pages/MainPage';
import About from './pages/AboutPage';
import Reviews from './pages/ReviewsPage';
import NotFound from './pages/NotFoundPage';
import { IPhoto } from 'types/interfaces';
import './App.css';

const App = () => {
  const [photosList, setPhotosList] = useState<IPhoto[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getPhotosList().then((data) => {
      setPhotosList(data);
    });
  }, []);

  return (
    <SearchContext.Provider value={{ photosList, isLoading, setPhotosList, setIsLoading }}>
      <Routes>
        <Route path="/" element={<Navigate to="/main" />} />
        <Route path="/main" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </SearchContext.Provider>
  );
};

export default App;
