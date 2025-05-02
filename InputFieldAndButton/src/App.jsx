import React, { useState } from 'react';

function InputFieldButton() {
  const [inputValue, setInputValue] = useState('');
  const [displayValue, setDisplayValue] = useState('');

  const handleSubmit = () => {
    setDisplayValue(inputValue);
  };

  const containerStyle = {
    fontFamily: 'Segoe UI, sans-serif',
    background: 'linear-gradient(to right, #ffecd2, #fcb69f)',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const cardStyle = {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    width: '90%',
    maxWidth: '500px',
  };

  const inputStyle = {
    padding: '12px 16px',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    width: '80%',
    marginBottom: '20px',
    outline: 'none',
  };

  const buttonStyle = {
    padding: '12px 24px',
    fontSize: '1rem',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#4CAF50',
    color: '#fff',
    cursor: 'pointer',
    marginLeft: '10px',
    transition: 'background-color 0.3s',
  };

  const displayStyle = {
    marginTop: '30px',
    fontSize: '1.2rem',
    color: '#333',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2> Enter Text</h2>
        <input
          type="text"
          value={inputValue}
          placeholder="Type something and press Enter"
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSubmit();
            }
          }}
          style={inputStyle}
        />
        <button onClick={handleSubmit} style={buttonStyle}>
          Show
        </button>
        {displayValue && (
          <div style={displayStyle}>
             You typed: <strong>{displayValue}</strong>
          </div>
        )}
      </div>
    </div>
  );
}

export default InputFieldButton;
