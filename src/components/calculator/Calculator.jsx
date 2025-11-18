// src/components/calculator/Calculator.jsx
import React, { useState } from 'react'; // useState 임포트
import Button from '../common/Button';
import ErrorDisplay from '../common/ErrorDisplay';

function Calculator() {
  // 1. 상태 변수 정의
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  // 2. '초기화' 버튼 핸들러
  const handleReset = () => {
    setExpression('');
    setResult(null);
    setError(null);
  };

  return (
    <div>
      <h3>문자열 덧셈 계산기</h3>
      
      <label>계산할 표현식 입력</label>
      <textarea
        placeholder="예) 1,2:3 또는 //;\n1,2;3"
        rows={5}
        style={{ width: '100%', minHeight: '80px' }}
        value={expression}
        onChange={(e) => setExpression(e.target.value)}
      />
      
      <div>
        <Button>계산하기</Button>
        <Button 
          onClick={handleReset} 
          style={{ backgroundColor: '#6c757d', marginLeft: '8px' }}
        >
          초기화
        </Button>
      </div>

      {result != null && (
        <div>
          <h3>결과</h3>
          <p>{result}</p>
        </div>
      )}
      
      <ErrorDisplay error={error} />
    </div>
  );
}

export default Calculator;
