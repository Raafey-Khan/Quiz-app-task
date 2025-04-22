import React, { useState } from 'react';
import './App.css';
import Quiz from './components/Quiz/Quiz';
import Login from './components/Login/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [quizType, setQuizType] = useState('general');

  const handleLogin = (name, selectedQuizType) => {
    setLoggedIn(true);
    setUserName(name);
    setQuizType(selectedQuizType);
  };

  return (
    <div className="app-wrapper">
      <div className="app-container">
        {!loggedIn ? (
          <Login onLogin={handleLogin} />
        ) : (
          <>
            <h1 className="app-title">Welcome, {userName} 👋</h1>
            <Quiz userName={userName} quizType={quizType} />
          </>
        )}
      </div>
      <ToastContainer position="top-right" autoClose={1000} />
    </div>
  );
};

export default App;
