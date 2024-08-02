import React, { useState } from 'react';
import './index.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    // Simulate login and set a username
    setIsLoggedIn(true);
    setUsername('John Doe');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <div className="App">
      <header className="App-header">
        {isLoggedIn ? (
          <Home username={username} handleLogout={handleLogout} />
        ) : (
          <Login handleLogin={handleLogin} />
        )}
      </header>
    </div>
  );
}

function Login({ handleLogin }) {
  return (
    <div className="Login">
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

function Home({ username, handleLogout }) {
  return (
    <div className="Home">
      <h2>Home Page</h2>
      <p>Welcome back, {username}!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default App;

