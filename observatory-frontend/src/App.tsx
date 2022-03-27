import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import * as charts from './components/BarChart';
import data from './data/BarChartData.json'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <div style={{height: 500}}>
          <charts.BarChart data={data} />
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
