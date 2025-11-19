import React from 'react';
import Button from '../common/Button';
import ErrorDisplay from '../common/ErrorDisplay';

function Lotto() {
  return (
    <div>
      <h3>로또 게임</h3>

      <div style={{ marginBottom: '20px', padding: '15px', border: '1px solid #eee', borderRadius: '8px' }}>
        <h4>구입금액 입력</h4>
        <label>구입금액 (1,000원 단위)</label>
        <input
          type="number"
          placeholder="예) 8000"
        />
        <Button>구매하기</Button>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h4>구매한 로또 번호</h4>
        <p>구매 후 확인 가능합니다.</p>
      </div>

      <div style={{ marginBottom: '20px', padding: '15px', border: '1px solid #eee', borderRadius: '8px' }}>
        <h4>당첨 번호 입력</h4>

        <label>당첨 번호 6개 (쉼표로 구분)</label>
        <input
          type="text"
          placeholder="예) 1,2,3,4,5,6"
        />

        <label>보너스 번호</label>
        <input
          type="number"
          placeholder="예) 7"
        />

        <Button>결과 확인하기</Button>
      </div>

      <div>
        <h4>당첨 통계</h4>
        <p>결과 확인 후 표시됩니다.</p>
      </div>

      <ErrorDisplay error={null} />
    </div>
  );
}
export default Lotto;
