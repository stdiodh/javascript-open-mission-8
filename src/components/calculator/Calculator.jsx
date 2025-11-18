// src/components/calculator/Calculator.jsx
import React, { useState } from 'react';
import Button from '../common/Button';
import ErrorDisplay from '../common/ErrorDisplay';
import apiClient from '../../api/apiClient';

function Calculator() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setResult(null);
    setError(null);
    setIsLoading(true);

    try {
      const response = await apiClient.post('/calculator/add', {
        expression: expression 
      });
      setResult(response.data.result);

    } catch (apiError) {
      if (apiError.response && apiError.response.data) {
        setError(apiError.response.data);
      } else {
        setError({ code: 'UNKNOWN', message: '알 수 없는 오류가 발생했습니다.' });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setExpression('');
    setResult(null);
    setError(null);
    setIsLoading(false);
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
        disabled={isLoading}
      />
      
      <div>
        <Button onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? '계산 중...' : '계산하기'}
        </Button>
        <Button 
          onClick={handleReset} 
          style={{ backgroundColor: '#6c757d', marginLeft: '8px' }}
          disabled={isLoading}
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
