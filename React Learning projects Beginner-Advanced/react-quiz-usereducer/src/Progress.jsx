import React from 'react'

function Progress({questionIndex,numQuestions,maxPossiblePoints}) {
  return (
    <header className='progress'>
        <progress max={numQuestions} value={questionIndex}/>
        <p>Question <strong>{questionIndex +1}</strong>/{numQuestions} </p>
        <p>Points <strong>{maxPossiblePoints}</strong></p>
    </header>
  )
}

export default Progress