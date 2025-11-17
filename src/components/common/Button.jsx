import React from 'react';

function Button({ children, onClick, disabled = false, ...props }) {
  return (
    <button
      className="common-blue-button"
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
export default Button;
