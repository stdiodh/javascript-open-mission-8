import React, { useState } from 'react';
import Button from '../common/Button';
import ErrorDisplay from '../common/ErrorDisplay';
import apiClient from '../../api/apiClient'; 

function CarRace() {
  const [carNames, setCarNames] = useState('');
  const [rounds, setRounds] = useState('');
  const [raceResult, setRaceResult] = useState(null); 
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setRaceResult(null);
    setError(null);
    setIsLoading(true);

    const roundsNumber = parseInt(rounds, 10);

    try {
      const response = await apiClient.post('/racingcar/play', {
        names: carNames,
        count: roundsNumber 
      });

      setRaceResult(response.data); 

    } catch (apiError) {
      // 6. 예외 처리 (명세서의 Error Code를 수신)
      if (apiError.response && apiError.response.data) {
        setError(apiError.response.data);
      } else {
        setError({ code: 'UNKNOWN', message: '알 수 없는 오류가 발생했습니다.' });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h3>자동차 경주 게임</h3>

      <label>자동차 이름 입력 (쉼표로 구분)</label>
      <input
        type="text"
        placeholder="예) pobi,woni,jun"
        value={carNames}
        onChange={(e) => setCarNames(e.target.value)}
        disabled={isLoading}
      />

      <label>시도할 횟수 입력</label>
      <input
        type="number"
        placeholder="예) 5"
        value={rounds}
        onChange={(e) => setRounds(e.target.value)}
        disabled={isLoading}
      />

      <Button onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? '경주 진행 중...' : '경주 시작'}
      </Button>

      <ErrorDisplay error={error} />

      {raceResult && (
        <div style={{marginTop: '20px'}}>
          <h4>경주 진행 상황</h4>
          <div style={{ fontFamily: 'monospace', lineHeight: '1.6' }}>
            {raceResult.rounds.map((round, roundIndex) => (
              <div key={roundIndex} style={{marginBottom: '10px'}}>
                <strong>Round {roundIndex + 1}</strong>
                {round.map((car) => (
                  <div key={car.name}>=
                    {car.name} : {'-'.repeat(car.position)}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <h4>최종 우승자</h4>
          <p style={{ fontWeight: 'bold', fontSize: '1.2em' }}>
            {raceResult.winners.join(', ')}
          </p>
        </div>
      )}
    </div>
  );
}
export default CarRace;
