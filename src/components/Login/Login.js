import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const correctPassword = 'secret123';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      onLogin(name);
    } else {
      alert('Incorrect Password ❌');
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login to Quiz App</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="login-input"
          placeholder="Enter Your Name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          className="login-input"
          placeholder="Enter Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
