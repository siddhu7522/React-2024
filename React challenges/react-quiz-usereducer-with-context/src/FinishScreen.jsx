import React, { useContext } from 'react'
import { QuizContext } from './context/QuizContext'

function FinishScreen() {
  const { maxPossiblePoints, dispatch, highScore, points } = useContext(QuizContext)
  const percentage = (points / maxPossiblePoints) * 100
  return (
    <div>
      <p className='result'> You scored {points} out of {maxPossiblePoints} with percentage of {Math.ceil(percentage)}</p>
      <p className='highscore'>(HighScore : {highScore})</p>
      <button onClick={() => dispatch({ type: "resetQuiz" })} className='btn btn-ui'>Restart Quiz</button>
    </div>
  )
}

export default FinishScreen