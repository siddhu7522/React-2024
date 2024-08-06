import React from 'react'
import NextButton from './NextButton'

function Questions({question,dispatch, answer, questionIndex,numQuestions}) {
  return (
    <div>
        <h3>{question.question}</h3>
        <div className='options'>
            {question.options.map((option,index)=>(
                <button disabled={answer} onClick={()=>dispatch({type:"newAnswer", payload: index})} key={option} className={`btn btn-option ${index===answer ? "answer" : ""} ${answer && (index===question.correctOption? "correct":"wrong")}`}>{option}</button>
            ))}
        </div>
        <NextButton questionIndex={questionIndex}  answer={answer} dispatch={dispatch} numQuestions={numQuestions}/>
    </div>
  )
}

export default Questions