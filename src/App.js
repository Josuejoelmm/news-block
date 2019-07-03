import React from 'react';
import NewsBlock from './components/NewsBlock';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <NewsBlock />
    </div>
  );
}

export default App;
