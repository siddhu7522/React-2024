import React, { useContext, useEffect } from 'react'
import { QuizContext } from './context/QuizContext'

function Timer() {
  const {secondsRemaining, dispatch} =useContext(QuizContext)
    useEffect(()=>{
     const id=   setInterval(()=>{
            dispatch({type:"tick"})
        },1000)
    return ()=>{
        clearInterval(id)
    }
    },[dispatch])
  return (
    <div className='timer'>{secondsRemaining}</div>
  )
}

export default Timer