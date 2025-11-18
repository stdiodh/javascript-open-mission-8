// src/components/calculator/Calculator.jsx
import React from 'react';
import Button from '../common/Button';
import ErrorDisplay from '../common/ErrorDisplay';

function Calculator() {
  return (
    <div>
      <h3>문자열 덧셈 계산기</h3>
      
      <label>계산할 표현식 입력</label>
      <textarea
        placeholder="예) 1,2:3 또는 //;\n1,2;3"
        rows={5}
        style={{ width: '100%', minHeight: '80px' }}
      />
      
      <div>
        <Button>계산하기</Button>
        <Button style={{ backgroundColor: '#6c757d', marginLeft: '8px' }}>
          초기화
        </Button>
      </div>

      <div>
        <h3>결과</h3>
        <p>계산 결과가 여기에 표시됩니다.</p>
      </div>

      <ErrorDisplay error={null} />
    </div>
  );
}

export default Calculator;
