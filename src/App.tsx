import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

var rootStyle = {
  background: '#131924',
  color: '#131924',
  height : '100vh'
}

function App() {
  return (
    <div style={rootStyle}>
      <Header/>
    </div>
  );
}

export default App;
