
import React, { useState } from 'react';
import './index.css';

// Image URLs
const chefImageUrl = 'https://i.pinimg.com/564x/7c/25/e9/7c25e906c06774c265ba2e7a5b5ad1a3.jpg';
const customerImageUrl = 'https://i.pinimg.com/564x/43/d4/de/43d4de13f6c04885fc8c2104de35e3ce.jpg';

function App() {
  const [role, setRole] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (role) => {
    setIsLoggedIn(true);
    setRole(role);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setRole('');
  };

  return (
    <div className="App">
      <header className="App-header">
        {isLoggedIn ? (
          <RoleSpecificContent role={role} handleLogout={handleLogout} />
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
      <button onClick={() => handleLogin('chef')}>Login as Chef</button>
      <button onClick={() => handleLogin('customer')}>Login as Customer</button>
    </div>
  );
}

function RoleSpecificContent({ role, handleLogout }) {
  const imageUrl = role === 'chef' ? chefImageUrl : customerImageUrl;
  const welcomeMessage = role === 'chef'
    ? 'Here you can manage your recipes and orders.'
    : 'Browse the menu and place your orders.';

  return (
    <div className="RoleContent">
      <h2>Welcome, {role === 'chef' ? 'Chef!' : 'Customer!'}</h2>
      <img src={imageUrl} alt={role} className="RoleImage" />
      <p>{welcomeMessage}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default App;
