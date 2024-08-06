import React, { useEffect, useState } from 'react'

function App() {
  const[timer, setTimer] =useState(0)
  const[isRunning, setIsRunning] =useState(false)
  useEffect(()=>{
    let intervalId;
    if(isRunning){
      intervalId = setInterval(()=>{
        setTimer((prevTimer)=>prevTimer+1)
      },1000)
    }else{
      clearInterval(intervalId)
    }
    
    return() =>clearInterval(intervalId)
  },[isRunning])

  const handleStart = () =>{
    setIsRunning(true)
  }
  const handlePause = () =>{
    setIsRunning(false)
  }
  const handleReset = () =>{
    setTimer(0)
    setIsRunning(false)
  }
  return (
    <div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
      <p>{timer}</p>
    </div>
  )
}

export default App