import React, { useContext } from 'react'
import { QuizContext } from './context/QuizContext'

function NextButton() {

  const { answer, dispatch, questionIndex, numQuestions } = useContext(QuizContext)
  const finishTest = questionIndex < numQuestions - 1
  const showFinishButton = questionIndex === numQuestions - 1

  return (
    <div>
      {finishTest && answer && <button onClick={() => dispatch({ type: "nextQuestion" })} className='btn btn-ui'>Next</button>}
      {showFinishButton && answer && <button onClick={() => dispatch({ type: "finishQuiz" })} className='btn btn-ui'>Finish</button>}
    </div>
  )

}

export default NextButton