import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Main from './pages/MainPage';
import About from './pages/AboutPage';
import Reviews from './pages/ReviewsPage';
import NotFound from './pages/NotFoundPage';
import './App.css';

const App = () => {
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
