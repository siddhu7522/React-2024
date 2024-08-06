import React, { useContext } from 'react'
import { QuizContext } from './context/QuizContext'

function Progress() {
  const {numQuestions, maxPossiblePoints, questionIndex} =useContext(QuizContext)
  return (
    <header className='progress'>
        <progress max={numQuestions} value={questionIndex}/>
        <p>Question <strong>{questionIndex +1}</strong>/{numQuestions} </p>
        <p>Points <strong>{maxPossiblePoints}</strong></p>
    </header>
  )
}

export default Progress