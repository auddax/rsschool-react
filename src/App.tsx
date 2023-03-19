import React, { ReactNode } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Main from './pages/Main';
import './App.css';

class App extends React.Component {
  render(): ReactNode {
    return (
      <Routes>
        <Route path="/" element={<Navigate to="/main" />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    );
  }
}

export default App;
