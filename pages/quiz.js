import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import Navigation from '../components/Navigation/Navigation';
import '../components/QuizPage/QuizPage.scss';
import Question from '../components/Question/Question';
import { questions } from '../components/QuizPage/questions';
import shuffle from 'lodash.shuffle';

const QuizPage = () => {
  const [index, setIndex] = useState(-1);
  const [message, setMessage] = useState('');
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [waiting, setWaiting] = useState(false);

  useEffect(() => {
    questions.forEach(question => {
      if (question.answers) question.answers = shuffle(question.answers);
    });
  }, []);

  const onSubmit = ({ value, question }) => {
    if (value === question.answer) {
      setMessage('<p style="color: green">Poprawna odpowiedź!</p>');
      setCorrectAnswers(i => i + 1);
      setWaiting(true);
      setTimeout(() => {
        setIndex(i => i + 1);
        setMessage('');
        setWaiting(false);
      }, 2500);
    } else {
      setMessage(
        `<p style="color: red">Niepoprawna odpowiedź!</p><p>Poprawna odpowiedź: <b>${question.answer.replace(
          /^\w/,
          c => c.toUpperCase(),
        )}</b></p>`,
      );
      setWaiting(true);
      setTimeout(() => {
        setIndex(i => i + 1);
        setMessage('');
        setWaiting(false);
      }, 2500);
    }
  };

  return (
    <Layout title="Quiz">
      <Navigation />
      <div className="quizWrapper">
        {index === -1 ? (
          <>
            <h3>Quiz sprawdzający wiedzę o Biblii</h3>
            <button className="begin" onClick={() => setIndex(0)}>
              Rozpocznij
            </button>
          </>
        ) : index < questions.length ? (
          <>
            <p>
              Pytanie {index + 1}/{questions.length}
            </p>
            <Question question={questions[index]} onSubmit={onSubmit} isWaiting={waiting} />
            <div dangerouslySetInnerHTML={{ __html: message }} />
          </>
        ) : (
          <>
            <h2>Koniec quizu</h2>
            <p>
              Prawidłowych odpowiedzi:{' '}
              <b>
                {correctAnswers}/{questions.length}
              </b>
            </p>
            <p>
              Nieprawidłowych odpowiedzi:{' '}
              <b>
                {questions.length - correctAnswers}/{questions.length}
              </b>
            </p>
            <p>
              Poprawność odpowiedzi: <b>{Math.round((correctAnswers * 100) / questions.length)}%</b>
            </p>
            <button className="restart" onClick={() => window.location.reload()}>
              Zagraj jeszcze raz!
            </button>
          </>
        )}
      </div>
    </Layout>
  );
};

export default QuizPage;
