import React, { useState, useEffect } from 'react';
import katex from 'katex';

const optionValues = {
  easy: { operators: ['+', '-', '*'], digitsFirst: [2, 2, 1], digitsSecond: [2, 2, 2] },
  medium: { operators: ['+', '-', '*', '/'], digitsFirst: [3, 3, 2, 3], digitsSecond: [3, 3, 2, 2] },
  hard: { operators: ['+', '-', '*', '/', '**'], digitsFirst: [4, 4, 2, 4, 2], digitsSecond: [4, 4, 2, 2, 1] },
  expert: { operators: ['+', '-', '*', '/', '**'], digitsFirst: [5, 5, 3, 6, 2], digitsSecond: [5, 5, 3, 3, 1] },
};

const MathQuiz = () => {
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [isAnswerIncorrect, setIsAnswerIncorrect] = useState(false);
  const selectedOption = localStorage.getItem('selectedOption');
  const difficultyLevel = optionValues[selectedOption];

  const [timer, setTimer] = useState(99999);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [gameState, setGameState] = useState('playing');
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [totalIncorrect, setTotalIncorrect] = useState(0);
  const [totalSkipped, setTotalSkipped] = useState(0);

  useEffect(() => {
    const selectedTimer = localStorage.getItem('selectedTimer');
    const quizSelectedTimer = parseInt(selectedTimer) * 60;
    setTimer(quizSelectedTimer);
    setTotalQuestions(0);
    generateQuestion();
  }, []);

  useEffect(() => {
    if (timer === 0) {
      setGameState('finished');
    }
  }, [timer]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (gameState === 'finished') {
      showReport();
    }
  }, [gameState]);

  const generateNumber = (numDigits) => {
    const minNumber = Math.pow(10, numDigits - 1);
    const maxNumber = Math.pow(10, numDigits) - 1;
    const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    return randomNumber;
  };

  const generateQuestion = () => {
    const { operators, digitsFirst, digitsSecond } = difficultyLevel;

    const operatorIndex = Math.floor(Math.random() * operators.length);
    const digitIndex = operatorIndex;
    const numDigitsFirst = digitsFirst[digitIndex];
    const numDigitsSecond = digitsSecond[digitIndex];

    let firstNum, secondNum;

    firstNum = generateNumber(numDigitsFirst);
    secondNum = generateNumber(numDigitsSecond);

    if (operatorIndex === 3) {
      firstNum -= firstNum % secondNum; // Ensure proper integer division
    } else if (operatorIndex === 4) {
      secondNum = Math.floor(Math.random() * 3) + 2;
    }

    const operator = operators[operatorIndex];
    const question = `${firstNum} ${operator} ${secondNum}`;
    setQuestion(question);
    setAnswer('');
    setTotalQuestions((prevTotalQuestions) => prevTotalQuestions + 1);
  };

  const checkAnswer = () => {
    if (answer) {
      setTotalAnswered((prevTotalAnswered) => prevTotalAnswered + 1);
      const actualAnswer = eval(question);
      const isCorrect = parseInt(answer) === actualAnswer;
      
      if (isCorrect) {
        setTotalCorrect((prevTotalCorrect) => prevTotalCorrect + 1);
      } else {
        setTotalIncorrect((prevTotalIncorrect) => prevTotalIncorrect + 1);
      }
      
      setIsAnswerCorrect(isCorrect);
      setIsAnswerIncorrect(!isCorrect);
      
      generateQuestion();
    } else {
      setTotalSkipped((prevTotalSkipped) => prevTotalSkipped + 1);
      generateQuestion();
    }
  };

  useEffect(() => {
    let effectTimer;

    if (isAnswerCorrect || isAnswerIncorrect) {
      effectTimer = setTimeout(() => {
        setIsAnswerCorrect(false);
        setIsAnswerIncorrect(false);
      }, 2000);
    }

    return () => clearTimeout(effectTimer);
  }, [isAnswerCorrect, isAnswerIncorrect]);

  const skipQuestion = () => {
    setTotalSkipped((prevTotalSkipped) => prevTotalSkipped + 1);
    generateQuestion();
  };

  const showReport = () => {
    localStorage.setItem('totalQuestions', totalQuestions);
    localStorage.setItem('totalAnswered', totalAnswered);
    localStorage.setItem('totalCorrect', totalCorrect);
    localStorage.setItem('totalIncorrect', totalIncorrect);
    localStorage.setItem('totalSkipped', totalSkipped);
  };

  const MathQuestion = ({ question }) => {
    const questionWithCaret = question.replace(/\*\*/g, '\\wedge');
    const questionWithTimes = questionWithCaret.replace(/\*/g, '\\times');

    const html = katex.renderToString(questionWithTimes, {
      throwOnError: false,
      displayMode: true,
      output: 'html',
    });

    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  };

  const handleRestart = () => {
    window.location.reload();
  };

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  return (
    <div className="quizQues pb-5">
  {isAnswerCorrect && (
    <div
      className="correct-popup"
      data-aos="fade-right"
      style={{ display: isAnswerCorrect ? 'block' : 'none' }}
    >
      <span className="text">Correct!</span>
    </div>
  )}
  {isAnswerIncorrect && (
    <div
      className="incorrect-popup"
      data-aos="fade-right"
      style={{ display: isAnswerIncorrect ? 'block' : 'none' }}
    >
      <span className="text">Incorrect!</span>
    </div>
  )}
      {gameState === 'playing' && (
        <form>
          <div data-aos="zoom-in-up">
            <button type="button" className="btn btn-timer float-right mb-5">
              Timer: {minutes} min {seconds < 10 ? `0${seconds}` : seconds} sec
            </button>
            <br />
            <br /> <br />
            <h6 className="float-left">Question #{totalQuestions}</h6> <br />
            <div className="col-md-5 pt-4 mx-auto">
              <div></div>
              <h1 className="pb-3">
                <MathQuestion question={question} />
              </h1>
              <input
                type="number"
                className="collectAns"
                value={answer}
                onChange={(event) => setAnswer(event.target.value)}
              />
              {!answer && <span className="errortext">Please enter a number</span>}
            </div>
            <div className="col-md-5 mx-auto mt-3">
              <button type="button" className="btn btn-secondary btn-submission" onClick={skipQuestion}>
                Skip
              </button>
              <button
                type="submit"
                className="btn btn-primary btn-submission"
                onClick={checkAnswer}
                disabled={!answer}
              >
                Next
              </button>
            </div>
          </div>
        </form>
      )}

      {gameState === 'finished' && (
        <div className="col-md-9 mx-auto mt-3 ">
          <h3 className="text-center pb-5">
            <span>&mdash; </span> &nbsp; Result{' '}
          </h3>

          <table className="table table-bordered table-hover resultCard">
            <tbody>
              <tr>
                <td>Total Questions</td>
                <td>{totalQuestions}</td>
              </tr>
              <tr>
                <td>Total Answered</td>
                <td>{totalAnswered}</td>
              </tr>
              <tr>
                <td>Correct Answers</td>
                <td>{totalCorrect}</td>
              </tr>
              <tr>
                <td>Wrong Answers</td>
                <td>{totalIncorrect}</td>
              </tr>
              <tr>
                <td>Skipped</td>
                <td>{totalSkipped}</td>
              </tr>
              <tr>
                <td>Your Score</td>
                <td>{totalCorrect}</td>
              </tr>
            </tbody>
          </table>
          <div className="text-center">
            <button className="btn btn-primary" onClick={handleRestart}>
              Restart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MathQuiz;