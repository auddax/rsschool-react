import React, { ReactNode } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';
import Reviews from './pages/Reviews';
import NotFound from './pages/NotFound';
import './App.css';

class App extends React.Component {
  render(): ReactNode {
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
  }
}

export default App;
