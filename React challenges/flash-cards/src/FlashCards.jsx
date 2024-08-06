import React, { useState } from 'react'
import { questions } from './data'

function FlashCards() {
    const[selectedId, setSelectedId] =useState(null)
    const handleClick = (id)=>{
        //for closing the answer and display question again . if id was equal to selected then it will set to null and no question will be open
        setSelectedId(id!=selectedId?id:null)
    }
  return (
    <div className='flashcards'>
        {questions.map((question)=>{
            return(
                <div onClick={()=>handleClick(question.id)} key={question.id} className={question.id ===selectedId ? "selected":""} >
                    <p>{question.id === selectedId ? question.answer : question.question}</p>
                </div>
            )
        })}
    </div>
  )
}

export default FlashCards