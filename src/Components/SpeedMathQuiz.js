import React, { useState, useEffect, useRef } from 'react';
import katex from 'katex';



const MathQuiz = () => {

const selectedOption = localStorage.getItem("selectedOption");
const optionValues = {
  easy: 100,
  medium: 1000,
  hard: 100000,
  expert: 1000000
};
const quizselectedOption = parseInt(optionValues[selectedOption]);


  const selectedTimer = localStorage.getItem("selectedTimer");
  const quizSelectedTimer = parseInt(selectedTimer) * 60;

  const [timer, setTimer] = useState(quizSelectedTimer);
    
    const handleBackClick = () => {
      window.location.reload();
  
    };


  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [totalIncorrect, setTotalIncorrect] = useState(0);
  const [totalSkipped, setTotalSkipped] = useState(0);

  const [HideTimer, setHideTimer] = useState(false);

  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
const [isAnswerIncorrect, setIsAnswerIncorrect] = useState(false);
  


  
  useEffect(() => {
    generateQuestion();
    const interval = setInterval(() => {
      setTimer(timer => timer - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clearInterval();
      showReport();
      setHideTimer(true);
    }
  }, [timer]);

const minutes = Math.floor(timer / 60);
const seconds = timer % 60;

  const generateQuestion = () => {
    const operators = ['+', '-', '*'];
    const num1 = Math.floor(Math.random() * quizselectedOption) + 1;
    const num2 = Math.floor(Math.random() * quizselectedOption) + 1;
    const operator = operators[Math.floor(Math.random() * operators.length)];
    const ques = `${num1} ${operator} ${num2}`;
    setQuestion(ques);
    setAnswer('');
    setTotalQuestions(totalQuestions => totalQuestions+1);
  };

const checkAnswer = () => {
  if (answer){
    setTotalAnswered(totalAnswered => totalAnswered + 1);
    const actualAnswer = eval(question);
    if (parseInt(answer) === actualAnswer) {
      setTotalCorrect(totalCorrect => totalCorrect + 1);
      setIsAnswerCorrect(true);
      setIsAnswerIncorrect(false);
    } else {
      setTotalIncorrect(totalIncorrect => totalIncorrect + 1);
      setIsAnswerCorrect(false);
      setIsAnswerIncorrect(true);
    }
    generateQuestion();
  } else {
    setTotalSkipped(totalSkipped => totalSkipped + 1);
    generateQuestion();
  }
};

useEffect(() => {
  if (isAnswerCorrect) {
    const timer = setTimeout(() => {
      setIsAnswerCorrect(false);
    }, 1200);
    return () => clearTimeout(timer);
  }
  if (isAnswerIncorrect) {
    const timer = setTimeout(() => {
      setIsAnswerIncorrect(false);
    }, 1200);
    return () => clearTimeout(timer);
  }
}, [isAnswerCorrect, isAnswerIncorrect]);


  const skipQuestion = () => {
    setTotalSkipped(totalSkipped => totalSkipped + 1);
    generateQuestion();
  };

  const showReport = () => {
    localStorage.setItem('totalQuestions', totalQuestions);
    localStorage.setItem('totalAnswered', totalAnswered);
    localStorage.setItem('totalCorrect', totalCorrect);
    localStorage.setItem('totalIncorrect', totalIncorrect);
    localStorage.setItem('totalSkipped', totalSkipped);
     };

  function MathQuestion({ question }) {
    // Replace * with \times and render the expression as HTML
    const questionWithTimes = question.replace(/\*/g, '\\times');
    const html = katex.renderToString(questionWithTimes, {
      throwOnError: false,
      displayMode: true,
      output: 'html',
    });

    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  }
  
  
  






  return (

    <div className="quizQues pb-5">


  <div className="correct-popup" data-aos="fade-right" style={{ display: isAnswerCorrect ? 'block' : 'none' }}>
  <span className="text">Correct!</span>
</div>
<div className="incorrect-popup" data-aos="fade-right" style={{ display: isAnswerIncorrect ? 'block' : 'none' }}>
  <span className="text">Incorrect!</span>
</div>



     {!HideTimer && (
      
      <form>
        <div data-aos="zoom-in-up">
          <button type="button" className="btn btn-timer float-right mb-5"> Timer: {minutes} min {seconds < 10 ? `0${seconds}` : seconds} sec </button> <br /><br /> <br />
          <h6 className='float-left'> 
            Question #{totalQuestions}</h6> <br />
          <div className="col-md-5 pt-4 mx-auto ">
            <div>
           </div>
      
            <h1 className='pb-3 '>
            <MathQuestion question={question} />
            </h1>
            <input 
            type="number" className="collectAns" value={answer}
             onChange={(event) => setAnswer(event.target.value)} />
            {answer === '' && (
    <span className="errortext ">Please enter a number</span>
  )}  
     </div>
          <div className="col-md-5 mx-auto mt-3">
            <button type="button" className="btn btn-secondary btn-submission" onClick={skipQuestion}>
              Skip
            </button>
            <button type="submit" className="btn btn-primary btn-submission" onClick={checkAnswer}  disabled={!answer}>
              Next
            </button>
          </div>
        </div>
        </form>
      )}
     
     {HideTimer && 
     <div className="col-md-9 mx-auto mt-3 ">
     <h3 className='text-center pb-5'><span>&mdash; </span> &nbsp; Result </h3>
     
     
     <table className="table table-bordered table-hover resultCard">
                                               
                                               <tbody>
                                                   <tr>
                                                   
                                                       <td> Total Questions </td>
                                                       <td>{totalQuestions }</td>
                                                   </tr>
                                                   <tr>
                                                   <td> Total Answered </td>
                                                       <td>{totalAnswered}</td>
                                                   </tr>
                                                   <tr>
                                                   <td> Correct Answers </td>
                                                       <td>{totalCorrect}</td>
                                                   </tr>
                                                   <tr>
                                                   <td> Wrong Answers </td>
                                                       <td>{totalIncorrect}</td>
                                                   </tr>
                                                   <tr>
                                                   <td> Skipped </td>
                                                       <td>{totalSkipped}</td>
                                                   </tr>
                                                   <tr>
                                                   <td> Accuracy </td>
                                                       <td>{(totalAnswered > 0) ? 
                                                       ((totalCorrect/totalAnswered) * 100).toFixed(2) : 0}%</td>
                                                   </tr>
                                                   </tbody>
                                           </table>
                                           <button   className="mt-4  button btn"
                                                         type="submit"
                                                         id="button" onClick={handleBackClick}   >
                                                           Restart Game  </button>
      
    </div> }
    </div>
 

  );
};

export default MathQuiz;
