import React from 'react';
import logo from './logo.svg';
import './App.css';
import _ from 'lodash'
import SimpleChild from './components/SimpleChild';
import ContextChild from './components/ContextChild';
import MyLogo from './assets/ZX.png'
import Parent from './components/Parent';

export const ThemeContext = React.createContext('light');

function App() {
  return (
    <div className="App">
      {/* 子传父 SimpleChild to Parent */}
      <Parent />

      {/* 父传子 App to SimpleChild */}
      {/* <SimpleChild text="嘤嘤嘤" /> */}
      <ThemeContext.Provider value="dark">
        <ContextChild />
      </ThemeContext.Provider>

      <img src={MyLogo} alt='MyLogo' />
      <img src={require('./assets/ZX.png')} alt='MyLogo' />

      {/* <header className="App-header">
        {_.maxBy}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
