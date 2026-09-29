import { useState } from "react";
import "./Calculator.css";
function Calculator() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState("");
    const add = () => {
        setResult(Number(num1) + Number(num2));
    };
    const subtract = () => {
        setResult(Number(num1) - Number(num2));
    };
    const multiply = () => {
        setResult(Number(num1) * Number(num2));
    };
    const divide = () => {
        if (num2 === "0") {
            setResult("Cannot divide by 0");
        } else {
            setResult(Number(num1) / Number(num2));
        }
    };
    const reset = () => {
        setNum1("");
        setNum2("");
        setResult("");
    }
    return (
    <div className="container">
        <h2>Simple Calculator</h2>
        <input
        type="number" placeholder="Enter first number" value={num1}
        onChange={(e) => setNum1(e.target.value)}
        />
       <input
       type="number" placeholder="Enter second number" value={num2}
       onChange={(e) => setNum2(e.target.value)}
       />
       <div className="buttons">
        <button onClick={add}>+</button>
        <button onClick={subtract}>-</button>
        <button onClick={multiply}>*</button>
        <button onClick={divide}>/</button>
       </div>
       <button className="reset" onClick={reset}>
        Reset
       </button>
       <h3>Result: {result}</h3>
    </div>
  );
}
export default Calculator;