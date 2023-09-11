import React, { useState } from 'react';
import './App.css'

const App = () => {
    const [btnResult, setResult] = useState("");

    const btnClick = (e) => {
        setResult(btnResult.concat(e.target.name));
    }

    const btnClear = () => {
        setResult("");
    }

    const btnBackpace = () => {
        setResult(btnResult.slice(0, btnResult.length - 1));
    }

    const btnCalculator = () => {
        try {
            setResult(eval(btnResult).toString());
        } catch(err) {
            setResult("Calculate error!");
        }
    }
    return (
        <div className='container'>
            <div>
                <form>
                    <input type="text" value={btnResult} />
                </form>

                <div className='keywords'>
                    <div className='col'>
                        <button onClick={btnClear} className='btn btn-outline-primary' id="clear">Clear</button>
                        <button onClick={btnBackpace} className='btn btn-outline-primary' id="backpace">C</button>
                        <button name="/" onClick={btnClick} className='btn btn-outline-primary'>&divide;</button>
                    </div>

                    <div className='col'>
                        <button name="7" onClick={btnClick} className='btn btn-outline-dark'>7</button>
                        <button name="8" onClick={btnClick} className='btn btn-outline-dark'>8</button>
                        <button name="9" onClick={btnClick} className='btn btn-outline-dark'>9</button>
                        <button name="*" onClick={btnClick} className='btn btn-outline-primary'>&times;</button>
                    </div>

                    <div className='col'>
                        <button name="4" onClick={btnClick} className='btn btn-outline-dark'>4</button>
                        <button name="5" onClick={btnClick} className='btn btn-outline-dark'>5</button>
                        <button name="6" onClick={btnClick} className='btn btn-outline-dark'>6</button>
                        <button name="-" onClick={btnClick} className='btn btn-outline-primary'>&ndash;</button>
                    </div>

                    <div className='col'>
                        <button name="1" onClick={btnClick} className='btn btn-outline-dark'>1</button>
                        <button name="2" onClick={btnClick} className='btn btn-outline-dark'>2</button>
                        <button name="3" onClick={btnClick} className='btn btn-outline-dark'>3</button>
                        <button name="+" onClick={btnClick} className='btn btn-outline-primary'>+</button>
                    </div>

                    <div className='col'>
                        <button name="0" onClick={btnClick} className='btn btn-outline-dark'>0</button>
                        <button name="." onClick={btnClick} className='btn btn-outline-dark'>.</button>
                        <button onClick={btnCalculator} className='btn btn-outline-primary' id="equal">=</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;