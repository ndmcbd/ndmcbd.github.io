import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';


const Math = () => {
    useEffect(() => {
        document.title = "MathMate - Notre Dame Math Club";
        const tHeight = document.querySelector('body').offsetHeight
        document.getElementsByClassName('boo')[0].style.marginBottom = `calc(100vh - ${tHeight}px)`;
    }, []);

    const [inputValue, setInputValue] = useState("");
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [output, setOutput] = useState('');
    const [showOutput, setShowOutput] = useState(false);


 
    function handleChange(event) {
      const value = event.target.value;
      setInputValue(value);
  
     
    }
    const isInputValid = /^\d+(,\s*\d+)*$/.test(inputValue.trim());
    function handleSubmit(event) {
        event.preventDefault();
        setIsFormSubmitted(true);
        
        const postData = async () => {
          try {
            const response = await axios.post('https://app.ndmc.repl.co/function.php?data='+inputValue, {
              data: inputValue
            });
            setOutput(response.data);
            setShowOutput(true);

          } catch (error) {
            console.error(error);
          }
        };
        
        postData();
      }
    return (
        <div>
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
                    <h1 className="ektuUpore">MathMate</h1>
                </div>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link tabIndex="-1" to="../">
                            Home
                        </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        MathMate
                    </li>
                </ol>
            </section>
            <div className="container-fluid">
                <section className="row d-flex justify-content-center boo">
                    <div className="content row">
                        <div className="col-md-12">
                            <div className="mwt row">
                                <h2 className="btex text-center">
                                    FunctionMania 
                                </h2> <br />  
                                <div
                                    className="col-md-12 col-sm-12"
                                    data-aos="zoom-in-up"
                                >
                                    <div
                                        className="reg-form"
                                        data-aos="fade-up"
                                    >
                                        <form id="func" className="func" onSubmit={handleSubmit}  >

                                            <div className="instructions">
                                                <h4>

                                                    FunctionMania is the first-ever math tool created by the Notre Dame Math Club.
                                                    This intuitive and user-friendly tool allows students to explore and visualize a wide range of mathematical functions.
                                                    This tool is in development and currently limited to only polynomials. <br />  <br />
                                                    Here are short instructions on how to input the coefficients of a polynomial expression step by step:<br />

                                                    <span>&#x25cf;</span>  Start with the coefficient of the highest power of the variable in the expression. <br />
                                                    <span>&#x25cf;</span>  List variable term coefficients in descending order until reaching the constant term. <br />
                                                    <span>&#x25cf;</span>  If there are any missing terms, add a coefficient of 0 for that term. <br />
                                                    <span>&#x25cf;</span>  The resulting sequence of coefficients represents the polynomial expression. <br />
                                                    <span>&#x25cf;</span>  For example, to input the coefficients of x^4 + 3x^2 + 2x + 4, list them in the order 1, 0, 3, 2, 4.<br />

                                                  
                                                </h4>


                                            </div>

                                            <div className="col-md-12 mathcontent">
                                                <div className="row contform">
                                                  
                                                   
                                                    <div className="col-md-6">
                                                    <br /> 
                                                    <h3><span>&mdash; </span> Input Data</h3>
                                                        <input
                                                            type="text"
                                                            name="funcdata"
                                                            value={inputValue}
                                                            onChange={handleChange}
                                                            placeholder="Example: 1, 0, 2, 1, 3"
                                                            required
                                                        />
                                                    {!isInputValid && (
        <small style={{ color: "#ff8585" }}>Only numbers and commas are allowed for input.  </small> 
      )}<br /> <br />
                                                        <button 
                                                         className="funcSubmit"
                                                         type="submit"
                                                         id="subbtn"
                                                          disabled={!isInputValid}
                                                         style={{ backgroundColor: isInputValid ? "" : "#4d4b60" }}
                                                       
                                                        >
                                                            Submit
                                                        </button>
                                                   
                                                    </div>
                                                    

                                                    {showOutput && ( 
                                                   
                                                    <div className="col-md-6 " id="resultafter">
                                                        <br />  
                                                    <h3><span>&mdash; </span> Output Data</h3>
                                                  <h3>f(x) = {output[0]}</h3>  
                                                  
                                                    <table className="table table-bordered table-hover">
                                               
                                                <tbody>
                                                    <tr>
                                                    
                                                        <td> 1st Derivative </td>
                                                        <td>{output[1]}</td>
                                                    </tr>
                                                    <tr>
                                                    <td> 2nd Derivative </td>
                                                        <td>{output[2]}</td>
                                                    </tr>
                                                    <tr>
                                                    <td> 3rd Derivative </td>
                                                        <td>{output[3]}</td>
                                                    </tr>
                                                    <tr>
                                                    <td> 4th Derivative </td>
                                                        <td>{output[4]}</td>
                                                    </tr>
                                                    <tr>
                                                    <td> Integral </td>
                                                        <td>{output[5]}</td>
                                                    </tr>
                                                    </tbody>
                                            </table>
                                            </div>
                                                    )} 
                                                      
                                               


                                                  
                                                </div>
                                            </div>
                                        </form>
                                       
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

export default Math;
