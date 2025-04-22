// Question.js
import React from 'react';

const Question = ({ question, handleAnswer }) => {
  return (
    <div className="question-card">
      <h2 className="question-text">{question.question}</h2>
      <div className="option-buttons">
        {question.options.map((option, index) => (
          <button
            key={index}
            className="option-btn"
            onClick={() => handleAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
