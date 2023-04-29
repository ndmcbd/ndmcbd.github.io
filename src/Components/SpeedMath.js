import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SpeedMathQuiz from "./SpeedMathQuiz.js";
import AOS from "aos";
import "aos/dist/aos.css";

const SpeedMath = () => {
  useEffect(() => {
    document.title = "Speed Math - Notre Dame Math Club";
    const tHeight = document.querySelector("body").offsetHeight;
    document.getElementsByClassName(
      "boo"
    )[0].style.marginBottom = `calc(100vh - ${tHeight}px)`;
  }, []);

  const [timerStarted, setTimerStarted] = useState(false);
  const [showIns, setshowIns] = useState(true);
  const [selectedOption, setSelectedOption] = useState("easy");
  const [selectedTimer, setSelectedTimer] = useState(1);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleTimerChange = (event) => {
    setSelectedTimer(parseInt(event.target.value));
  };

  function handleStartGame() {
    localStorage.setItem('selectedOption', selectedOption);
    localStorage.setItem('selectedTimer', selectedTimer);

    console.log(selectedOption);
  
    setshowIns(false);
    setTimerStarted(true);
    ;
  }



  return (
    <div className="StartBit">


      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
      />
      <section className="sec_tit">
        <div className="header">
          <h1 className="ektuUpore">Speed Math</h1>
        </div>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link tabIndex="-1" to="../">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Speed Math
          </li>
        </ol>
      </section>
      <div className="container-fluid">
        <section className="row d-flex justify-content-center boo">
          <div className="content row">
            <div className="col-md-12">
              <div className="mwt row">
                <div className="col-md-12 col-sm-12" data-aos="zoom-in-up">
                  <div className="reg-form" data-aos="fade-up">
                  {showIns && <div className="instructions">

                      <h4 className="text-center ">Instructions</h4> <br />
                      <div className="insdesc mb-5">
                        <h5>
                          <span>&mdash; </span> &nbsp; Select difficulty
                        </h5>{" "}
                        <br />
                        <div className="col-md-12">
                          <label>
                            <input
                              type="radio"
                              id="easy"
                              name="difficulty"
                              value="easy"
                              checked={selectedOption === "easy"}
                              onChange={handleOptionChange}
                            />
                            <span>Easy</span>
                          </label>

                          <label>
                            <input
                              type="radio"
                              id="medium"
                              name="difficulty"
                              value="medium"
                              checked={selectedOption === "medium"}
                              onChange={handleOptionChange}
                            />
                            <span>Medium</span>
                          </label>

                          <label>
                            <input
                              type="radio"
                              id="hard"
                              name="difficulty"
                              value="hard"
                              checked={selectedOption === "hard"}
                              onChange={handleOptionChange}
                            />
                            <span>Hard</span>
                          </label>

                          <label>
                            <input
                              type="radio"
                              id="expert"
                              name="difficulty"
                              value="expert"
                              checked={selectedOption === "expert"}
                              onChange={handleOptionChange}
                            />
                            <span>Expert</span>
                          </label>

                        </div>
                        <br />
                        <h5>
                          <span>&mdash; </span> &nbsp; Select timer
                        </h5>
                        <br />
                        <div className="col-md-12">
                          <label>
                            <input
                              type="radio"
                              id="timer1"
                              name="timer"
                              value="1"
                              checked={selectedTimer === 1}
                              onChange={handleTimerChange}
                            />
                            <span>1 Minute</span>
                          </label>
                          <label>
                            <input
                              type="radio"
                              id="timer3"
                              name="timer"
                              value="3"
                              checked={selectedTimer === 3}
                              onChange={handleTimerChange}
                            />
                            <span>3 Minutes</span>
                          </label>
                          <label>
                            <input
                              type="radio"
                              id="timer5"
                              name="timer"
                              value="5"
                              checked={selectedTimer === 5}
                              onChange={handleTimerChange}
                            />
                            <span>5 Minutes</span>
                          </label>
                          <label>
                            <input
                              type="radio"
                              id="timer10"
                              name="timer"
                              value="10"
                              checked={selectedTimer === 10}
                              onChange={handleTimerChange}
                            />
                            <span>10 Minutes</span>
                          </label>
                          <label>
                            <input
                              type="radio"
                              id="timer30"
                              name="timer"
                              value="30"
                              checked={selectedTimer === 30}
                              onChange={handleTimerChange}
                            />
                            <span>30 Minutes</span>
                          </label>
                        </div>
                        <br />
                        Welcome to the Speed Math game! 
                        In this game, you will have 3 minutes to solve as many math problems as possible using mental calculations. To start the game, 
                        simply click on the "Start Game" button on the screen. 




                        <br /> <br />
                        
                        <span>&#x25cf;</span> Once you click on the start button, there will be a countdown from 3, 2, 1, and then the timer will begin.
 <br />
                        <span>&#x25cf;</span> You will be presented with a series of math problems, one at a time, and you must solve each problem as quickly as possible.
                        <br />
                        <span>&#x25cf;</span> To answer a question, simply type your answer in the input box provided on the screen and hit "enter" or "submit". If your answer is correct, you will receive one point, and if it is incorrect, you will receive zero points.
 <br />
                        <span>&#x25cf;</span> Keep in mind that the game is timed, so the faster you can solve the problems, the more points you will be able to earn.
{" "}
                        <br />
                        <span>&#x25cf;</span> At the end of the 3-minute countdown, the game will automatically stop, and your final score will be displayed on the screen.

                        <br />        <br />
                        Good luck and have fun!
                        <br />
                      </div>
                      <button
                        className="funcSubmit"
                        type="submit"
                        id="subbtn"
                        onClick={handleStartGame}
                      >
                        Start Game
                      </button>

                    </div> }
                    <div className="QuizContent">
                    {timerStarted &&     <SpeedMathQuiz  />}
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SpeedMath;
