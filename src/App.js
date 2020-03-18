import React from 'react';
import logo from './logo.svg';
import './App.css';
import MoviesContainer from './components/Navigation'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 className='App-title'>React Movies App</h1>
      <MoviesContainer/>
      
      </header>
    </div>
  );
}

export default App;
