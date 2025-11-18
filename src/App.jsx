import React from 'react';
import './App.css';
import Calculator from './components/calculator/Calculator'; 

function App() {
  return (
    <div className="App">
      <header>
        <h1>우아한테크코스 프리코스 8기 오픈미션</h1>
      </header>

      <main>
        <Calculator />
      </main>
    </div>
  );
}

export default App;
