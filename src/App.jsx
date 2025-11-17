import './App.css';

import Button from './components/common/Button';
import ErrorDisplay from './components/common/ErrorDisplay';

function App() {
  const testError = {
    code: "TEST_ERROR",
    message: "이것은 테스트용 오류 메시지입니다."
  };

  return (
    <div className="App">
      <header>
      </header>

      <h2>1단계 공통 컴포넌트 테스트</h2>
      
      <Button onClick={() => alert('버튼 클릭됨!')}>
        테스트 버튼
      </Button>
      <Button disabled>
        비활성화 버튼
      </Button>

      <ErrorDisplay error={testError} />

      <p>(오류가 없으면 아래에는 아무것도 안 보여야 합니다)</p>
      <ErrorDisplay error={null} />
    </div>
  );
}

export default App;
