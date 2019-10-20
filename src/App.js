import React from 'react';
import './App.css';
import logo from './assets/logo.svg';
import Login from './pages/Login';

function App() {
  return (
    <div className="container">
      <img src={logo} alt="aircnc" />
      <div className="content">
        <Login />
      </div>
    </div>
  );
}

export default App;
