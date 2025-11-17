import React from 'react';

function ErrorDisplay({ error }) {
  if (!error) {
    return null;
  }

  return (
    <div className="error-display" style={{ color: 'red', marginTop: '10px' }}>
      <p><strong>오류 발생:</strong> [{error.code}] {error.message}</p>
    </div>
  );
}

export default ErrorDisplay;
