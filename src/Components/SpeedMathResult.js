import React, { useState, useEffect, useRef } from 'react';
import katex from 'katex';

const MathQuizRes = () => {
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [answer, setAnswer] = useState('');
  const [question, setQuestion] = useState('2 ** 3'); // Example question with **

  const showReport = () => {
    localStorage.setItem('totalQuestions', totalQuestions);
    localStorage.setItem('totalAnswered', totalAnswered);
    localStorage.setItem('totalCorrect', totalCorrect);
    localStorage.setItem('totalIncorrect', totalIncorrect);
    localStorage.setItem('totalSkipped', totalSkipped);
    alert(`Total Questions: ${totalQuestions} Total Answered: ${totalAnswered} Total Skipped: ${totalSkipped} Total Correct: ${totalCorrect} Total Incorrect: ${totalIncorrect}`);
  };

  function MathQuestion({ question }) {
    // Replace * with \times and ** with ^
    const questionWithTimes = question.replace(/\*/g, '\\times');
    const questionWithCaret = questionWithTimes.replace(/\*\*/g, '^');

    const html = katex.renderToString(questionWithCaret, {
      throwOnError: false,
      displayMode: true,
      output: 'html',
    });

    // Use dangerouslySetInnerHTML to set the HTML content of a div
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  }

  return (
    <div className="quizQues pb-5">
      {!HideTimer && (
        <form>
          <div data-aos="zoom-in-up">
            <button type="button" className="btn btn-timer float-right mb-5">
              Timer: {minutes} min {seconds < 10 ? `0${seconds}` : seconds} sec
            </button>
            <br /><br /> <br />
            <h6 className='float-left'>Question #{totalQuestions - 1}</h6> <br />
            <div className="col-md-5 pt-4 mx-auto">
              <div></div>

              <h1 className='pb-3'>
                <MathQuestion question={question} />
              </h1>
              <input
                type="number"
                className="collectAns"
                value={answer}
                onChange={(event) => setAnswer(event.target.value)}
              />
              {answer === '' && <span className="errortext">Please enter a number</span>}
            </div>
            <div className="col-md-5 mx-auto mt-3">
              <button type="button" className="btn btn-secondary btn-submission" onClick={skipQuestion}>
                Skip
              </button>
              <button type="submit" className="btn btn-primary btn-submission" onClick={checkAnswer} disabled={!answer}>
                Next
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default MathQuizRes;
