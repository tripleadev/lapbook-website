import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import Navigation from '../components/Navigation/Navigation';
import '../components/QuizPage/QuizPage.scss';
import Question from '../components/Question/Question';
import { questions } from '../components/QuizPage/questions';

const QuizPage = () => {
  const [index, setIndex] = useState(0);
  const [message, setMessage] = useState('');
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [waiting, setWaiting] = useState(false);

  const onSubmit = ({ value, question }) => {
    if (value === question.answer) {
      setMessage('<p style="color: green">Poprawna odpowiedź!</p>');
      setCorrectAnswers(i => i + 1);
      setWaiting(true);
      setTimeout(() => {
        setIndex(i => i + 1);
        setMessage('');
        setWaiting(false);
      }, 2000);
    } else {
      setMessage(
        `<p style="color: red">Niepoprawna odpowiedź!</p><p>Poprawna odpowiedź: ${question.answer.replace(
          /^\w/,
          c => c.toUpperCase(),
        )}</p>`,
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
        {index < questions.length ? (
          <>
            <Question question={questions[index]} onSubmit={onSubmit} isWaiting={waiting} />
            <div dangerouslySetInnerHTML={{ __html: message }} />
          </>
        ) : (
          <>
            <h2>Koniec quizu</h2>
            <p>
              Poprawnych odpowiedzi:{' '}
              <b>
                {correctAnswers}/{questions.length}
              </b>
            </p>
            <p>
              Nieprawidłowych odpowiedzi: <b>{questions.length - correctAnswers}/2</b>
            </p>
            <p>
              Poprawność odpowiedzi: <b>{(correctAnswers * 100) / questions.length}%</b>
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
