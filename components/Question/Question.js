import React, { useState, useEffect } from 'react';
import './Question.scss';

const Question = ({ question, onSubmit, isWaiting }) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => setInputValue(''), [question]);

  const renderQuestion = () => {
    switch (question.type) {
      case 'text':
        return (
          <>
            <input
              type="text"
              placeholder="Wpisz odpowiedź"
              onChange={e => setInputValue(e.target.value)}
              value={inputValue}
            />
            <button
              disabled={isWaiting}
              onClick={() => {
                onSubmit({ value: inputValue.trim().toLowerCase(), question });
              }}>
              Dalej
            </button>
          </>
        );
      case 'radio':
        return (
          <>
            {question.answers.map((answer, i) => (
              <div key={i}>
                <label>
                  <input
                    type="radio"
                    value={answer}
                    checked={inputValue === answer}
                    onChange={() => setInputValue(answer)}
                  />
                  {' ' + answer}
                </label>
              </div>
            ))}
            <button
              onClick={() => {
                onSubmit({ value: inputValue, question });
              }}
              disabled={isWaiting}>
              Dalej
            </button>
          </>
        );
      default:
        return '';
    }
  };

  return (
    <div className="questionWrapper">
      <h5>{question.question}</h5>
      {renderQuestion()}
    </div>
  );
};

export default Question;
