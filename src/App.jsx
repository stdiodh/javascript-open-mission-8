import React, { useState } from 'react';
import './App.css';
import Calculator from './components/calculator/Calculator';
import CarRace from './components/racingcar/CarRace';
import Lotto from './components/lotto/Lotto';

function App() {
  const [currentTab, setCurrentTab] = useState('calculator');

  return (
    <div className="App">
      <header>
        <h1>우아한테크코스 프리코스 8기 오픈미션</h1>
        <p>속도보다 깊이를 추구하는 개발자를 지향합니다.</p>
      </header>

      <nav>
        <button 
          className={`tab-button ${currentTab === 'calculator' ? 'active' : ''}`}
          onClick={() => setCurrentTab('calculator')}
        >
          계산기
        </button>
        <button 
          className={`tab-button ${currentTab === 'car-race' ? 'active' : ''}`}
          onClick={() => setCurrentTab('car-race')}
        >
          자동차 경주
        </button>
        <button 
          className={`tab-button ${currentTab === 'lotto' ? 'active' : ''}`}
          onClick={() => setCurrentTab('lotto')}
        >
          로또
        </button>
      </nav>

      <main>
        {currentTab === 'calculator' && <Calculator />}
        {currentTab === 'car-race' && <CarRace />}
        {currentTab === 'lotto' && <Lotto />}
      </main>
    </div>
  );
}

export default App;
