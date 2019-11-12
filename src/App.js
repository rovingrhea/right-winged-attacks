import React from 'react';
import './App.css';
import Map from './components/Map'

function App() {
  return (
    <div className="app">
      <h1>Right-winged attacks since 1945</h1>  
      <p>An overview of terror attacks done by right-winged attackers.</p>
      <Map />
    </div>
  )
}

export default App;
