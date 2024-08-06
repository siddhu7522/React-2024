import { useReducer, useState } from "react";

const initialState ={
    count:0,
    step:1
  }
//reducer func which takes two params initial state and action
const reducerFunc =(state, action) =>{
   switch (action.type) {
    case "inc":
        return {...state, count:state.count+state.step}
    case "dec":
        return {...state, count:state.count-state.step}
    case "setCount":
        return {...state, count:action.payload}
    case "setStep":
        return {...state, step:action.payload}
    case "reset":
        return initialState
    default:
        break;
   }
}

function DateCounterV2() {
  //const [count, setCount] = useState(0);

  //Using useReducer instead of useState
  //useReducer on the left hand side which takes two parameters in the array (meaning it returns those two)  . One is currentState and other is dispatch. 
  //On the right hand side it takes two parameters . One is reducer func and other is initial state
  //Later we can acccess the properties that are defined in the initialState from the state from left hand side
  const [state, dispatch] =useReducer(reducerFunc, initialState)

  //const [step, setStep] = useState(1);

  // This mutates the date object.
   const date = new Date("june 21 2027");
   date.setDate(date.getDate() + state.count);

  const dec = function () {
    dispatch({type:"dec"})
    // setCount((count) => count - 1);
    //setCount((count) => count - step);
  };

  const inc = function () {
    dispatch({type:"inc"})
    // setCount((count) => count + 1);
    //setCount((count) => count + step);
  };

  const defineCount = function (e) {
    //setCount(Number(e.target.value));
    dispatch({type:"setCount", payload:Number(e.target.value)})
  };

  const defineStep = function (e) {
    //setStep(Number(e.target.value));
    dispatch({type:"setStep", payload:Number(e.target.value)})
  };

  const reset = function () {
    //setCount(0);
   // setStep(1);
   dispatch({type: "reset"})
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={state.step}
          onChange={defineStep}
        />
        <span>{state.step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={state.count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounterV2;