import React, { useContext } from 'react'
import NextButton from './NextButton'
import { QuizContext } from './context/QuizContext'

function Questions() {
  const {numQuestions, questionIndex, dispatch, answer, question} =useContext(QuizContext)
  return (
    <div>
        <h3>{question.question}</h3>
        <div className='options'>
            {question.options.map((option,index)=>(
                <button disabled={answer} onClick={()=>dispatch({type:"newAnswer", payload: index})} key={option} className={`btn btn-option ${index===answer ? "answer" : ""} ${answer && (index===question.correctOption? "correct":"wrong")}`}>{option}</button>
            ))}
        </div>
        <NextButton />
    </div>
  )
}

export default Questions