// Result.js
import React, { useEffect } from 'react';

const Result = ({ answers, questions, resetQuiz, userName, topic }) => {
  const calculateScore = () => {
    let score = 0;
    answers.forEach((answer) => {
      const question = questions.find((q) => q.id === answer.questionId);
      if (question.answer === answer.answer) {
        score += 1;
      }
    });
    return score;
  };

  const score = calculateScore();

  useEffect(() => {
    fetch('http://localhost:5001/api/results', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: userName,
        score,
        total: questions.length,
        topic
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log("📥 Saved to MongoDB:", data);
      })
      .catch(err => {
        console.error("❌ Error saving result:", err);
      });
  }, []);

  return (
    <div className="result-container">
      <h2>Your Score: {score} / {questions.length}</h2>
      <button onClick={resetQuiz}>Try Again</button>
    </div>
  );
};

export default Result;
