import React, { useState } from 'react';
import Button from '../common/Button';
import ErrorDisplay from '../common/ErrorDisplay';

function CarRace() {
  const [carNames, setCarNames] = useState('');
  const [rounds, setRounds] = useState('');

  const [raceResult, setRaceResult] = useState(null);
  const [error, setError] = useState(null);

  return (
    <div>
      <h3>자동차 경주 게임</h3>

      <label>자동차 이름 입력 (쉼표로 구분)</label>
      <input
        type="text"
        placeholder="예) pobi,woni,jun"
        value={carNames}
        onChange={(e) => setCarNames(e.target.value)}
      />

      <label>시도할 횟수 입력</label>
      <input
        type="number"
        placeholder="예) 5"
        value={rounds}
        onChange={(e) => setRounds(e.target.value)}
      />

      <Button>경주 시작</Button>

      <ErrorDisplay error={error} />

      {raceResult && (
        <div>
          <h4 style={{marginTop: '20px'}}>경주 진행 상황</h4>
          <h4>최종 우승자</h4>
          <p></p>
        </div>
      )}
    </div>
  );
}
export default CarRace;
