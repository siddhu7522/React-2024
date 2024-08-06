import React from 'react'

function StartScreen({numQuestions, dispatch}) {
  return (
    <div className='start'>
        <h2>Welcome to the react quiz</h2>
        <h3>{numQuestions} questions to test your react mastery</h3>
        <button onClick={()=>dispatch({type:"startGame"})} className='btn btn-ui'>Lets start</button>
    </div>
  )
}

export default StartScreen