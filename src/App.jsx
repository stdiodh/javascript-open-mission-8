import React, { useState } from 'react';
import './App.css';
import Calculator from './components/calculator/Calculator';
import CarRace from './components/racingcar/CarRace';
import Lotto from './components/lotto/Lotto';
import logoImg from './assets/woowatech_logo.png'; 

function App() {
  const [activeTab, setActiveTab] = useState('calculator');

  return (
    <div className="App">
      <nav className="top-nav-bar">
        <div className="nav-left">
          <img src={logoImg} alt="Woowa Tech Course" className="logo-img" />
        </div>
      </nav>

      <header className="page-header">
        <h1 className="page-title">우아한테크코스 프리코스 8기</h1>
      </header>

      <main className="main-card">
        <div className="card-header">
          <h2 className="card-title">오픈미션 - 프리코스 미션 재구현</h2>
            <p className="card-subtitle">
              완벽한 코드보다 중요한 것은 문제를 해결하기 위해 나만의 방법을 찾아가는 과정입니다.<br/>
              이런 과정을 소중히 여기는 사람은 어떤 문제를 만나더라도 결국 해법을 찾아냅니다.
            </p>
        </div>

        <div className="mission-tabs">
          <button 
            className={`tab-btn ${activeTab === 'calculator' ? 'active' : ''}`}
            onClick={() => setActiveTab('calculator')}
          >
            문자열 덧셈 계산기
          </button>
          <button 
            className={`tab-btn ${activeTab === 'racing' ? 'active' : ''}`}
            onClick={() => setActiveTab('racing')}
          >
            자동차 경주
          </button>
          <button 
            className={`tab-btn ${activeTab === 'lotto' ? 'active' : ''}`}
            onClick={() => setActiveTab('lotto')}
          >
            로또
          </button>
        </div>

        <div className="mission-content">
          {activeTab === 'calculator' && <Calculator />}
          {activeTab === 'racing' && <CarRace />}
          {activeTab === 'lotto' && <Lotto />}
        </div>
      </main>

      <footer>
        <div className="footer-links">
          <a href="https://github.com/stdiodh" target="_blank" rel="noreferrer">GitHub</a>
          <span style={{margin: '0 5px'}}>|</span>
          <a href="https://velog.io/@stdiodh" target="_blank" rel="noreferrer">Velog</a>
        </div>
        <p style={{marginTop: '10px'}}>© 2025 Woowacourse Open Mission. Developed by Hood.</p>
      </footer>

      <a 
        href="https://github.com/stdiodh/javascript-open-mission-8" 
        target="_blank" 
        rel="noreferrer"
        className="fixed-github-btn"
      >
        <svg className="github-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.419-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
        GitHub Repo
      </a>
    </div>
  );
}

export default App;
