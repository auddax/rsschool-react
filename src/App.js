import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';
import NotFound from './pages/NotFound';
import './App.css';
class App extends React.Component {
    render() {
        return (React.createElement(Routes, null,
            React.createElement(Route, { path: "/", element: React.createElement(Navigate, { to: "/main" }) }),
            React.createElement(Route, { path: "/main", element: React.createElement(Main, null) }),
            React.createElement(Route, { path: "/about", element: React.createElement(About, null) }),
            React.createElement(Route, { path: "*", element: React.createElement(NotFound, null) })));
    }
}
export default App;
