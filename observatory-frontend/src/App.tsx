import React from 'react';
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
      </header>
    </div>
  );
}

export default App;
