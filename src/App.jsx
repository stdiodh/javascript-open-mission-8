import React, { useState } from 'react';
import './App.css';
import Calculator from './components/calculator/Calculator';
import CarRace from './components/racingcar/CarRace';

function App() {
  const [currentTab, setCurrentTab] = useState('calculator');

  return (
    <div className="App">
      <header>
        <h1>우아한테크코스 프리코스 8기 오픈미션</h1>
        <p>계산기, 자동차 경주, 로또</p>
      </header>

      <nav>
        <button onClick={() => setCurrentTab('calculator')}>계산기</button>
        <button onClick={() => setCurrentTab('car-race')}>자동차 경주</button>
        <button onClick={() => setCurrentTab('lotto')}>로또</button>
      </nav>

      <main>
        {currentTab === 'calculator' && <Calculator />}
        {currentTab === 'car-race' && <CarRace />}
      </main>
    </div>
  );
}

export default App;
