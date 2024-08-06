import React from 'react'

function NextButton({ answer, dispatch, questionIndex, numQuestions }) {

  const finishTest = questionIndex < numQuestions - 1
  const showFinishButton = questionIndex === numQuestions-1

    return (
      <div>
        { finishTest && answer && <button onClick={() => dispatch({ type: "nextQuestion" })} className='btn btn-ui'>Next</button>}
        {showFinishButton && answer && <button onClick={() => dispatch({ type: "finishQuiz" })} className='btn btn-ui'>Finish</button> }
      </div>
    )

}

export default NextButton