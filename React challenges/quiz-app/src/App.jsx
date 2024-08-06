import { useEffect, useState } from 'react'
import quizQuestions from './data'

function App() {
  const [questionIndex, setQuestionIndex] = useState(0)
  const question = quizQuestions[questionIndex]
  const [selectedOption, setSelectedOption] = useState(null)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const options = quizQuestions[questionIndex].options.map((option) => {
    return (
      <div key={option.id}>
        <input value={option} onChange={(e) => setSelectedOption(e.target.value)} checked={selectedOption === option} type="radio" name={question.id} id={question.id} />
        <label>{option}</label>
      </div>
    )
  })
  const handleNext = () => {
    console.log(quizQuestions.length)
    if (questionIndex < quizQuestions.length - 1) {
      setQuestionIndex(questionIndex + 1)
    }
    if(!selectedOption){
      alert("pls select a option before going to next")
      setQuestionIndex(questionIndex)
    }

  }

  const handlePrevious = () => {
    setQuestionIndex(questionIndex - 1)
  }

  useEffect(() => {
    const findSomething = quizQuestions.find((x) => x.correctAnswer === selectedOption)
    if (findSomething) {
      setScore((prevScore) => prevScore + 1)
    }
  }, [selectedOption])




  return (
    <div>
      <h1>Welcome to the quiz</h1>
      {showScore && `Your final score is ${score}`}
      <br /><br />
      {!showScore &&
        <>
          {question.question}
          {options}
          <br />
          {questionIndex > 0 && <button onClick={handlePrevious}>Previous</button>}
          {questionIndex != quizQuestions.length - 1 && <button onClick={handleNext}>Next</button>}
          {questionIndex === quizQuestions.length - 1 && <button onClick={() => setShowScore(true)}>Submit</button>}
        </>
      }
    </div>
  )
}

export default App