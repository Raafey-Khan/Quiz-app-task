// Quiz.js
import React, { useState, useEffect } from 'react';
import './Quiz.css';

import Question from '../Question';
import Result from '../Result';
import { toast } from 'react-toastify';

const Quiz = ({ userName, quizType }) => {
  const questionsData = {
    general: [
      {
        id: 1,
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris",
      },
      {
        id: 2,
        question: "Which language is used for web development?",
        options: ["Python", "JavaScript", "C++", "Java"],
        answer: "JavaScript",
      },
    ],
    space: [
      {
        id: 1,
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Jupiter",
      },
      {
        id: 2,
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Mercury", "Saturn"],
        answer: "Mars",
      },
    ],
  };

  const [selectedTopic, setSelectedTopic] = useState(quizType || '');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [startQuiz, setStartQuiz] = useState(!!quizType);

  useEffect(() => {
    if (quizType) setSelectedTopic(quizType);
  }, [quizType]);

  const questions = questionsData[selectedTopic] || [];

  const handleAnswer = (selectedAnswer) => {
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (selectedAnswer === correctAnswer) {
      toast.success("Correct Answer! 🎉");
    } else {
      toast.error(`Wrong Answer! ❌ Correct: ${correctAnswer}`);
    }

    setAnswers((prevAnswers) => [
      ...prevAnswers,
      { questionId: questions[currentQuestionIndex].id, answer: selectedAnswer },
    ]);

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setQuizCompleted(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setAnswers([]);
    setCurrentQuestionIndex(0);
    setQuizCompleted(false);
    setStartQuiz(false);
    setSelectedTopic('');
  };

  if (!startQuiz) {
    return (
      <div className="quiz-setup">
        <h2>Select a Quiz Topic</h2>
        <select
          value={selectedTopic}
          onChange={(e) => setSelectedTopic(e.target.value)}
        >
          <option value="">-- Choose Topic --</option>
          <option value="general">General Knowledge</option>
          <option value="space">Space</option>
        </select>
        <button onClick={() => {
          if (selectedTopic) {
            setStartQuiz(true);
          } else {
            toast.error("Please select a topic!");
          }
        }}>
          Start Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      {quizCompleted ? (
        <Result
          answers={answers}
          questions={questions}
          resetQuiz={resetQuiz}
          userName={userName}
          topic={selectedTopic}
        />
      ) : (
        <Question
          question={questions[currentQuestionIndex]}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  );
};

export default Quiz;
