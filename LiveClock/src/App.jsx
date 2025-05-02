import React, { useState, useEffect } from 'react';

function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer); 
  }, []);

  const containerStyle = {
    fontFamily: "'Orbitron', sans-serif",
    background: 'linear-gradient(to right, #8360c3, #2ebf91)',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const clockStyle = {
    backgroundColor: '#000',
    color: '#0ff',
    padding: '40px 60px',
    fontSize: '3rem',
    borderRadius: '20px',
    boxShadow: '0 0 25px #0ff',
    textAlign: 'center',
    letterSpacing: '2px',
  };

  return (
    <div style={containerStyle}>
      <div style={clockStyle}>
         {time.toLocaleTimeString()}
      </div>
    </div>
  );
}

export default LiveClock;
