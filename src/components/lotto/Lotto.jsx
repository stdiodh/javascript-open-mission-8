import React, { useState } from 'react';
import Button from '../common/Button';
import ErrorDisplay from '../common/ErrorDisplay';

function Lotto() {
  const [purchaseAmount, setPurchaseAmount] = useState('');
  const [purchasedLottos, setPurchasedLottos] = useState([]);
  const [purchaseCount, setPurchaseCount] = useState(0);
  
  const [winningNumbers, setWinningNumbers] = useState('');
  const [bonusNumber, setBonusNumber] = useState('');

  const [lottoResult, setLottoResult] = useState(null);

  const [error, setError] = useState(null);

  return (
    <div>
      <h3>로또 게임</h3>
      <div style={{ marginBottom: '20px', padding: '15px', border: '1px solid #eee', borderRadius: '8px' }}>
        <h4>구입금액 입력</h4>
        <label>구입금액 (1,000원 단위)</label>
        <input
          type="number"
          placeholder="예) 8000"
          value={purchaseAmount}
          onChange={(e) => setPurchaseAmount(e.target.value)}
        />
        <Button>구매하기</Button>
      </div>

      {purchasedLottos.length > 0 && (
        <div style={{ marginBottom: '20px' }}>
          <h4>총 {purchaseCount}개를 구매했습니다.</h4>
          <p>구매 완료! 아래에서 당첨 번호를 입력하세요.</p>
        </div>
      )}

      <div style={{ marginBottom: '20px', padding: '15px', border: '1px solid #eee', borderRadius: '8px' }}>
        <h4>당첨 번호 입력</h4>

        <label>당첨 번호 6개 (쉼표로 구분)</label>
        <input
          type="text"
          placeholder="예) 1,2,3,4,5,6"
          value={winningNumbers}
          onChange={(e) => setWinningNumbers(e.target.value)}
        />

        <label>보너스 번호</label>
        <input
          type="number"
          placeholder="예) 7"
          value={bonusNumber}
          onChange={(e) => setBonusNumber(e.target.value)}
        />

        <Button>결과 확인하기</Button>
      </div>

      {lottoResult && (
        <div>
          <h4>당첨 통계</h4>
          <p>API 연동 후 결과가 표시됩니다.</p>
        </div>
      )}

      <ErrorDisplay error={error} />
    </div>
  );
}
export default Lotto;
