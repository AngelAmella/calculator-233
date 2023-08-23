import './App.css';
import React, {useState} from 'react';

function Calculator() {
  const [input1, setInput1] = useState ('');
  const [input2, setInput2] = useState ('');
  const [result, setResult] = useState ('');

  const handleInput1Change = (e) => {
    setInput1(e.target.value);
  }

  const handleInput2Change = (e) => {
    setInput2(e.target.value);
  }

  const handleAdd = () => {
    setResult(parseFloat(input1) + parseFloat(input2));
  }

  const handleMultiply = () => {
    setResult(parseFloat(input1) * parseFloat(input2));
  }

  const handleSubtract = () => {
    setResult(parseFloat(input1) - parseFloat(input2));
  }

  const handleDivide = () => {
    setResult(parseFloat(input1) / parseFloat(input2));
  }

  return (
    <div className="App">
      <header className="App-header">
       <div className='calculator-div'>
       <h1 id='calcu-h1'>Calculator</h1>

       <div className='input-fields'>
       <input type = "text" value={input1} onChange = {handleInput1Change} placeholder='First Number'/>
       <input type = "text" value={input2} onChange = {handleInput2Change} placeholder='Second Number'/>
       </div>
       <div className='button-container'>
       <button onClick={handleAdd}>+</button>
       <button onClick={handleMultiply}>*</button>
       <button onClick={handleSubtract}>-</button>
       <button onClick={handleDivide}>/</button>
       </div>

        <h1 id='result'>Result: {result}</h1>
        </div>
      </header>
    </div>
  );
}

export default Calculator;
