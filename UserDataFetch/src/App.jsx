import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  }, []);

  
  const containerStyle = {
    fontFamily: 'Segoe UI, sans-serif',
    background: 'linear-gradient(to right, #83a4d4, #b6fbff)',
    minHeight: '100vh',
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '30px',
  };

  const cardStyle = {
    background: '#fff',
    padding: '20px 30px',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '600px',
  };

  const userItemStyle = {
    padding: '12px 0',
    borderBottom: '1px solid #eee',
    fontSize: '1.1rem',
    color: '#555',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}> User List</h1>
      <div style={cardStyle}>
        {loading ? (
          <p style={{ fontSize: '1.2rem', textAlign: 'center' }}> Loading users...</p>
        ) : (
          users.map((user) => (
            <div key={user.id} style={userItemStyle}>
              👤 {user.name}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default UserList;
