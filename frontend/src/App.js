import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home, Toolbar } from './views'

function App() {
  return (
    <div className="App">
      <div style={{ overflow: 'hidden'}}>
        <Toolbar />
        <Home />
      </div>
    </div>
  );
}

export default App;
