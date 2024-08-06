import React, { useState } from 'react'

function App() {
  const [step, setStep] = useState(1)
  const [count, setCount] = useState(0)
  const today = new Date()
  const noOfDaysToAdd = count;
  today.setDate(today.getDate() + noOfDaysToAdd);
  const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
  const futureDateFormatted = today.toLocaleDateString('en-US', options);


  const stepDecrement = () => {
    if (step > 1) {
      setStep((prevStep) => prevStep - 1)
    }
  }
  const stepIncrement = () => {
    setStep((prevStep) => prevStep + 1)
  }
  const countDecrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - step)
    }
  }
  const countIncrement = () => {
    setCount((prevCount) => prevCount + step)
  }

  return (
    <>
      <div >
        <button onClick={stepDecrement}>-</button>
        <p>Step : {step}</p>
        <button onClick={stepIncrement}>+</button>
      </div>
      <br /><br />
      <h1>-------------------------------</h1>
      <div>
        <button onClick={countDecrement}>-</button>
        <p>Count : {count}</p>
        <button onClick={countIncrement}>+</button>
        <br />
        <h1>------------------------------</h1>
        {count < 1 ? (
          <p>Today is {futureDateFormatted}</p>
        ):(
          <p>{count} day from today is {futureDateFormatted}</p>
        )}
      </div>
    </>
  )
}

export default App