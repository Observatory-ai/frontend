import React from 'react';
import './App.css';
import Header from './components/Header';
import PersistentDrawerLeft from './components/PersistentDrawer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Header /> */}
        <PersistentDrawerLeft />
      </header>
    </div>
  );
}

export default App;
