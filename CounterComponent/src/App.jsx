import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const containerStyle = {
    fontFamily: 'Segoe UI, sans-serif',
    height: '100vh',
    background: 'linear-gradient(to right, #74ebd5, #acb6e5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const cardStyle = {
    background: '#ffffff',
    padding: '40px',
    borderRadius: '15px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
    textAlign: 'center',
  };

  const countStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#333',
    margin: '20px 0',
  };

  const buttonStyle = {
    padding: '12px 24px',
    margin: '0 10px',
    fontSize: '1.1rem',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background 0.3s',
  };

  const incrementStyle = {
    ...buttonStyle,
    backgroundColor: '#4CAF50',
    color: 'white',
  };

  const decrementStyle = {
    ...buttonStyle,
    backgroundColor: '#f44336',
    color: 'white',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1> Counter App</h1>
        <div style={countStyle}>{count}</div>
        <button style={incrementStyle} onClick={() => setCount(count + 1)}>➕ Increment</button>
        <button style={decrementStyle} onClick={() => setCount(count - 1)}>➖ Decrement</button>
      </div>
    </div>
  );
}

export default Counter;
