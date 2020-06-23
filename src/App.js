import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClickerPanel from './ClickerPanel.js'
import UpgradePanel from './UpgradePanel.js'


function App() {
  return (
    <div className="App">
      <ClickerPanel></ClickerPanel>
      <UpgradePanel></UpgradePanel>
    </div>
  );
}

export default App;
