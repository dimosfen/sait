import React from 'react';
import logo from './1200px-Mangekyou_Sharingan_Kakashi.svg.png';
import './App.css';
export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="glass">
        <img src={logo}  className="App-logo" alt="logo" />
        <img src={logo}  className="App-logo" alt="logo" />
        </div>
        <p>
          Edit <code>sharingan</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://naruto.fandom.com/wiki/Sharingan"
          target="_blank"
          rel="noopener noreferrer"
        >
         Learn Sharingan
        </a>
      </header>
    </div>
  );
}

export default App;
