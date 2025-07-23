import './App.css';
import React, { useState, useEffect } from 'react';
import questionsData from './assets/quizData.jsx';

function shuffleArray(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function QuizApp() {
  // State
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [prevQuestion, setPrevQuestion] = useState(null);
  const [score, setScore] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [currentAnswered, setCurrentAnswered] = useState(false);
  const [userChoice, setUserChoice] = useState(null);

  // Shuffle once on mount
  useEffect(() => {
    setShuffledQuestions(shuffleArray(questionsData));
  }, []);

  const current = shuffledQuestions[currentIdx];

  const handleOptionClick = (option) => {
    if (currentAnswered) return;
    setUserChoice(option);
    setCurrentAnswered(true);
    if (option === current.answer) {
      setScore(s => s + 1);
    }
    setTotalAnswered(t => t + 1);
  };

  const pickRandomIndex = () => {
    if (shuffledQuestions.length < 2) return currentIdx;
    let next = currentIdx;
    while (next === currentIdx) {
      next = Math.floor(Math.random() * shuffledQuestions.length);
    }
    return next;
  };

  const handleNext = () => {
    if (!currentAnswered) return;
    setPrevQuestion({
      questionData: current,
      userChoice,
      correctAnswer: current.answer,
      wasCorrect: userChoice === current.answer
    });
    const next = pickRandomIndex();
    setCurrentIdx(next);
    setCurrentAnswered(false);
    setUserChoice(null);
  };

  const handlePrevious = () => {
    if (!prevQuestion) return;
    const idx = shuffledQuestions.findIndex(q => q.id === prevQuestion.questionData.id);
    setCurrentIdx(idx);
    setUserChoice(prevQuestion.userChoice);
    setCurrentAnswered(true);
    setPrevQuestion(null);
  };

  const handleReset = () => {
    setShuffledQuestions(shuffleArray(questionsData));
    setCurrentIdx(0);
    setPrevQuestion(null);
    setScore(0);
    setTotalAnswered(0);
    setCurrentAnswered(false);
    setUserChoice(null);
  };

  if (!current) return <p>Loading questions…</p>;

  return (
    <div className="quiz-container">
      <div className="stats">
        <div>Score: {score}</div>
        <div>Total Answered: {totalAnswered}</div>
      </div>

      {prevQuestion && (
        <div className="previous">
          <strong>Previous:</strong> {prevQuestion.questionData.question}
          <div className={prevQuestion.wasCorrect ? 'correct' : 'incorrect'}>
            Your answer: {prevQuestion.userChoice}
            {prevQuestion.wasCorrect ? ' ✓' : ` ✗ (Correct: ${prevQuestion.correctAnswer})`}
          </div>
        </div>
      )}

      <div className="question">
        <h3>{current.question}</h3>
      </div>

      <div className="options">
        {current.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleOptionClick(opt)}
            disabled={currentAnswered}
            className={
              currentAnswered
                ? opt === current.answer
                  ? 'option correct'
                  : opt === userChoice
                  ? 'option incorrect'
                  : 'option'
                : userChoice === opt
                ? 'option selected'
                : 'option'
            }
          >
            {opt}
          </button>
        ))}
      </div>

      {currentAnswered && (
        <div className="explanation">
          <strong>Explanation:</strong> {current.explanation}
        </div>
      )}

      <div className="navigation">
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleNext} disabled={!currentAnswered}>Next</button>
        <button onClick={handlePrevious} disabled={!prevQuestion}>Prev</button>
      </div>
    </div>
  );
}

export default QuizApp