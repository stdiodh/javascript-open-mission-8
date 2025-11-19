import React, { useState } from 'react';
import Button from '../common/Button';
import ErrorDisplay from '../common/ErrorDisplay';
import apiClient from '../../api/apiClient';

function Lotto() {
  const [purchaseAmount, setPurchaseAmount] = useState('');
  const [purchasedLottos, setPurchasedLottos] = useState([]);
  const [purchaseCount, setPurchaseCount] = useState(0);
  const [purchaseId, setPurchaseId] = useState(''); 
  
  const [winningNumbers, setWinningNumbers] = useState('');
  const [bonusNumber, setBonusNumber] = useState('');
  
  const [lottoResult, setLottoResult] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleCopyId = () => {
    if (purchaseId) {
      navigator.clipboard.writeText(purchaseId);
      alert('구매 ID가 복사되었습니다!');
    }
  };

  const handleResetDatabase = async () => {
    if (!window.confirm('정말로 모든 로또 데이터를 초기화하시겠습니까?')) return;

    setIsLoading(true);
    try {
      await apiClient.delete('/lottos/reset');
      
      setPurchaseAmount('');
      setPurchasedLottos([]);
      setPurchaseCount(0);
      setPurchaseId('');
      setWinningNumbers('');
      setBonusNumber('');
      setLottoResult(null);
      setError(null);
      
      alert('모든 데이터가 초기화되었습니다.');
    } catch (apiError) {
      if (apiError.response && apiError.response.data) {
        setError(apiError.response.data);
      } else {
        setError({ code: 'RESET_FAILED', message: 'DB 초기화 실패' });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handlePurchase = async () => {
    setPurchasedLottos([]);
    setPurchaseCount(0);
    setPurchaseId('');
    setLottoResult(null);
    setError(null);
    setIsLoading(true);

    try {
      const response = await apiClient.post('/lottos', {
        amount: parseInt(purchaseAmount, 10)
      });
      
      setPurchaseId(response.data.purchaseId);
      setPurchaseCount(response.data.purchaseCount);
      setPurchasedLottos(response.data.lottos);

    } catch (apiError) {
      if (apiError.response && apiError.response.data) {
        setError(apiError.response.data);
      } else {
        setError({ code: 'UNKNOWN', message: '구매 중 오류가 발생했습니다.' });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleCheckResult = async () => {
    setLottoResult(null);
    setError(null);
    setIsLoading(true);

    const winningNumberArray = winningNumbers.split(',').map(num => parseInt(num.trim(), 10));
    const bonusNum = parseInt(bonusNumber, 10);

    try {
      const response = await apiClient.post(`/lottos/${purchaseId}/results`, {
        winningNumbers: winningNumberArray,
        bonusNumber: bonusNum
      });
      
      setLottoResult(response.data);

    } catch (apiError) {
       if (apiError.response && apiError.response.data) {
        setError(apiError.response.data);
      } else {
        setError({ code: 'UNKNOWN', message: '결과 확인 중 오류가 발생했습니다.' });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3 style={{ margin: 0 }}>로또 게임</h3>
        <Button 
          onClick={handleResetDatabase} 
          disabled={isLoading}
          style={{ backgroundColor: '#dc3545', fontSize: '0.9rem', padding: '5px 10px' }}
        >
          🗑️ DB 초기화
        </Button>
      </div>

      <div style={{ marginBottom: '20px', padding: '15px', border: '1px solid #eee', borderRadius: '8px' }}>
        <h4>구입금액 입력</h4>
        <label>구입금액 (1,000원 단위)</label>
        <input
          type="number"
          placeholder="예) 8000"
          value={purchaseAmount}
          onChange={(e) => setPurchaseAmount(e.target.value)}
          disabled={isLoading}
        />
        <Button onClick={handlePurchase} disabled={isLoading}>
          {isLoading ? '처리 중...' : '구매하기'}
        </Button>
      </div>

      {purchasedLottos.length > 0 && (
        <div style={{ marginBottom: '20px' }}>
          <h4>총 {purchaseCount}개를 구매했습니다.</h4>
          <div style={{ marginBottom: '10px' }}>
            <span style={{ fontWeight: 'bold', marginRight: '10px' }}>ID: {purchaseId}</span>
            <Button onClick={handleCopyId} style={{ padding: '5px 10px', fontSize: '0.8em' }}>
              ID 복사
            </Button>
          </div>
          <div style={{ maxHeight: '200px', overflowY: 'auto', background: '#f9f9f9', padding: '10px' }}>
            {purchasedLottos.map((lottoObj, index) => (
              <div key={index} style={{ fontFamily: 'monospace' }}>
                🎟️ [{lottoObj.numbers.join(', ')}]
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={{ marginBottom: '20px', padding: '15px', border: '1px solid #eee', borderRadius: '8px' }}>
        <h4>당첨 결과 확인</h4>
        
        <label>구매 ID (과거 구매 내역 조회 가능)</label>
        <input
          type="text"
          placeholder="구매 ID를 입력하세요"
          value={purchaseId}
          onChange={(e) => setPurchaseId(e.target.value)}
          disabled={isLoading}
        />

        <label>당첨 번호 6개 (쉼표로 구분)</label>
        <input
          type="text"
          placeholder="예) 1,2,3,4,5,6"
          value={winningNumbers}
          onChange={(e) => setWinningNumbers(e.target.value)}
          disabled={isLoading}
        />
        
        <label>보너스 번호</label>
        <input
          type="number"
          placeholder="예) 7"
          value={bonusNumber}
          onChange={(e) => setBonusNumber(e.target.value)}
          disabled={isLoading}
        />
        
        <Button onClick={handleCheckResult} disabled={isLoading || !purchaseId}>
          결과 확인하기
        </Button>
      </div>

      {lottoResult && (
        <div style={{ padding: '15px', background: '#f0f8ff', borderRadius: '8px' }}>
          <h4>🏆 당첨 통계</h4>
          <p>3개 일치 (5,000원) - {lottoResult.resultCounts.FIFTH || 0}개</p>
          <p>4개 일치 (50,000원) - {lottoResult.resultCounts.FOURTH || 0}개</p>
          <p>5개 일치 (1,500,000원) - {lottoResult.resultCounts.THIRD || 0}개</p>
          <p>5개 일치, 보너스 볼 일치 (30,000,000원) - {lottoResult.resultCounts.SECOND || 0}개</p>
          <p>6개 일치 (2,000,000,000원) - {lottoResult.resultCounts.FIRST || 0}개</p>
          <p style={{ color: '#888' }}>낙첨 (0원) - {lottoResult.resultCounts.NOTHING || 0}개</p>
          
          <h4 style={{ color: 'blue', marginTop: '10px' }}>총 수익률: {lottoResult.profitRate}%</h4>
        </div>
      )}

      <ErrorDisplay error={error} />
    </div>
  );
}

export default Lotto;
